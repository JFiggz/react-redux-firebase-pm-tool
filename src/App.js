import { Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/project/ProjectDetail';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthIsLoaded from './components/auth/AuthIsLoaded';
import PrivateRoute from './components/auth/PrivateRoute';

export default function App() {
  return (
    <div className="App">
      <AuthIsLoaded>{/* Helper component to check if Firebase authentication is loaded before rendering app */}
        <Navbar />
        <Switch>
          <PrivateRoute path={['/','/dashboard','/project']} exact render={() => <Dashboard />} />
          <PrivateRoute path='/project/:id' render={(routerProps) => <ProjectDetail {...routerProps} />} />
          <PrivateRoute path='/create' render={() => <CreateProject />} />
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </AuthIsLoaded>
    </div>
  );
}
