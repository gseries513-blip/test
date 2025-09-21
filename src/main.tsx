import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/global.css";

const root = document.getElementById("root")!;
root.style.height = "100vh";
root.style.display = "flex";
root.style.flexDirection = "column";

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
