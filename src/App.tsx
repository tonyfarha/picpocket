import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Albums, SingleAlbum, Header, Footer, Likes, NotFound } from './components'
 

function App() {

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Albums />} />
					<Route path="/albums" element={<Albums />} />
					<Route path="/albums/:id" element={<SingleAlbum />} />
					<Route path="/likes" element={<Likes />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	)
}

export default App
