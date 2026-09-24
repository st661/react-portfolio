import './service.css'

export default function Service() {
    return (
        <div class="service">
            <h1>Services</h1>
            <p>I'm still growing as a developer, but I'm confident in the services I can already provide, including the ones listed below.</p>
            <br />
            <div class="servicelist">
                <h2>Web Development</h2>
                <p>I create websites for customers and deliver them with care and attention to detail.</p>
                <img src="./dist/images/WebDevelopment.png" />
            </div>
            <br />
            <div class="servicelist">
                <h2>Ciber Security</h2>
                <p>I work to keep customers' computers safe by helping prevent security problems and digital threats.</p>
                <img src="./dist/images/CiberSecurity.png" />
            </div>
            <br />
            <div class="servicelist">
                <h2>Web Apps (Game Programming)</h2>
                <p>I'm learning how to build apps and games—especially for the web—and I'm always improving by reading programming books and writing code to sharpen my skills.</p>
            </div>
            <br />
            {/* <p>Getting ready...</p> */}
        </div>
        
    );
}