'use strict';

angular.module('whiteboardApp')
  .factory('whiteboard', function ($http) {
    // Service logic
    var i, j,
      whiteboard = {},
      connection = 'http://localhost:14782/ulme';
    //connection = 'http://api.beta2.se/ulme';

    // Public API here
    return {
      getItems: function (whiteboardName) {
        var privateNotes = [];
        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            whiteboard.notes = data;
            for (i = 0; i < data.length; i = i + 1) {
              if (whiteboardName === data[i].whiteboard) {
                for (j = 0; j < data[i].db.length; j = j + 1) {
                  privateNotes.push(data[i].db[j]);
                }
              }
            }
          }
        });
        return privateNotes;
      },
      getAll: function () {
        var privateNotes = [];
        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            whiteboard.notes = data;

            for (i = 0; i < whiteboard.notes.length; i = i + 1) {
              privateNotes.push(whiteboard.notes[i]);
            }
          }
        });
        return privateNotes;
      },
      addWhiteboard: function (whiteboardName, arrTemp) {
        var checkIfAlreadyUsed = true;

        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            for (i = 0; i < data.length; i = i + 1) {
              if (whiteboardName.toLowerCase() === data[i].whiteboard.toLowerCase()) {
                checkIfAlreadyUsed = false;
              }
            }

            if (checkIfAlreadyUsed) {
              $http({
                method: 'POST',
                url: connection,
                data: {
                  'whiteboard': whiteboardName,
                  'db': []
                }
              }).
              success(function (data, status) {
                if (status === 200) {
                  arrTemp.push(data);
                }
              });
            }
          }
        });
      },
      deleteWhiteboard: function (whiteboardObject, arrTemp) {
        $http({
          method: 'DELETE',
          url: connection + '/' + whiteboardObject.id
        }).
        success(function (data, status) {
          if (status === 200) {
            for (i = 0; i < arrTemp.length; i = i + 1) {
              if (whiteboardObject.id === arrTemp[i].id) {
                arrTemp.splice(i, 1);
              }
            }
          }
        });
      },
      updateWhiteboard: function (whiteboardName, whiteboardObject, arrTemp) {
        var i,
          duplicateCheck = true,
          tempNotes = whiteboardObject;

        for (i = 0; i < arrTemp.length; i = i + 1) {
          if (whiteboardName.toLowerCase() === arrTemp[i].whiteboard.toLowerCase() &&
            tempNotes.id !== arrTemp[i].id) {
            duplicateCheck = false;
          }
        }

        tempNotes.whiteboard = whiteboardName;

        if (duplicateCheck) {
          $http({
            method: 'PUT',
            url: connection + '/' + whiteboardObject.id,
            data: tempNotes
          }).
          success(function (data, status) {
            if (status === 200) {
              for (i = 0; i < arrTemp.length; i = i + 1) {
                if (tempNotes.id === arrTemp[i].id) {
                  arrTemp[i].whiteboard = tempNotes.whiteboard;
                }
              }
            }
          });
        }
      },
      addItem: function (note, whiteboardName, arrTemp) {
        var tempNotes, tNote, id;

        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            for (i = 0; i < data.length; i = i + 1) {
              if (data[i].whiteboard === whiteboardName) {
                id = data[i].id;
              }
            }

            $http({
              method: 'GET',
              url: connection + '/' + id
            }).
            success(function (data, status) {
              if (status === 200) {
                tNote = note;
                tempNotes = data;

                var maxId = 0;
                for (i = 0; i < data.db.length; i = i + 1) {
                  if (maxId < data.db[i].id) {
                    maxId = data.db[i].id;
                  }
                }

                tNote.id = maxId + 1;
                tempNotes.db.push(tNote);

                $http({
                  method: 'PUT',
                  url: connection + '/' + id,
                  data: tempNotes
                }).
                success(function (data, status) {
                  if (status === 200) {
                    arrTemp.push(tNote);
                  }
                });
              }
            });
          }
        });
      },
      deleteItem: function (id, whiteboardName, arrTemp) {
        var tempNotes, whiteboardId;

        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            for (i = 0; i < data.length; i = i + 1) {
              if (data[i].whiteboard === whiteboardName) {
                whiteboardId = data[i].id;
                tempNotes = data[i].db;
                for (j = 0; j < data[i].db.length; j = j + 1) {
                  if (id === data[i].db[j].id) {
                    tempNotes.splice(j, 1);
                  }
                }
              }
            }

            $http({
              method: 'PUT',
              url: connection + '/' + whiteboardId,
              data: {
                'whiteboard': whiteboardName,
                'db': tempNotes
              }
            }).
            success(function (data, status) {
              if (status === 200) {
                for (i = 0; i < arrTemp.length; i = i + 1) {
                  if (id === arrTemp[i].id) {
                    arrTemp.splice(i, 1);
                  }
                }
              }
            });
          }
        });
      },
      updateItem: function (note, whiteboardName, arrTemp) {
        var tempNotes, whiteboardId;

        $http({
          method: 'GET',
          url: connection
        }).
        success(function (data, status) {
          if (status === 200) {
            for (i = 0; i < data.length; i = i + 1) {
              if (data[i].whiteboard === whiteboardName) {
                tempNotes = data[i];
                whiteboardId = data[i].id;
                for (j = 0; j < data[i].db.length; j = j + 1) {
                  if (note.id === data[i].db[j].id) {
                    tempNotes.db[j].title = note.title;
                    tempNotes.db[j].information = note.information;
                    tempNotes.db[j].color = note.color;
                  }
                }
              }
            }

            $http({
              method: 'PUT',
              url: connection + '/' + whiteboardId,
              data: tempNotes
            }).
            success(function (data, status) {
              if (status === 200) {
                for (i = 0; i < arrTemp.length; i = i + 1) {
                  if (note.id === arrTemp[i].id) {
                    arrTemp[i] = note;
                  }
                }
              }
            });
          }
        });
      }
    };
  });