import './App.css';
import First from './components/FunctionComponent';
import { Second,Third,Fourth } from './components/FunctionComponent';
import { First1,Second2,Third3 ,Fourth4} from './components/ClassComponent';
import Student from './components/StudentFunctionComponent';
import { Student1 } from './components/StudentClassComponent';
import Display from './components/DisplayComponent';
import { Button } from './components/ButtonComponent';


function App() {
  
  return (
    <div className='App'>
     {
     <>

     {/* 1.Display Hello world */}
     <h3>Hello World</h3> 

    {/* 2.Function Components */}
      <First/>
      <Second name="Priti"/>
      <Third name="Priti" address="Pune"/>
      <Fourth dept="Computer Science"></Fourth>

      {/* 3.Class Component */}
      <First1/>
      <Second2 name="Priti"/>
      <Third3/>
      <Fourth4/> 

      {/* 4.Student component */}
      <Student name="shailesh" address="tuljapur" score="90%"/>
      <Student1 name="Priti" address="tuljapur" score="88%"/> 

      {/* 5.Display Component */}

      <Display name="Priti" address="Pune" />

      {/* 6.Button Component */}
      <br/>
      <Button/>
      </> 
      }


    </div>
    
  );
}

export default App;
