import data from './data.json';
import components from './components/component';
import strToCapitalizeCase from './utils/strToCapitalizeCase';
import {styleArr} from './utils/styleGenerate';

console.log(styleArr.join(" ").toString()) 
function App() {
  // addStyle();
  return (
    <>
      {
        data.map((element) => {
          const {name} = element;
          const Component = components[strToCapitalizeCase(name)];
          
           return <Component key={`${Date.now()}${Math.ceil(Math.floor((1 + Math.random()) * 0x10000))}`} data={element} />;
        })
      }
    </>
  );
}

export default App;
