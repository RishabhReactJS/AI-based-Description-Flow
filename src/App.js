import './App.css';
import Tabs from './Components/Tabs/Tabs';

function App() {

  const tabs = [
    {
        id: 1,
        name: "Generatation",
        title: 'Generate Workflow',
        isSummarisation: false 
    },
    {
        id: 2,
        name: "Summarisation",
        title: 'Summaries Workflow',
        isSummarisation: true
    }
  ]
  return (
    <div className="">
       <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
