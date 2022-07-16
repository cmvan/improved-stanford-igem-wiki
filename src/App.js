import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/team" component={Pages.Team} />
        <Route exact path="/attributions" component={Pages.Attributions} />
        <Route exact path="/collaborations" component={Pages.Collaborations} />
        <Route exact path="/communication" component={Pages.Communication} />
        <Route exact path="/contribution" component={Pages.Contribution} />
        <Route exact path="/description" component={Pages.Description} />
        <Route exact path="/engineering" component={Pages.Engineering} />
        <Route exact path="/experiments" component={Pages.Experiments} />
        <Route exact path="/implementation" component={Pages.Implementation} />
        <Route exact path="/notebook" component={Pages.Notebook} />
        <Route exact path="/partnership" component={Pages.Partnership} />
        <Route exact path="/proof-of-concept" component={Pages.ProofOfConcept} />
        <Route exact path="/part-collection" component={Pages.PartCollection} />
        <Route exact path="/improve" component={Pages.Improve} />
        <Route exact path="/safety" component={Pages.Safety} />
        <Route exact path="/human-practices" component={Pages.HumanPractices} />
        <Route exact path="/education" component={Pages.Education} />
        <Route exact path="/entrepreneurship" component={Pages.Entrepreneurship} />
        <Route exact path="/inclusivity" component={Pages.Inclusivity} />
        <Route exact path="/measurement" component={Pages.Measurement} />
        <Route exact path="/model" component={Pages.Model} />
        <Route exact path="/team" component={Pages.Team} />
        <Route exact path="/software" component={Pages.Software} />
        <Route exact path="sustainable" component={Pages.Sustainable} />
        {/* TODO: Make better 404 not found page */}
        <Route component={() => (<div>404 Not found </div>)} />
      </Switch>
    </Router>
  );
}

export default App;
