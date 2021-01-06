import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/project/ProjectDetail';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path={['/','/dashboard','/project']} exact>
          <Dashboard />
        </Route>
        <Route path='/project/:id' render={(routeProps) => <ProjectDetail {...routeProps} />} />
        <Route path='/create'>
          <CreateProject />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}
