
import './App.css';
import { HeaderTitle } from './components/Header.jsx';
import Home from './components/Home';
import { Route } from 'react-router';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<HeaderTitle text="dssomething" />
				<Route component={Home} path="/home" />
				<Route component={About} path="/about" />
			</div>
		</BrowserRouter>
	);
}

export default App;
