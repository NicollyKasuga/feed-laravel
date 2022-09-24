import React from "react";
import Feed from "../Pages/Feed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    console.log("lisdjhfgd");
    return (
        <div className="appContainer d-flex justify-content-center">
            <ToastContainer />
            <Feed />
        </div>
    );
}

export default App;
