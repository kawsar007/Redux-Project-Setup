import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import UserList from "./Components/UserList";


function App() {
  return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={UserList}/>
            <Route path="/add" component={AddUser}/>
            <Route path="/edit/:id" component={EditUser}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
