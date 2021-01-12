import { Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/project/ProjectDetail';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthIsLoaded from './components/auth/AuthIsLoaded';
import PrivateRoute, { RouteGuard } from './components/auth/PrivateRoute';

export default function App() {
  return (
    <div className="App">
      <AuthIsLoaded>
        <Navbar />
        <Switch>
          <PrivateRoute path={['/','/dashboard','/project']} exact render={() => <Dashboard />} />
          <PrivateRoute path='/project/:id' render={(routerProps) => <ProjectDetail {...routerProps} />} />
          <PrivateRoute path='/create' render={() => <CreateProject />} />
          <RouteGuard path='/signin' render={() => <SignIn />} />
          <RouteGuard path='/signup' render={() => <SignUp />} />
        </Switch>
      </AuthIsLoaded>
    </div>
  );
}
