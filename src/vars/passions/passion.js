import hacking from "../../statics/pics/about/passions/hacking.jpg";
import design from "../../statics/pics/about/passions/design.jpg";
import music from "../../statics/pics/about/passions/music.jpg";
import problem from '../../statics/pics/about/passions/problem.png';

const passions=[
    {
        logo: design,
        passion: "Web Design",
        text: `
            From experience, developping apps wasn't really a big challenge for me but designing 
            them was a big one. I think design is what makes apps alive by making them human 
            friendly. Design is what lets us build interactive, reliable and scalable digital 
            products. 
        `    
    },
    {
        logo: problem,
        passion: "Problem Solving",
        text: `
            The thing I love about math is its precision to solve problems. The reason I started 
            programming in first place is that I faced some problems and I needed to solve them, 
            but math wasn't enough so I started coding and you know what you get when you combine 
            math with coding?! you get the key to solve any problem. For instance, you can't talk 
            about AI without bringing up math. In short, this is how I loot at it, my math skills 
            let me write the code needed to solve specific puzzles in a logical way, some people 
            deny this idea saying that in order to get into web dev math is not a requirement, 
            I agree but once you are in and you want to create something relevant at some point 
            you'll need math. 
        `
    },
    {
        logo: music,
        passion: "Music",
        text: `
            Life without music is boring to me, when I code I listen to music, when I take a break 
            I listen to music, when I am walking the streets I listen to music... Generally I let 
            the music on for like 3 hours a day. I listen to almost all kinds of music from Rap to 
            Pop.
        `
    },
    {
        logo: hacking,
        passion: "Hacking",
        text: `
            For a guy who has started programming with C, at some point he/she will realize that 
            his/her C knowledge is what is needed to get into the world of hacking especially if 
            you are good at algorithms and data structures picking up some scripting language like 
            Python. I remember the first time I made a buffer-over-flow exploit it felt amazing, 
            or when I cracked the wifi password of my neighbors I felt good having access to the 
            internet for free. I always found myself barricaded over the internet and hacking was 
            the way to get out of the box and be aware that there's no privacy. One of the things 
            I always put up in mind when working on my web apps is to write secure code and avoid 
            the crap.  
        `
    },
]

export default passions;