
import MeetupItem from  './MeetupItem';

function Meetups(props) {
    return  (
        <ul >
            {props.meetups.map((meetup,index) => (
                <MeetupItem key={meetup.id} id={meetup.id} 
                image={meetup.image} title={meetup.title} 
                address={meetup.address} description={meetup.description}/>
                
            ))}
        </ul>
    );
}

export default Meetups;