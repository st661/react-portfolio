import './project.css'

export default function Project() {
    return (
        <div class="project">
            <h1>Group Projects</h1>
            <br />
            <h2>SRS Document</h2>
            <p>Throughout group projects, I acted as the Team Leader and managed communication through our WhatsApp group chat. I kept the team organized by reminding members of their responsibilities and offering clear explanations of their deliverables to support timely progress.&emsp;<br /><a href="https://1drv.ms/w/c/65af6ac6bc2beb89/IQA5VE2VJov4Sa41cwzo0Sk5AZtN3GfHLKlEE6dlJx32cYM?e=E6VL0n">Link to SRS Document</a></p>
            <br />
            <h3>My responsible parts are:</h3>
            <ul class="deliverables">
                <li>Purpose</li>
                <li>Document Conventions</li>
                <li>Intended Audience and Background Research</li>
                <li>Product Scope</li>
                <li>Product Functions</li>
                <li>User Classes and Characteristics</li>
                <li>Design and Implementation Constraints</li>
                <li>User Documentation</li>
                <li>Assumptions and Dependencies</li>
                <li>User Interfaces</li>
                <li>Use Case Table</li>
                <li>Use-Case Formal Descriptoins</li>
                <li>Diagrams</li>
                <li>Header Gen AI Sequence</li>
            </ul>
            <br />
            {/* Add the data of the project (SRS.pdf) */}
            <iframe src="./dist/images/COMP225_TeamProject_ShioriTakeda.pdf"></iframe>
            <br /><br />
            <h2>eCommerce</h2>
            <p>As a team, we practiced agile collaboration by booking campus meeting rooms and conducting regular check-ins. We set independent internal deadlines to stay ahead of the official schecdule, shared information transparently, and tracked our progress to ensure steady advancement.&emsp;<br /><a href="https://1drv.ms/w/c/65af6ac6bc2beb89/IQBiFs9T_c2CS4SVJHKEez1YAU_OAdLfWEOth-v9m1Iu58w?e=sIlacF">Link to eCommerce</a></p>
            <br />
            <h3>My responsible parts are:</h3>
            {/* <br /> */}
            <ul class="deliverables">
                <li>Stakeholders</li>
                <li>Functional and Non-functional Requirements</li>
                <li>Study of Existing Systems</li>
                <li>Creating Tables, Data and Business Requirements</li>
            </ul>
            <br />
            {/* Add the data of the project (eCommerce.pdf) */}
            <iframe src="./dist/images/eCommerce_GroupProject_ShioriTakeda.pdf"></iframe>
            <br /><br /><br />
            <h1>Individual Project</h1>
            <br />
            <h2>Restaurant Web Site</h2>
            <p>I built this website on my own during the semester, progressing from the home page to the search bar. I'm still not satisfied with its quality, so I'm studying HTML, CSS, and JavaScript further to create stronger, more refined projects.
            &emsp;<a href="http://studentweb.cencol.ca/stakeda/SecondSemester/Assignment6/Home%20Page/home.html">Link to Restaurant Web Page</a>
            </p>
            <br />
            <div class="restaurant-images">
                <img src="./dist/images/restaurant_home.png" />
                <img src="./dist/images/restaurant_aboutus.png" />
                <img src="./dist/images/restaurant_galleries.png" />
            </div>
            <br />
        </div>
    );
}