import './about.css'

export default function About() {
    return (
        <div class="about">
            <div class="aboutme">
                {/* Insert my picture */}
                <img src="./dist/images/myself.JPG" />
                <div class="intro">
                    <h1>Name: Shiori Takeda</h1>
                    
                    <h2>Who am I?</h2>
                    <p>I am currently in my third semester of the Software Engineering Technology - Artificial Intelligence program at Centennial College. Before coming to Canada, I spent approximately ten years working in Japan, where I developed strong skills in sales, marketing, and customer communication. While those roles were outside the IT sector, the experience has strengthened my ability to collaborate, analyze, and solve problems; skills I now apply to my studies in IT and AI. My long-term objective is to support others and contribute to advancements in Artificial Intelligence. I dedicate significant time each day to learning and improving so I can reach this goal soon.</p>
                </div>
            </div>
            <div class="resume">
                <a href="https://1drv.ms/b/c/65af6ac6bc2beb89/IQAL1MaQRvt0RZ92hrPI54gKAbELXUN6KDNYewBw1WVceB0?e=LgL1Du"><h2>Resume_download</h2></a>
                {/* Add the data of the resume (.pdf) */}
                <iframe src="./dist/images/Resume_ShioriTakeda.pdf"></iframe>
            </div>
        </div>
    );
}