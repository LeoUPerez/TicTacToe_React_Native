
# Tic Tac Toe - React Native

Simple project created in React Native with Typescript to put into practice my knowledge acquired in these months about mobile development

## 1. Git workflow

 - Only main.

## 1.1 Writing commit messages

 - Message briefly describing what was done in the change.

## 2. Installing 

 - git clone https://github.com/LeoUPerez/TicTacToe_React_Native

 - npm install 
  to install project dependencies

## 3. Structure

  Organize your files around this structure.

 - src: This is the root directory for the project's folders.

 - common: This directory could house code that is shared across different parts of your application, such as utility functions, constants, or mixins that can be reused throughout the project.

 - components: In this directory you will find everything related to components used in the application, either by organization or by reuse.

 - context: In this directory is the global context that wraps the application and where the game logic is stored.

 - view: The view directory could contain your application's different views. Each screen might have its own folder containing only a combination of UI components




## Functionality
  When making a play, it verifies position by position all the possible winning combinations previously declared, there and then it verifies that neither the position evaluated at the moment nor the next one are empty, these matches are stored in local variables, when it finishes valuing the Full board checks if the matches meet the conditions or if it is simply a tie.

```javascript
    function validator() {
        winnerX = 0;
        winnerO = 0;

        for (let i = 0; i < winningCombo.length; i++) {
            for (let j = 0; j < 3; j++) {
                if (
                    arr[winningCombo[i][j]] == arr[winningCombo[i][j + 1]] &&
                    arr[winningCombo[i][j + 1]] != "" &&
                    arr[winningCombo[i][j]] != ""
                ) {
                    if (turnBox) {
                        winnerX++;
                    } else {
                        winnerO++;
                    }
                }
            }

            if (winnerX == 2) {
                AlertWinner("Won X")
                setWinner(true);
            } else if (winnerO == 2) {
                AlertWinner("Won O")
                setWinner(true);
            }

            winnerX = 0;
            winnerO = 0;
        }
        setTouches(touches + 1);

        if (touches == 8 && winner == undefined) {
            Alert.alert("Tic Tac Toe Alert", "Draw");
            setClear(!Clear);
        }
    }
```


