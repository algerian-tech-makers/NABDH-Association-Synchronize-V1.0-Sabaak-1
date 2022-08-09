import MyRoutes from "./MyRoutes";
import DefaultStyling from "./styles/DefaultStyling";
import ResetCSS from "./styles/ResetCSS";
import GlobalFonts from "./fonts/fonts";

function App() {
	return (
		<div className='App'>
			<MyRoutes />
			<ResetCSS />
			<GlobalFonts />
			<DefaultStyling />
		</div>
	);
}

export default App;
