import "./App.css";
import InitialAnimation from "./pages/InitialAnimation/index";
import NavBar from "./components/NavBar/index";

function App() {
	return (
		<div className="app">
			<NavBar />
			<InitialAnimation
				texta="Welcome to my portfolio."
				textb="You can call me Guilherme!"
			/>
		</div>
	);
}

export default App;
