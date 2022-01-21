import React, { createContext, useReducer, ReactNode } from "react";

type AppState = typeof initialState;

type Action =
  | { type: "ADD_TO_CART"; payload: ShopItem }
  | { type: "REMOVE_FROM_CART"; payload: ShopItem }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: ShopItem };

interface IProviderProps {
  children: ReactNode;
}

const initialState: ShopItem[] = [];

const isAlreadyInState = (payloadId: string, state: ShopItem[]) => {
  return !!state.filter((item) => item?.id === payloadId).length;
};

const addReducer = (state: ShopItem[], payload: ShopItem) => {
  if (isAlreadyInState(payload?.id, state))
    return state?.map((item) => {
      if (item?.id === payload?.id) {
        return { ...item, amount: item?.amount + 1 };
      }
      return item;
    });
  return [...state, { ...payload, amount: 1 }];
};

const removeReducer = (state: ShopItem[], payload: ShopItem) => {
  if (payload?.amount === 1)
    return state?.filter((item) => item?.id !== payload?.id);
  return state?.map((item) => {
    if (item?.id === payload?.id) return { ...item, amount: item?.amount - 1 };
    return item;
  });
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addReducer(state, action?.payload);
    case "REMOVE_FROM_CART":
      return removeReducer(state, action?.payload);
    case "REMOVE_ITEM_FROM_CART":
      return state?.filter((item) => item?.id !== action?.payload?.id);
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
