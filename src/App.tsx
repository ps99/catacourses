import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import {CourseModel} from './mockfileModel'
import './scss/App.scss';

function App(props:any) {
  const mockData: CourseModel = props.data;
  return (
    <>
      <Header />
      <Layout data={mockData}/>
      <Footer />
    </>
  );
}

export default App;
