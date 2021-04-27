import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AddQuote from "./components/pages/AddQuote";
import NotFound from "./components/pages/NotFound";
import Quote from "./components/pages/Quote";
import Quotes from "./components/pages/Quotes";

function App() {
  return (
    <>
      <MainNavigation />
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes"/>
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/new" exact>
            <AddQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
