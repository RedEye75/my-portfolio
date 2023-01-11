import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <div className=" mx-auto">
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
