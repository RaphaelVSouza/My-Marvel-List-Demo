import { ListCharacters } from 'pages/ListCharacters'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/characters">
          <ListCharacters />
        </Route>
      </Switch>
    </Router>
  )
}
