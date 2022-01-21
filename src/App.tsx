import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

import { GlobalStyle } from "./App.styles";
import { ItemsContextProvider } from "./context/ItemsContext";

const queryClient = new QueryClient();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ItemsContextProvider>
        <QueryClientProvider client={queryClient}>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Navbar setIsOpen={setIsOpen} />
          <Shop />
        </QueryClientProvider>
      </ItemsContextProvider>
    </>
  );
}

export default App;
