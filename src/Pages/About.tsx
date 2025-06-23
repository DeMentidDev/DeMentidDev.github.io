import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <h2>Want to learn a little more about me?</h2>
      <ul>
        <p> </p>
        <li>
          Who exactly am I:
          <ul>
            <li>
              I am a college graduate who also does 3D modeling for a hobby.
            </li>
          </ul>
        </li>
        <li>
          As of right now, what experience do I have:
          <ul>
            <li>
              I have graduated college with bachelor of science in software
              engineering, and I'm currently looking for remote work (or
              anything local for that matter). I have also learned several
              coding languages such as...
              <ul>
                <li>Java</li>
                <li>C++</li>
                <li>HTML</li>
                <li>
                  React (Which is currently displayed for you right now within
                  this website!)
                </li>
                <li>MySQL</li>
                <li>Ruby</li>
                <li>Flutter</li>
                <li>C++</li>
                <li>And I am also capable of coding Arduino like the M5Core</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}

function AboutPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default AboutPage;
