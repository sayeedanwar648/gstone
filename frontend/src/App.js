import logo from './logo.svg';
import './App.css';
import MyTable from './component/Table';


function App() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];
  return (
    <div className="App">
      <MyTable data={data}/>
    </div>
  );
}

export default App;
