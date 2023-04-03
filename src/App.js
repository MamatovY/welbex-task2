import './App.scss';
import Header from './components/header';
import Background from './components/background';
import Banner from './components/banner';
import Footer from './components/footer';


function App() {
  return (

    <div className="App">
      <Background />
      <div className="main">
        <Header />
        <Banner />
        <Footer />
      </div>
    </div>

  );
}

export default App;
