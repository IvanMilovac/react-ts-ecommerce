import React, { createContext, useReducer, ReactNode } from "react";

type AppState = typeof initialState;

type Action =
  | { type: "ADD_TO_CART"; payload: ShopItem }
  | { type: "REMOVE_FROM_CART"; payload: ShopItem };

interface IProviderProps {
  children: ReactNode;
}

const initialState: ShopItem[] = [];

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return [...state.filter((item) => item?.id === action?.payload?.id)];
    default:
      return state;
  }
};

const ItemsContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function ItemsContextProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ItemsContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
}

export { ItemsContext, ItemsContextProvider };
