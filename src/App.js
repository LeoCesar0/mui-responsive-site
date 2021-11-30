import { makeStyles } from "@material-ui/core";
import Navbar from "./components/NavBar";

const useStyles = makeStyles((theme)=>({

}))

function App() {
  const classes = useStyles()

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
