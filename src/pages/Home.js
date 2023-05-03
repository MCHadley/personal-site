import Links from "../components/common/Links";
import Footer from "../components/common/Footer";

const Home = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="body">
                <div className="intro">
                    <h1>Hi! I'm Michael. <span role="img" aria-label="emoji">👋🏻</span></h1>
                    <h2>I'm a Software Developer in Atlanta, GA</h2>
                    <p>I like writing code, and solving problems</p>
                    <p>I've spent time around Python, Java, React, and Node</p>
                </div>
                <div className="body">
                    <p>I enjoy photography, books, going to Braves baseball games <span role="img" aria-label="emoji">⚾️</span>, and cooking.</p>
                    <p>And I've got a cat named Luna<span role="img" aria-label="emoji">🐈</span></p>
                    <p>Watch this space for new stuff!</p>
                </div>
                <div className="links">
                    <a href="https://github.com/mchadley" aria-label="Github link" class="footer-octicon" title="GitHub">
                        <i style={{ fontSize: '30px' }} class="fa">&#xf09b;</i>
                    </a>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Home;