import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={GalleryPage} />
      </Switch>
    </div>
  );
}

export default App;
