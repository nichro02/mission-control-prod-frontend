//import switch and route to navigate between pages
import { Switch, Route } from 'react-router-dom'

//import components
import Home from './components/Home'
import Layout from './components/Layout'
import Board from './components/Board'
import Profile from './components/Profile'
import Signup from './components/Signup'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/','/home']} component={Home}/>
        <Route exact path={'/board/:id'} component={Board}/>
        <Route exact path={'/profile/:id'} component={Profile}/>
        <Route exact path={'/signup'} component={Signup} />
      </Switch>
    </Layout>
  
  )
}

export default App;
