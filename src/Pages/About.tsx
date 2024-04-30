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
              I'm a college student who also has a hobby for modeling in 3D.
            </li>
          </ul>
        </li>
        <li>
          As of right now, what experience do I have:
          <ul>
            <li>
              I'm currently in college for a bachelor's degree in software
              engineering, and I'm currently looking for an internship this
              summer. While I have a hobby in 3D modeling thanks to Blender, I
              have also learned several coding languages such as...
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
                <li>And I'm currently learning both Flutter and Swift</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Anything important to keep in mind:
          <ul>
            <li>
              I'm an autistic adult, diagnosed at an early age, though that
              shouldn't be a detriment to being able to work. If anything, it's
              made me even better of a worker.
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
