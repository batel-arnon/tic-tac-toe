import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './Game';
import ReactDOM from 'react-dom/client';
//import Project2Home from './Project2/Home';


function MyComponent() {
  return <div>My React Component</div>;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tictactoe" component={Game} />
        <Route path="/abc" component={MyComponent} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

