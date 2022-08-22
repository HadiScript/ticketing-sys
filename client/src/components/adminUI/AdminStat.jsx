import React from 'react'

import { useSpring, animated } from 'react-spring';


const Stat = () => {

    const TotalTicket = useSpring({ val: 250, from: { val: 0 } });
    const pendingTickets = useSpring({ val: 100, from: { val: 0 } });
    const confiredTickets = useSpring({ val: 150, from: { val: 0 } });

    return (
        <div class="stats  bg-transparent  w-full">

            <div class="stat place-items-center">
                <div class=" text-white">Total Tickets</div>
                <div class="stat-value">
                    <div className="number text-white">
                        {TotalTicket.val.interpolate(val => Math.floor(val))}
                    </div>
                </div>
                <div class="stat-desc">From January 1st to February 1st</div>
            </div>

            <div class="stat place-items-center">
                <div class="text-white">Pending Tickets</div>
                <div class="stat-value">
                    <animated.div className="number text-white">
                        {pendingTickets.val.interpolate(val => Math.floor(val))}
                    </animated.div>
                </div>
                <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div class="stat place-items-center">
                <div class="text-white">Confrim Tickets</div>
                <div class="stat-value">
                    <animated.div className="number text-white">
                        {confiredTickets.val.interpolate(val => Math.floor(val))}
                    </animated.div>
                </div>
                <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

        </div>
    )
}

export default Stat