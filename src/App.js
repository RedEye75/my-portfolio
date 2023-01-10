import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App bg-[#2a2a2a]">
      <div className="max-w-screen-lg  mx-auto">
        {" "}
        <ChakraProvider>
          <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
