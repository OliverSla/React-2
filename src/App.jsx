import Form from './components/Form'
import LoremIpsunGenerator from './components/LoremIpsunGenerator';
import UseRefHook from './components/UseRefHook';
import Navbar from './components/Navbar';
import FormWithNotification from '../src/components/formWithNotification';
import PrimaryComponent from './components/useContext/PrimaryComponent';
import Coordinates from './components/customHook/Coordinates';
import Books from './components/propsValidation/Books';

function App() {
  return (
    <>
  {/* <Form />
  <LoremIpsunGenerator />
  <UseRefHook /> 
  <Navbar />*/}
  <FormWithNotification />
  <PrimaryComponent />
  <Coordinates />
  <Books />

    </>
  );
}

export default App;
