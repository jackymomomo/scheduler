import React from 'react';
import DayListItem from 'components/dayListItem';

// DayList renders a list of DayListItem components
export default function DayList(props) {
  const schedule = props.days.map(dayObj => {   
     return (
      <DayListItem
        key={dayObj.id}
        name={dayObj.name}
        spots={dayObj.spots}
        selected={dayObj.name === props.day}
        setDay={props.setDay} />         
    )
  })
  return <ul>{schedule}</ul>
}

// The DayList Component Props: 
// days:Array a list of day objects (each object includes an id, name, and spots)
