//Some extra custom functions here.
var ctx;
var canvas_1;
var canvas_2;

window.onload = function()  {
  canvas_1 = document.getElementsByTagName('canvas')[0];
  canvas_1.width  = 250;
  canvas_1.height = 350;

  // ctx.canvas_1

  canvas_2 = document.getElementsByTagName('canvas')[1];
  canvas_2.width  = 250;
  canvas_2.height = 350;

  ctx = canvas_2.getContext("2d");
};


function addCard() {
  $('.card-list button').click(function(e){
     e.preventDefault();
     var cardUrl = $(this).data('img-url');
     var name = $(this).html();
     var newImage = new Image();
     newImage.src = cardUrl;

     $("input[name='cardName']").val(name);

     ctx.fillRect(0,0,250,350);
     ctx.fillStyle = "white";
     ctx.fill();
     ctx.drawImage(newImage, 0, 0, canvas_2.width, canvas_2.height);
  });
}

 TTS_Test = {
            "SaveName": "TTS_Test",
            "GameMode": "Pachisi",
            "Date": "12/7/2015 1:08:48 PM",
            "Table": "Table_Hexagon",
            "Sky": "Sky_Cathedral",
            "Note": "",
            "Rules": "",
            "PlayerTurn": "",
            "Grid": {
              "Type": 0,
              "Lines": false,
              "Snapping": false,
              "Offset": false,
              "BothSnapping": false,
              "xSize": 2.0,
              "ySize": 2.0,
              "PosOffset": {
                "x": 0.0,
                "y": 1.0,
                "z": 0.0
              }
            },
            "Hands": {
              "Enable": true,
              "DisableUnused": false,
              "Hidding": 0,
              "HandTransforms": [
                {
                  "Color": "Red",
                  "Transform": {
                    "posX": -13.6426258,
                    "posY": 3.57056141,
                    "posZ": -7.487607,
                    "rotX": -9.3915105E-06,
                    "rotY": 60.0000076,
                    "rotZ": -1.10990577E-05,
                    "scaleX": 10.2680731,
                    "scaleY": 6.633868,
                    "scaleZ": 4.89323664
                  },
                  "GameMaster": false
                },
                {
                  "Color": "Yellow",
                  "Transform": {
                    "posX": -13.3167248,
                    "posY": 3.57055473,
                    "posZ": 8.302026,
                    "rotX": 4.91630772E-06,
                    "rotY": 119.999992,
                    "rotZ": -1.36828185E-05,
                    "scaleX": 10.26807,
                    "scaleY": 6.633868,
                    "scaleZ": 4.89323044
                  },
                  "GameMaster": false
                },
                {
                  "Color": "Blue",
                  "Transform": {
                    "posX": 13.572648,
                    "posY": 3.57060385,
                    "posZ": 7.74858,
                    "rotX": 9.391514E-06,
                    "rotY": 240.000015,
                    "rotZ": 1.10990559E-05,
                    "scaleX": 10.2680664,
                    "scaleY": 6.633868,
                    "scaleZ": 4.89323
                  },
                  "GameMaster": false
                },
                {
                  "Color": "White",
                  "Transform": {
                    "posX": -1.96093843E-05,
                    "posY": 3.57059,
                    "posZ": -15.5327444,
                    "rotX": -1.43078205E-05,
                    "rotY": 8.373497E-08,
                    "rotZ": 2.58375849E-06,
                    "scaleX": 10.2680635,
                    "scaleY": 6.63386965,
                    "scaleZ": 4.89322758
                  },
                  "GameMaster": false
                },
                {
                  "Color": "Green",
                  "Transform": {
                    "posX": 0.00130344718,
                    "posY": 3.57058382,
                    "posZ": 15.5941973,
                    "rotX": 1.43078214E-05,
                    "rotY": 180.000015,
                    "rotZ": -2.58375781E-06,
                    "scaleX": 10.2680635,
                    "scaleY": 6.633868,
                    "scaleZ": 4.89322662
                  },
                  "GameMaster": false
                },
                {
                  "Color": "Pink",
                  "Transform": {
                    "posX": 13.6821318,
                    "posY": 3.57060146,
                    "posZ": -7.40767765,
                    "rotX": -4.91630772E-06,
                    "rotY": 300.0,
                    "rotZ": 1.36828185E-05,
                    "scaleX": 10.2680626,
                    "scaleY": 6.633868,
                    "scaleZ": 4.893224
                  },
                  "GameMaster": false
                }
              ]
            },
            "DrawImage": "iVBORw0KGgoAAAANSUhEUgAAAWAAAADQCAYAAAA53LuNAAAFFElEQVR4Ae3QgQAAAADDoPlTH+SFUGHAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgy8DQx5DAABHyNK3wAAAABJRU5ErkJggg==",
            "VectorLines": [],
            "ObjectStates": [
              {
                "Name": "DeckCustom",
                "Transform": {
                  "posX": -10.0250769,
                  "posY": 1.25730145,
                  "posZ": -2.39242148,
                  "rotX": 7.633415E-06,
                  "rotY": 175.757919,
                  "rotZ": 179.999985,
                  "scaleX": 1.0,
                  "scaleY": 1.0,
                  "scaleZ": 1.0
                },
                "Nickname": "",
                "Description": "",
                "ColorDiffuse": {
                  "r": 0.713239133,
                  "g": 0.713239133,
                  "b": 0.713239133
                },
                "Locked": false,
                "Grid": true,
                "Snap": true,
                "Autoraise": true,
                "Sticky": true,
                "SidewaysCard": false,
                "DeckIDs": [
                  101,
                  102,
                  103,
                  104,
                  105,
                  106,
                  107,
                  108,
                  109,
                  110,
                  111,
                  112,
                  113,
                  114,
                  115,
                  116,
                  117,
                  118,
                  119,
                  120,
                  121,
                  122,
                  123,
                  124,
                  125,
                  126,
                  127,
                  128,
                  129,
                  130,
                  131,
                  132,
                  133,
                  134,
                  135,
                  136,
                  137,
                  138,
                  139,
                  140,
                  141,
                  142,
                  143,
                  144,
                  145,
                  146,
                  147,
                  148,
                  149,
                  150,
                  151,
                  100
                ],
                "CustomDeck": {

                },
                "GUID": "8da14a"
              }
            ],
            "TabStates": {
              "0": {
                "title": "Rules",
                "body": "[u][b]PACHISI:[/b][/u]\n\n[b]GAME OBJECTIVE:[/b]\nThe first player to advance all of his marbles around the board to HOME position from the BASE position, wins. \n\n[b]START UP:[/b]\nA) Players choose their colors based on whatever color their names are./nB) Players then roll one of the dice. Whoever gets the highest number plays first. Play then proceeds clockwise from the first player.\n\n[b]BASIC MOVEMENT:[/b]\nAt their turn, players roll both dice and moves a marble the number of spaces equal to the number shown on the dice. If you roll doubles, you get to roll again.\n\n[b]STARTING OF A MARBLE:[/b]\nA Marble must be started before it can be advanced around the board. To do this, it is moved from the BASE row to the START hole. This is achieved by rolling either a 6 or a 1. A 6 or a 1 only gets the marble positioned. If you roll both a 6 and a 1, you can bring your piece  to the starting position and then move it 6 spaces.\n\n[b]GENERAL PLAY:[/b]\nAfter a marble is started, it is then advanced clockwise along the game path.  The number of spaces it travels is equal to the number as shown on the dice. You count every hole, whether the hole is empty or taken by another player’s marble./nAfter a player has one or more marbles on the game path, when a 1 or 6 is rolled the player the player can either START another new marble or move an existing marble along the way.  Be advised, the movement of the marble will be either 1 or 6, whichever is displayed on the dice. WARNING: If one of your marbles is already in the START hole, you are precluded from starting another marble.  If you have no other marbles to move, or not the available spaces open to move, your turn is lost.\nJumping over or landing on an opponent's marble IS permitted. Jumping over or landing on your own marbles is NOT permitted. If one of your own marbles prevents you from moving another marble the full count on the dice, then you are prevented from moving the “blocked“ marble and your turn is forfeited.\n\n[b]GETTING BUMPED:[/b]\nIf an opposing player turn stops on your marbles exactly, your marble is bumped and  must go back to its BASE row without delay. The abandoned hole is now occupied by your opponent’s marble. This bump can occur anywhere on the board except in their HOME or BASE locations.   \n\n[b][u]BOARD MOVE SHORTCUTS:[/u][/b]\n[b]CENTER HOLE SHORTCUT:[/b] In the center of the board is a single black hole. To take this shortcut, first your marble must be located in one of the black holes located at each point around the board.  Then you get to the center hole by rolling ONLY a 1 on the dice on your next turn. \nWhen you move to the center hole, rolling a 1 on a subsequent turn is the only way out. When you roll a 1 then you move to the closest black hole that leads to your home spot.\n[b]BLACK HOLE SHORTCUT: [/b]  For this shortcut to be activated a marble must land in a black hole with the exact amount on the dice. On the next roll of the dice, the marble can be advanced clockwise around the black holes. You move the marble the number of holes allowed by the roll on the dice around the black holes and then down the path that takes you to the home area with any remaining count on your dice.\nShortcuts are optional. They can be very beneficial because they reduce the time to advance around the board. \n\n[b]THE HOME STRETCH:[/b]\nWhen coming home, you have to end by exact number count registered on the dice.  Since you cannot jump over your own marbles your first marble must go to the farthest home position. If the dice roll gives excess moves to get HOME by the exact count, that marble cannot be advanced. You must either move another marble or forfeit that move.\n\n[b]WINNING THE GAME:[/b]\nThe first player to get all marbles to their home area, wins!\n\nPlease note that these Notepad are one in many out there, but this is a good starting point for one way to play the game. If you’d like to find other ways to play, you can search online. [b]Have fun![/b]\n",
                "visibleColor": {
                  "r": 0.5,
                  "g": 0.5,
                  "b": 0.5
                },
                "id": 0
              },
              "1": {
                "title": "White",
                "body": "",
                "visibleColor": {
                  "r": 1.0,
                  "g": 1.0,
                  "b": 1.0
                },
                "id": 1
              },
              "2": {
                "title": "Red",
                "body": "",
                "visibleColor": {
                  "r": 0.856,
                  "g": 0.1,
                  "b": 0.094
                },
                "id": 2
              },
              "3": {
                "title": "Orange",
                "body": "",
                "visibleColor": {
                  "r": 0.882,
                  "g": 0.517,
                  "b": 0.219
                },
                "id": 3
              },
              "4": {
                "title": "Yellow",
                "body": "",
                "visibleColor": {
                  "r": 0.905,
                  "g": 0.898,
                  "b": 0.172
                },
                "id": 4
              },
              "5": {
                "title": "Green",
                "body": "",
                "visibleColor": {
                  "r": 0.192,
                  "g": 0.701,
                  "b": 0.168
                },
                "id": 5
              },
              "6": {
                "title": "Blue",
                "body": "",
                "visibleColor": {
                  "r": 0.118,
                  "g": 0.53,
                  "b": 1.0
                },
                "id": 6
              },
              "7": {
                "title": "Purple",
                "body": "",
                "visibleColor": {
                  "r": 0.627,
                  "g": 0.125,
                  "b": 0.941
                },
                "id": 7
              },
              "8": {
                "title": "Pink",
                "body": "",
                "visibleColor": {
                  "r": 0.96,
                  "g": 0.439,
                  "b": 0.807
                },
                "id": 8
              },
              "9": {
                "title": "Black",
                "body": "",
                "visibleColor": {
                  "r": 0.1,
                  "g": 0.1,
                  "b": 0.1
                },
                "id": 9
              }
          }
  };

//console.log("Reset");
// return TTS_Test;


function createdJSON(newJSON) {
  TTS_SaveFile = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(newJSON));
}
