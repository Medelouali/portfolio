import './app.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Bar from './components/navBar/Bar';

function App() {
  return (
    <div className="app">
      <Bar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
