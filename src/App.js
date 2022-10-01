import { useState } from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	return (
		<>
			<div className="bg-backg-light dark:bg-backg-dark">
				<div className={darkTheme ? "dark" : ""}>
					HI THERE
					<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
					<Form />
				</div>
			</div>
		</>
	);
}

export default App;
