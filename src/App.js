import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App  dark:bg-gray-800 ">
      <div className="max-w-screen-xl  mx-auto">
        {" "}
        <ChakraProvider>
          <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
