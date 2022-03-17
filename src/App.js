import './App.css';

import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import DesertRegistrationForm from './pages/desert/DesertRegistrationForm';
import ForestRegistrationForm from './pages/forest/ForestRegistrationForm';
import OceanRegistrationForm from './pages/ocean/OceanRegistrationForm';
import styled from 'styled-components';

import Desert from './pages/desert';
import Forest from './pages/forest';
import Ocean from './pages/ocean';


export const StyledUl = styled.ul`
    position: absolute;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <StyledUl>
            <li><Link to='/forest'>forest</Link></li>
            <li><Link to='/desert'>Desert</Link></li>
            <li><Link to='/ocean'>Ocean</Link></li>
          </StyledUl>
        </nav>
        <Switch>
          <Route path="/desert" exact component={Desert}></Route>
          <Route path="/ocean" exact component={Ocean}></Route>
          <Route path="/forest" exact component={Forest}></Route>
          <Route path="/desert/register" exact component={DesertRegistrationForm}></Route>
          <Route path="/ocean/register" exact component={OceanRegistrationForm}></Route>
          <Route path="/forest/register" exact component={ForestRegistrationForm}></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
