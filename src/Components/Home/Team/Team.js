import React from 'react';
import pic from '../../../images/memberpic3.png'
import TeamMember from '../TeamMember/TeamMember';
const memberInfo = [
    {
        name: 'Julian Assange',
        trainer: 'MERN Designer',
        image: pic
    },
    {
        name: 'Julian Assange',
        trainer: 'MERN Designer',
        image: pic
    },
    {
        name: 'Julian Assange',
        trainer: 'MERN Designer',
        image: pic
    }
]

const Team = () => {
    return (
        <section className="team">
            <div className="container">
                <h2 className="heading-h2">A Team Fueled By Passion</h2>
                <div className="row">
                    {
                        memberInfo.map(member => <TeamMember member={member}></TeamMember>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;