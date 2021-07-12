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
            I got into web developpement because I had in mind some projects to build, in other 
            words, I had problems. 
        `
    },
    {
        logo: music,
        passion: "Music",
        text: ``
    },
    {
        logo: hacking,
        passion: "Hacking",
        text: ``
    },
]

export default passions;