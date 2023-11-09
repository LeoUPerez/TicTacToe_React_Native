import {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";
import {winningCombo} from "../common/winningCombo";
import {Alert} from "react-native";

export let arr: string[] = ["", "", "", "", "", "", "", "", ""];

let winnerX: number = 0;
let winnerO: number = 0;

export const globalContext = createContext({} as ContextType);

interface ContextProviderProps {
    children: ReactNode;
}

interface ContextType {
    Turn: (indexPosition: number) => string;
    Clear: () => void;
    valueBox: string;
    setClearStatus: Dispatch<SetStateAction<boolean>>;
    clearStatus: Boolean;
    turnBox: Boolean;
}

export const ContextProvider = ({children}: ContextProviderProps) => {
    const [valueBox, setValueBox] = useState("");
    const [clearStatus, setClearStatus] = useState(Boolean);
    const [turnBox, setTurnBox] = useState(true);
    const [winner, setWinner] = useState<boolean | undefined>(undefined);
    const [touches, setTouches] = useState(0)

    function Turn(indexPosition: number): string {
        if (turnBox) {
            setTurnBox(false);
            arr[indexPosition] = "X";
        } else {
            setTurnBox(true);
            arr[indexPosition] = "O";
        }
        validator();
        return arr[indexPosition];
    }

    function validator() {

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
            setClearStatus(!clearStatus);
        }
    }

    function AlertWinner(winner: string) {
        Alert.alert("Tic Tac Toe Alert", winner);
        setClearStatus(!clearStatus);
    }

    function Clear() {
        setWinner(undefined);
        setTouches(0);
        setValueBox("");
        setTurnBox(true);
        arr = ["", "", "", "", "", "", "", "", ""];
    }

    return (
        <globalContext.Provider
            value={{Turn, Clear, valueBox, setClearStatus, clearStatus, turnBox}}
        >
            {children}
        </globalContext.Provider>
    );
};
