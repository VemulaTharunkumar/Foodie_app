import React from 'react';
import './ContactPage.css';

// Data for team members - this needs to be inside the file to be displayed.
const teamMembers = [
    {
        name: 'Tharnkumar',
        role: 'Lead',
        photo: 'https://www.webrankinfo.com/dossiers/wp-content/uploads/sundar-pichai-officiel.jpg'
    },
    {
        name: 'VijayManikanta',
        role: 'Supporting Member',
        photo: 'https://placehold.co/400x400/A8DF8E/000?text=Rohan'
    },
    {
        name: 'Ramana Raju',
        role: 'Supporting Member',
        photo: 'https://placehold.co/400x400/F3F0CA/000?text=Priya'
    },
    {
        name: 'AnandMani',
        role: 'Supporting Member',
        photo: 'https://placehold.co/400x400/A0E9FF/000?text=Vikram'
    },
    {
        name: 'Archana',
        role: 'Supporting Member',
        photo: 'https://placehold.co/400x400/F5E8C7/000?text=Sunita'
    },
    {
        name: 'Venkata Sai',
        role: 'Supporting Member',
        photo: 'https://placehold.co/400x400/BEADFA/000?text=Amit'
    },
    {
        name:'Pochamma',
        role:'Supporting Member',
        photo:'https://placehold.co/400x400/BEADFA/000?text=Amit'
    }
];

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <h1 className="contact-title">Meet Our Team</h1>
            <p className="contact-subtitle">
                The passionate people behind your favorite meals.
            </p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member-card">
                        <img src='https://static.vecteezy.com/system/resources/previews/030/320/735/large_2x/rooftop-ambiance-hooded-man-with-hidden-face-copy-space-intensifying-intrigue-for-social-media-post-size-ai-generated-free-photo.jpg' className="team-member-photo" />
                        <div className="team-member-info">
                            <h3 className="team-member-name">{member.name}</h3>
                            <p className="team-member-role">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactPage;

