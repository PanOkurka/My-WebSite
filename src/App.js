import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Navbar from './components/navbar/navbar'
import Home from './components/homepage/home';
import Info from './components/bio/Info';
import Langs from './components/langspage/Langs';
import Projects from './components/projektspage/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames='fade'>
                <Switch className='page'>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/bio' component={Info} />
                  <Route exact path='/info' component={Langs} />
                  <Route exact path='/projects' component={Projects}/>
                </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
    </BrowserRouter>
  );
}

export default App;
