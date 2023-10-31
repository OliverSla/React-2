import Form from './components/Form'
import LoremIpsunGenerator from './components/LoremIpsunGenerator';
import UseRefHook from './components/UseRefHook';
import Navbar from './components/Navbar';
import FormWithNotification from '../src/components/formWithNotification';
import PrimaryComponent from './components/useContext/PrimaryComponent';
import Coordinates from './components/customHook/Coordinates';

function App() {
  return (
    <>
  {/* <Form />
  <LoremIpsunGenerator />
  <UseRefHook /> */}
  <Navbar />
  {/* <FormWithNotification />
  <PrimaryComponent /> */}
  <Coordinates />
    </>
  );
}

export default App;
