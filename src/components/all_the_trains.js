import React from 'react';
import { Link } from 'react-router-dom';

const all_the_trains=()=>{
    const filtertrain = traininfo.filter(train =>{
        const  departureTime = new Date(train.departureTime);
        const currentTime = new Date();
        const timeDifference = (departureTime - currentTime)/60000;
        return timeDifference > 30;
    });
    
    const sorttrains=filtertrain.sort((a,b)=>{
        if(a.price===b.price){
            if(a.tickets===b.tickets){
                return new Date(b.departureTime)- new Date(a.departureTime);
            }
            return b.tickets - a.tickets
            }
            return a.price - b.price
        });

        return (
            <div>
                <h1>Displaying all the trains</h1>
                <ul>
                    {sorttrains.map(train=>(
                        <li key = {train.trainNumber}>
                            <Link to={`/train/${train.trainNumber}`}>
                                {train.trainName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

export default all_the_trains;