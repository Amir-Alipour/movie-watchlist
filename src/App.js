import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";

import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <Watchlist />
                    </Route>

                    <Route path="/watched">
                        <Watched />
                    </Route>

                    <Route path="/add">
                        <Add />
                    </Route>
                </Switch>
            </Router>
        </GlobalProvider>
    );
}

export default App;
