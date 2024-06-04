import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightsidebar from "./components/Rightsidebar";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <div className="App">
  
   
     <Header/>
  
     <div className="app_body" style={{backgroundColor:'whitesmoke'}}>
<Sidebar/>
<Feed/>
<Rightsidebar/>
     </div>
   
    </div>
  );
}

export default App;
