import './css/App.css';
import LayoutLogin from './components/LayoutLogin';
import LayoutText from './components/LayoutText';

function App() {
  return (
    <div className="App">
      <div className="wrapp-flex-container">
        <LayoutText largura="40%" /> 
        <LayoutLogin largura="60%"/>
      </div>
    </div> 
  );
}

export default App;
