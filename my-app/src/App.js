import React, { Suspense } from 'react';
import NotFound from "./components/NotFound/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import('./components/Home/homepage'));
const AddPost = React.lazy(() => import('./components/AddPost/addPostPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={AddPost} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
