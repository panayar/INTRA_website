import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function MyCalendar(params) {
  return (
    <div className="container"style={{width:"90%"}}>
        <br/>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: "event 1", date: "2021-08-03" },
          { title: "event 2", date: "2021-08-05" },
          { title: "Lanzamiento de app", date: "2021-08-06"}
        ]}
      />
    </div>
  );
}
