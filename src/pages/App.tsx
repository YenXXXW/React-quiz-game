import { Routes , Route } from 'react-router-dom'
import { QuizDetail } from './Quiz'
import Home from './Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question'>
          <Route path=':number' element={<QuizDetail/>} />
        </Route>
      </Routes>
      
    </>
    
  );
}

export default App;
