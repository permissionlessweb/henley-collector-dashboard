import { Grid, Heading,Text } from "@chakra-ui/react"
import Image from "next/image"
import headshot from "../../../public/images/headshot-1.jpg"
import henleyPainting from "../../../public/images/henley-painting-1.jpg"
import henleyWindow from "../../../public/images/henley-window-pic.jpg"
import henleyWindow2 from "../../../public/images/henley-window-pic-2.jpg"


export const AboutMe = () => {
    return (
        <div>about me</div>
    )
}

export const AboutMeContent = () => {
    return (
        <div className="about-me">
            <div className="layout">
               
                <div className="left-column">
                    <div className="about-me-intro">
                        <div className="content">
                            <Heading className="about-me-title">About Me</Heading>
                            <br/>
                            <br/>
                            <Text className="italics">Hi, I'm Henley!</Text>
                            <br/>
                            <Text className="about-me-info">
                            I was born and raised in Annapolis, Maryland with an early introduction into the arts community. My aunt, an artist herself, was the main reason I got so interested with drawing at such a young  age.
                             My earliest memories consists of watching her draw a butterfly, paint murals in our rooms. Shecd teach me how to paint different animals & plants and she&apos;d paint whatever my siblings and I could ask for.
                              That sparked an early love for art that pushed me to join an arts program in middle school, a program that granted me countless opportunities to work with a wide variety of artists in the community. 
                              This program gave me a multitude of techniques in fine arts and digital programs that I still use to this day. I accredit a lot of my skills and knowledge to Ms. Jean Orzech and Mr. Leo Hylan, 
                              two teachers I had for 3+ years and both of which influenced where I am as an artist greatly. 
                              </Text>
                              <br/>
                              <Text className="about-me-info">
                              Fast forward to the present, and youll see me as a part-time starving artist, and a full-time saleswoman and graphic designer. Today, psychedelic culture is one of my leading inspirations,
                               as you can probably tell by my paintings, but my aunt will always be my biggest motivator to pursue this talent that I&apos;m lucky to be able to work on every day.
                              </Text>
                              <br/>
                              <Text className="about-me-info">
                              At the moment I&apos;m not taking any commissions, as I&apos;m trying to build up my portfolio and work on my style, but there are prints of my recent works available on the site! 
                              </Text>
                        </div> 
                        <div className="divider"></div>
                    </div>
                    <div>
                    <Image 
                src={henleyPainting} />
                <div>Film photo taken and staged by Torrie Bordes & Camryn Bowcutt (Lucky Peak Film Company) in Baltimore, MD. April 2023.</div>
                </div>
                <div>
                    <Image 
                src={henleyWindow} />
                <div> Film photo taken and staged by Torrie Bordes & Camryn Bowcutt (Lucky Peak Film Company) in Baltimore, MD. April 2023.</div>
                </div>
                </div>
                <div className="right-column">
                    <div className="layout">
                       <Image src={headshot} />
                       <div>Headshot taken by Eric Robinson.</div>
                    </div>
                    <div className="layout">
                       <Image src={henleyWindow2} />
                       <div>Headshot taken by Eric Robinson.</div>
                    </div>
                </div>

               
                      
              
            </div>
        </div>
    )
}