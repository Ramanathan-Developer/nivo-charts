import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import '@fullcalendar/daygrid/main.css';
import events from '../utility';

function FullCalendars() {
  return (
    <div className='container'>
        <div className='row'>
          <div className='calendar' style={{ margin:150,height:500 }}>
            <FullCalendar 
            displayEventTime={true}
              plugins={[ dayGridPlugin, bootstrapPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left:'prev,next',
                center:'title',
                right:'dayGridDay,dayGridWeek,dayGridMonth'
             }}
            />
          </div>
        </div>
    </div>
  )
}

export default FullCalendars