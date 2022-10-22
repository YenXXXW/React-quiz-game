import { Routes , Route } from 'react-router-dom'
import { QuizDetail } from './Quiz'
import Home from './Home';
import { Score } from './Score';
import { Review } from './Review';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question'>
          <Route path=':number' element={<QuizDetail/>} />
        </Route>
        <Route path='/score' element={<Score/>}/>
        <Route path='/review' element={<Review/>}/>
      </Routes>
      
    </>
    
  );
}

export default App;
