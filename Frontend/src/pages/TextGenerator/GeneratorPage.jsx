import Toolbar from "../../components/Toolbar";
import GeneratorInputs from "./Inputs";
import "./GeneratorPage.css"

function GeneratorPage(props) {
  
  return(
    <>
        <Toolbar><h2>Создание текста</h2></Toolbar>
        <GeneratorInputs/>
    </>
  )
}

export default GeneratorPage;
