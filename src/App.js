import './App.css';
import Sidebar from './components/Sidebar';


function App() {
  return (
   
   <div className="my-5">
      <div className="container border border-2 rounded-20 theme-white">
        <div className="row align-items-start">
          <div className="col-2">
          </div>
          <div className="col-6">
          </div>
          <Sidebar />
        </div>
      </div>
   </div>
  
  );
}

export default App;
