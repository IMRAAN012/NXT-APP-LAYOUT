import Header from "../components/Header"



function About(){
    return <div className='content'>About</div>
}
export default About

About.getLayout = function PageLayout(Page){
    return(
        <>
        <Header />
        {Page}
        
        </>
    )
}