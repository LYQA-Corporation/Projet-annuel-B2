import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import '../styles/ColorCalendar.css';

// const events = [
//   {
//     id: 1,
//     start: '2023-07-03',
//   },
//   {
//     id: 5,
//     start: '2023-07-03',
//   },
//   {
//     id: 2,
//     start: '2023-07-10',
//   },
//   {
//     id: 3,
//     start: '2023-07-18',
//   },
//   {
//     id: 4,
//     start: '2023-07-18',
//   },
// ]


function CalendarMonth(props) {
  const calendarRef = React.createRef();

  let courses = [];
  const ApiPlanning = props.courses;
  if (ApiPlanning !== undefined) {
    courses = ApiPlanning.map((course)=>{
      let heure_debut = new Date(course.heure_debut_cours);
      heure_debut.setHours(heure_debut.getHours() - 2);
      heure_debut = heure_debut.toISOString().split('T')[0];
      return {
        id: course.id_cours,
        start: heure_debut,
      }
    })
  }

  const handleDateClick = (info) => {
    const dateStr = info.dateStr;
    props.onDateClick(dateStr);
  };
  
  
  //création du tableau avec les datess uniques
  const uniqueDates = Array.from(new Set(courses.map((event) => event.start)))
  .map((date) => ({ start: date }));
  
  const handleEventClick = (info) => {
    const event = info.event;
    var Eventdate = event.start 
    Eventdate = Eventdate.setDate(event.start.getDate() + 1)
    props.onEventClick(Eventdate);
  }

  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    height: 'auto',
    locales: [frLocale],
    locale: 'fr',
    events: uniqueDates,
    eventColor: '#4BBDB7',
    nowIndicator: true,
    dateClick: handleDateClick, 
    eventClick: handleEventClick 
  };

  return (
    <div className="calendarMois">
      <FullCalendar ref={calendarRef} {...calendarOptions} />
    </div>
  );
}

export default CalendarMonth;