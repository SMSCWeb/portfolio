import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faUsers, faComments, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// Sample service data
const servicesData = [
    {
        icon: faDollarSign,
        title: 'Low prices',
        description: 'GoDrive provides top-class services at an affordable price.',
    },
    {
        icon: faUsers,
        title: 'Experienced staff',
        description: 'We hire the best experts in everything concerning car rental.',
    },
    {
        icon: faComments,
        title: 'Reliable support',
        description: 'Our team guarantees reliable support in addition to the offered services.',
    },
    {
        icon: faMapMarkerAlt,
        title: 'Convenient location',
        description: 'You can find our car rental offices throughout the US.',
    },
];

function Service(props) {
    return (
        <div className="col-sm-6 col-lg-3 ">
            <article className="blurb blurb-minimal blurb-minimal_centered">
                <div className="blurb-minimal__icon d-flex">
                    <FontAwesomeIcon icon={props.icon} size="2x" />
                </div>
                <h3 className="heading-4 blurb__title">{props.title}</h3>
                <p className="small text-secondary">{props.description}</p>
            </article>
        </div>
    );
}

function Services() {
    return (
        <section className="section section-xl bg-default services-container">
            <div className="container d-flex flex-column gap-5">
                <div className="row justify-content-center text-center">
                    <div className="d-flex flex-column gap-5 col-md-10 col-xl-8">
                        <h2>Why choose our service?</h2>
                        <p>
                            At GoDrive, our expert staff offer lots of benefits and advantages
                            to our clients. With us, you’ll receive a class-leading car rental
                            service from local experts.
                        </p>
                    </div>
                </div>
                <div className="row row-30">
                    {servicesData.map((service, index) => (
                        <Service key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
