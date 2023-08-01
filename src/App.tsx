import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Albums, SingleAlbum, Header, Footer, Likes } from './components'
 

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Albums />} />
				<Route path="/albums" element={<Albums />} />
				<Route path="/albums/:id" element={<SingleAlbum />} />
				<Route path="/likes" element={<Likes />} />
				<Route path="/*" element={<h3>Not Found</h3>} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
