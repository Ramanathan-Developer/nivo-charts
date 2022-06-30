import React from "react";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import { BrowserRouter as Router, Routes, Route   } from "react-router-dom";
import { barData, canceled, completedOnTime, completedPastDate, initialData, inProgress, pending, upComing } from './utility';
import SunBurst from "./components/SunBurst";
import FullCalendars from "./components/FullCalendars";

function App() {
  const dataArr = {
    "initial" : initialData,
    'Pending' : pending,
    'In-Progress' : inProgress,
    'Completed On Time' : completedOnTime,
    'Completed Past Date' : completedPastDate,
    'Up-Coming' : upComing,
    'Canceled' : canceled
  }
  return (
    <React.Fragment>
        <a href='/piechart'><button style={{ border:'none',backgroundColor:'black',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }}>PieChart</button></a>
        <a href='/barchart'><button style={{ border:'none',backgroundColor:'black',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }}>BarChart</button></a>
        <a href='/sunburst'><button style={{ border:'none',backgroundColor:'black',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }}>SunBurst</button></a>
        <a href='/full-calendar'><button style={{ border:'none',backgroundColor:'black',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }}>FullCalendar</button></a>
          <Router>
            <Routes>
                <Route exact path='/barchart' element={<BarChart  data={barData} />} />
                <Route exact path="/piechart" element={<PieChart dataObj={dataArr} />} />
                <Route exact path="/sunburst" element={<SunBurst />} />
                <Route exact path="/full-calendar" element={<FullCalendars />} />
            </Routes>
        </Router>
    </React.Fragment>
  );
}

export default App;
