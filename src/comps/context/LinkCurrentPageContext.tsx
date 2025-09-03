import { createContext } from "react";

type typeCurrPage = {
    currPage: string,
    setCurrPage: (value: string) => void;
}

export const LinkCurrPageContext = createContext<typeCurrPage | null>({ currPage: "Home", setCurrPage: () => { } });