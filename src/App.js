import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={['/','/home']} component={Home}/>
      </Switch>
    </Layout>
  
  )
}

export default App;
