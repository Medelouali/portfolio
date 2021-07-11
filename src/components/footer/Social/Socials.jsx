import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Social from './Social';
import "./social.css";

export default function Socials() {
    const icons=[
        {comp: <FacebookIcon/>, link: "#"}, {comp: <TwitterIcon/>, link: "#"}, 
        {comp: <LinkedInIcon/>, link: "#"}, {comp: <GitHubIcon/>, link: "https://github.com/Medelouali"}, 
        {comp: <EmailIcon/>, link: "mailto:Mohammedelouali1999@gmail.com"}
    ];
    return (
        <div className="socials">
            { icons.map(i=>(<Social icon={i.comp} link={i.link}/>)) }
        </div>
    )
}
