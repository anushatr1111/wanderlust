import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About/About';
import AuthProvider from './Context/AuthProvider';
import Details from './Details/Details';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import ManageOrders from './ManageOrders/ManageOrders';
import MyOrders from './MyOrders/MyOrders';
import PrivateOne from './PrivateOne/PrivateOne';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PrivateTwo from './PrivateTwo/PrivateTwo';
import Register from './Register/Register';
import Services from './Services/Services';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/details/:id">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute exact path="/add-service">
            <PrivateOne></PrivateOne>
          </PrivateRoute>
          <PrivateRoute exact path="/manage-service">
            <PrivateTwo></PrivateTwo>
          </PrivateRoute>
          <Route exact path="/manage-orders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route exact path="/my-orders">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
