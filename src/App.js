import './App.css';
import Counter from './Counter';
import MyHeader from './MyHeader';

function App() {
  let name = '한수정';
  return (
    <div className="App">
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;
