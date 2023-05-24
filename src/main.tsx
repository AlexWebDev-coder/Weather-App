import ReactDOM from "react-dom";
import App from "./App";
import QueryProvider from "./providers/query";
import createEmotionCache from "./util/createEmotionCache";

import "./App.css";

const clientSideEmotionCache = createEmotionCache();

ReactDOM.render(
  <QueryProvider dehydratedState={clientSideEmotionCache}>
    <App />
  </QueryProvider>,

  document.getElementById("root")
);
