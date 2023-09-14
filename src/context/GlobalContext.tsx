import { createContext, useState } from "react";
import { winningCombo } from "../common/winningCombo";

export let arr: string[] = ["", "", "", "", "", "", "", "", ""];

let winnerX: number = 0;
let winnerO: number = 0;

export const globalContext = createContext<ContextType | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  turn: (indexPosition: number) => string;
  clear: () => void;
  ValueBox: string;
  setClear: React.Dispatch<React.SetStateAction<boolean>>;
  Clear: Boolean;
  turnBox: Boolean;
};

export const ContexProvider = ({ children }: ContextProviderProps) => {
  const [ValueBox, setValueBox] = useState("");
  const [Clear, setClear] = useState(Boolean);
  const [turnBox, setTurnBox] = useState(true);

  const clear = () => {
    setValueBox("");
    setClear(true);
    setTurnBox(true);
    arr = ["", "", "", "", "", "", "", "", ""];
  };

  const turn = (indexPosition: number): string => {
    if (turnBox) {
      setTurnBox(false);
      arr[indexPosition] = "X";
    } else {
      setTurnBox(true);
      arr[indexPosition] = "O";
    }
    validator();
    return arr[indexPosition];
  };

  const validator = async () => {
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
        console.log("Gano X");
        clear();
      }
      if (winnerO == 2) {
        console.log("Gano O");
        clear();
      }
      winnerX = 0;
      winnerO = 0;
    }
  };

  return (
    <globalContext.Provider
      value={{ turn, clear, ValueBox, setClear, Clear, turnBox }}
    >
      {children}
    </globalContext.Provider>
  );
};
