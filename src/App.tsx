import { Route, Routes } from 'react-router-dom'
import './App.css'
import Albums from './components/Albums'
import SingleAlbum from './components/SingleAlbum'


function App() {

	return (
		<Routes>
			<Route path="/" element={<Albums />} />
			<Route path="/albums" element={<Albums />} />
			<Route path="/albums/:id" element={<SingleAlbum />} />
			<Route path="/*" element={<h3>Not Found</h3>} />
		</Routes>
	)
}

export default App
