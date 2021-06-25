import React from 'react';

const TeamMember = ({ member }) => {
    return (
        <div className="col-md-4 col-12">
            <div className="team-member">
                <img style={{ height: '350px' }} src={member.image}></img>
                <p>{member.trainer}</p>
                <h6>{member.name}</h6>
            </div>
        </div>
    );
};

export default TeamMember;