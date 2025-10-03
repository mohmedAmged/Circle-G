import React from 'react'
import './serviceDetailSec.css'
export default function ServiceDetailSec({ service }) {
    console.log(service);
    return (
        <div className='service__detail__handler sec_margin'>
            <div className="container">
                <div className="row">
                    <div className="col-md-11">
                        <div className="single__service__description">
                            <h3>
                                <img src={service?.serviceIcon} alt="icon" />
                                {service?.serviceName}
                            </h3>
                            <p>
                                {service?.serviceDescription}
                            </p>
                        </div>
                        <div className="single__service__techniques">
                            <h3>
                                Techniques & Tools:
                            </h3>
                            <ul>
                                {Object.entries(service.techniquesAndTools).map(([category, tools]) => (
                                    <li key={category}>
                                        <strong>{category}:</strong> 
                                        <p>
                                            {tools.join(', ')}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="single__service__workProcess">
                            <h3>
                                How We Work in our services
                            </h3>
                            <ul>
                                {Object.entries(service.howWeWork).map(([key, value], index) => (
                                    <li className='process__card' key={key}>
                                        <div className="process__count">
                                            <span className="number">{`${(index + 1).toString().padStart(2, '0')}`}</span>
                                        </div>
                                        <strong>{key}:</strong>
                                        <p>
                                            {value}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
