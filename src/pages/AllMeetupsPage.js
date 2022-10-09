import Meetups from "../components/meetups/Meetups";
import { useEffect, useState } from 'react';
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  useEffect(() => {
    fetch("/data.json")
    .then(response => {
        return response.json();
    }).then(data => {
        const meetups = [];
        for(let key in data) {
            const meetup = {
                id: key,
                ...data[key]
            }
            meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
}, []);


if(isLoading) {
  return (
      <section>
          Loading
      </section>
  );
}


  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
      <Meetups meetups={loadedMeetups} />
      </ul>
    </section>
  );
}
