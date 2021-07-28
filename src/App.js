import './App.css';
import Header from "./component/header";
import Form from "./component/form";
import Table from "./component/table";
import Detail from "./component/detail";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <Header/>
    <Detail/>
    <Form/>
    <strong> Note : Please enter detail for comes in list </strong>
    <hr />
    <Table/>
    <Footer/>
    </>
  );
}

export default App;
