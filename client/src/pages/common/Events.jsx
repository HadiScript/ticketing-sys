import React from 'react'

import Footer from '../../components/UI/Footer'

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast } from '@mobiscroll/react';




const Events = () => {

    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const onEventClick = React.useCallback((event) => {
        toast({
            message: event.event.title
        });
    }, []);

    const view = React.useMemo(() => {
        return {
            calendar: { type: 'month' },
            agenda: { type: 'month' }
        };
    }, []);


    return (
        <>
            <div className="container mx-auto bg-gray-100 ">
                <div className="overflow-x-auto ">
                    <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                        <div className="card-body">
                            <Eventcalendar
                                theme="ios"
                                themeVariant="light"
                                clickToCreate={false}
                                dragToCreate={false}
                                dragToMove={false}
                                dragToResize={false}
                                eventDelete={false}
                                data={myEvents}
                                view={view}
                                onEventClick={onEventClick}
                            />
                        </div>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Events