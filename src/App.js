import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useLocation,
  useHistory,
} from "react-router-dom"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      {/* 
      
      Router, Switch, Route 
      Exact et *
      Component
      le redirect      
      Link
      useParams
      useLocation 
      useHistory goBack + goForward    
      
      */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/posts/:slug" component={Post} />
          <Route path="/about" exact component={About} />
          <Route path="/posts-old">
            <Redirect to="/posts" />
          </Route>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <h1>Accueil</h1>
    </>
  )
}

const Posts = () => {
  return (
    <>
      <h1>Articles</h1>
    </>
  )
}

const Post = () => {
  let location = useLocation()
  let { slug } = useParams()

  let history = useHistory()

  return (
    <>
      <h1>{slug}</h1>
      {location.search}
      <Link
        to={{
          pathname: "/about",
          state: {
            postTitle: slug,
          },
        }}
      >
        Envoyer l'info du slug sur about
      </Link>
      <button onClick={() => history.goBack()}>Prev</button>
      <button onClick={() => history.goForward()}>Next</button>
    </>
  )
}

const AboutOld = () => {
  let location = useLocation()
  console.log(location)

  return (
    <>
      <h1>À propos</h1>
      <p>{location.state?.postTitle}</p>
    </>
  )
}

const NoMatch = () => {
  let history = useHistory()
  console.log(history)
  return (
    <>
      <h1>Erreur 404</h1>
      <button onClick={() => history.push("/")}>Retour à l'accueil</button>
    </>
  )
}

export default App
