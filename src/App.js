import { useEffect, useRef, useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { questions } from './questions.js';
import config from './config.json';





function Board({ question, showQuestion, options, currentScore }){

  return (
    <div className="container board">
      <div className="row center">
        <Score>{ currentScore }</Score>
      </div>
      <div className="row">
        <div className="content-board">
         <div className="question">
           <h4>{ showQuestion ? question : '' }</h4>
         </div>
          <div className="options">
            { options.map((op, i)  => (
            <div className="option" key={i}>
              { 
                op.show 
                ? <div className="option-show between">
                    <span>{ `${i+1}. ${op.text}` } </span>
                    <span>{ op.points }</span>
                  </div>
                : <span> {i+1}. ----------------------------------------------------------------------------</span> 
              }
            </div>
            )) }
          </div>
        </div>
      </div>
    </div>
  );
}


function Score({ children }){
  return (
    <div className="score">
      <p>{ children }</p>
    </div>
  );
}

function X({ count }) {
  return (
    <div className="container around xs">
      <div className={`x ${count > 0 ? 'red' : 'ts'}`}>X</div>
      <div className={`x ${count > 1 ? 'red' : 'ts'}`}>X</div>
      <div className={`x ${count > 2 ? 'red' : 'ts'}`}>X</div>
    </div>
  )
}


const initState = {
  questions,
  question: questions[0].question,
  options: questions[0].options,
  indexQ: 0,
  scores: { '1': 0, '2': 0 },
  currentScore: 0,
  xCount: 0,
  showQuestion: false
};

const questionReducer = (state, action) => {
  let currentScore = state.currentScore;
  let xCount = state.xCount;
  switch(action.type){
    case 'set_question':
      return {
        question: action.question.question,
        options: action.question.options
      }
    case 'toggle_option':
      if(action.i >= state.options.length) return state;
      let options = state.options.map((op, opIndex) => {
        if(opIndex === action.i) {
          if(!op.show) currentScore += op.points;
          else currentScore -= op.points;
          return {...op, show: !op.show };
        }
        return {...op};
      });
      return {
        ...state,
        options,
        currentScore
      }
    case 'decrement_indexQ':
      if(state.indexQ - 1 < 0) return state;
      console.log('dev')
      return {
        ...state,
        indexQ: state.indexQ - 1,
        question: state.questions[state.indexQ - 1].question,
        options: state.questions[state.indexQ - 1].options
      }
    case 'increment_indexQ':
      if(state.indexQ + 1 >= state.questions.length) return state;
      let scores = state.scores;
      return {
        ...state,
        indexQ: state.indexQ + 1,
        question: state.questions[state.indexQ + 1].question,
        options: state.questions[state.indexQ + 1].options,
        currentScore,
        scores
      }
    case 'increment_x':
      if(xCount < 3){
        xCount += 1;
        console.log(xCount)
      }
      return {
        ...state,
        xCount
      }
    case 'decrement_x':
      if(xCount > 0){
        xCount -= 1;
      }
      return {
        ...state,
        xCount
      }
    case 'set_score':
      return {
        ...state,
        scores: {
          ...state.scores, 
          [action.name]: state.currentScore + state.scores[action.name]
        },
        currentScore: 0
      }
    case 'toggle_show_question':
      return {
        ...state,
        showQuestion: !state.showQuestion
      }
    default: return state;
  }
};


const toggleOption = (i) => {
  return { type: 'toggle_option', i };
};

const decrementIndexQ = () => {
  return { type: 'decrement_indexQ' };
};

const incrementIndexQ = (team) => {
  return { type: 'increment_indexQ', team };
};

const incrementXCount = () => {
  return { type: 'increment_x' };
};

const decrementXCount = () => {
  return { type: 'decrement_x' };
};

const setScore = (name) => {
  return { type: 'set_score', name};
}

function App() {
  const [{ question, showQuestion, options, scores, currentScore, xCount }, dispatch] = useReducer(questionReducer, initState); 

  const audioRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  }, []);

  const playAudio = (src) => {
    if(audioRef.current){
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  const handleKeyPress = (e) => {
    console.log(e);
    if(e.key === 'e') {
      dispatch(incrementXCount());
      playAudio('/incorrecto.mp3');
    } else if(e.key === 'Enter') {
      playAudio('/correcto.mp3');
    } else if(e.key === 'ArrowLeft') {
      prevQuestion();
    } else if(e.key === 'ArrowRight') {
      console.log('next question')
      nextQuestion();
    } else if(e.code === 'Space'){
      // entrada
      playAudio('/entrada.mp3');
    } else if(e.key === 'w'){
      dispatch(decrementXCount());
    } else if(e.key === 'g'){
      playAudio('/gana.wav');
    } else if(e.key === 'k'){
      dispatch(setScore('1'))
    } else if(e.key === 'l'){
      dispatch(setScore('2'));
    } else if(e.key === 's'){
      dispatch({ type: 'toggle_show_question'})
    } else if(typeof parseInt(e.key) === 'number') {
      let i = parseInt(e.key) - 1;
      dispatch(toggleOption(i));
    }
  };

  const prevQuestion = () => {
    dispatch(decrementIndexQ());
  }

  const nextQuestion = () => {
    dispatch(incrementIndexQ());
  }

  return (
    <div className="container-fluid" style={{
        height: '100vh',
        backgroundImage: `url(${config.bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
      <audio ref={audioRef}></audio>
      <div className="row">
        <div className="col-3 side">
          <div className="flex-end">
            <Score>{scores['1']}</Score>  
          </div>
        </div>
        <div className="col-6">
          <Board 
            showQuestion={showQuestion}
            question={question} 
            options={options}
            currentScore={currentScore}
          />
          <X count={xCount} />
        </div>
        <div className="col-3 side">
          <Score>{scores['2']}</Score>  
        </div>
      </div>
    </div>
  );
}

export default App;
