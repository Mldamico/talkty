import ReactDOM from "react-dom/client";
import App from "./app/layout/App";
import "./app/layout/index.css";
import { StoreContext, store } from "./app/stores/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
