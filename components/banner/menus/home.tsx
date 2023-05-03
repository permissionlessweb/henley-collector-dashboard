import { Heading, Text } from "@chakra-ui/react"


export const Home = () => {
    return (
        <div className="about-me-info" >home</div>
    )
}

export const HomeContent = () => {
    return (
        <section id='home'>
            <div className="about-me-info">

<Heading className="about-me-title">Welcome!</Heading>
<br/>
<Text  className="italics" >Henley Beall Digital Art Collector&apos;s Dashboard</Text>
</div>
        </section>
    )
}