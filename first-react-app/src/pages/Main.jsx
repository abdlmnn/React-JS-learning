import '../assets/css/main.css'
import '../assets/css/homepage.css'
import pic1 from '../assets/images/me/1.jpg'

const Main = () => {
    return (
        <main>
            <div className="section-homepage">
                <div className="div-image-r">
                    <img src={pic1} alt="Reading Book" />
                </div>
                <div className="div-text-1">
                    <h1>Code. Read. Create.</h1>
                    <p>
                        Passionate about building ideas, exploring stories, and expressing through visuals.
                    </p>
                </div>
            </div>

            <div className="section-aboutpage">
                
            </div>
        </main>
    );
}

export default Main