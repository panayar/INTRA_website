import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function MyCalendar(params) {
  return (
    <div className="container" style={{ width: "90%" }}>
      <br />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={[{ title: "Lanzamiento de app", date: "2021-08-12" }]}
      />
    </div>
  );
}
