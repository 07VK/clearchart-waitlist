import React from 'react';
import './TeamSection.css';

// Import your local image files
import nicholasDavis from '../assets/team_images/nicholas-davis.jpg';
import dhruvSuraj from '../assets/team_images/dhruv-suraj.jpg';
import vishnuKoraganji from '../assets/team_images/vishnu-koraganji.png';

const TeamSection: React.FC = () => {
    const teamMembers = [
        {
            name: 'Nicholas Davis',
            title: 'Founder & CEO, AGACNP, BSN',
            bio: 'Over 8 years in the medical field as a nurse, driving the company’s mission with a deep understanding of patient care.',
            image: nicholasDavis
        },
        {
            name: 'Dhruv Suraj',
            title: 'Lead AI Engineer',
            bio: 'Responsible for the entire tech stack, ensuring the platform is powerful, intuitive, and reliable for all users.',
            image: dhruvSuraj
        },
        {
            name: 'Vishnu Koraganji',
            title: 'Sr Full-Stack AI Engineer',
            bio: 'Expert in AI/ML and NLP, translating complex medical jargon into clear, understandable language for users and designing UI.',
            image: vishnuKoraganji
        },
    ];

    return (
        <section id="team" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
            <h2 className="text-[56px]/[1.05] sm:text-[64px]/[1.05] font-extrabold text-slate-900 tracking-tight">
                The Team
            </h2>

            <p className="mt-6 text-lg text-slate-600 max-w-6xl">
                Meet the passionate individuals behind ClearChartAI, dedicated to bringing clarity and control to your healthcare journey.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card-container" key={index}>
                        <div className="team-card">
                            <div className="card-image-content">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="card-image"
                                />
                            </div>
                            <div className="card-info">
                                <div className="card-front-content">
                                    <h3 className="card-name">{member.name}</h3>
                                    <p className="card-title">{member.title}</p>
                                </div>
                                <div className="card-back-content">
                                    <p className="card-bio">{member.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;