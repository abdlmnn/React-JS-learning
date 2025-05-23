import Greeting from './components/functional/Greeting'
import Question from './components/props/Question'
import Scoring from './components/useState/Scoring'
import Alert from './components/handling Events/Alert'
import FepSate from './components/FepSate'


function App() {

  return (
    <>
      {/* Functional */} 
      <Greeting />

      {/* Props */} 
      <Question fullname="Salih Abdulmanan" />

      {/* State useState Hook */} 
      <Scoring />

      {/* Handling Events onClick */} 
      <Alert />

      {/* Applying all of what i learned */}
      <FepSate name="ali" number={1} />


    </>
  )
}

export default App
