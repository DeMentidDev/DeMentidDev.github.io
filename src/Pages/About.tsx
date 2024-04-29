import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <main>
      <h2>Want to learn a little more about me?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Volutpat ac
        tincidunt vitae semper quis lectus nulla at. Velit laoreet id donec
        ultrices tincidunt arcu non. Diam ut venenatis tellus in metus vulputate
        eu scelerisque felis. Egestas maecenas pharetra convallis posuere morbi
        leo urna molestie. Massa tempor nec feugiat nisl. Fermentum iaculis eu
        non diam phasellus. Cras sed felis eget velit. Quam elementum pulvinar
        etiam non. Sodales ut eu sem integer. In nulla posuere sollicitudin
        aliquam ultrices.
      </p>
      <p>
        Dolor sed viverra ipsum nunc aliquet bibendum enim. Pellentesque eu
        tincidunt tortor aliquam. Sagittis aliquam malesuada bibendum arcu.
        Risus nec feugiat in fermentum posuere urna. Condimentum vitae sapien
        pellentesque habitant. Curabitur gravida arcu ac tortor. Lectus quam id
        leo in vitae turpis massa sed. Id venenatis a condimentum vitae sapien.
        Viverra adipiscing at in tellus integer feugiat scelerisque varius
        morbi. Urna id volutpat lacus laoreet non curabitur gravida. Tristique
        senectus et netus et malesuada fames ac turpis. Auctor elit sed
        vulputate mi sit amet. Lectus magna fringilla urna porttitor rhoncus.
        Rhoncus urna neque viverra justo nec. At augue eget arcu dictum varius
        duis at consectetur lorem. Sit amet nisl purus in mollis nunc sed id
        semper. Aliquet porttitor lacus luctus accumsan. Et tortor at risus
        viverra adipiscing at in tellus integer. Faucibus scelerisque eleifend
        donec pretium vulputate sapien nec sagittis aliquam. Risus feugiat in
        ante metus dictum at tempor commodo.
      </p>
      <p>
        Faucibus pulvinar elementum integer enim neque. Eu nisl nunc mi ipsum
        faucibus vitae. Laoreet id donec ultrices tincidunt arcu non sodales.
        Eros in cursus turpis massa tincidunt dui ut. Cursus eget nunc
        scelerisque viverra mauris in aliquam sem. Sit amet commodo nulla
        facilisi nullam. Praesent elementum facilisis leo vel fringilla est
        ullamcorper eget nulla. Vivamus arcu felis bibendum ut tristique et
        egestas. Eu scelerisque felis imperdiet proin fermentum leo vel. Egestas
        purus viverra accumsan in nisl. Quis enim lobortis scelerisque fermentum
        dui faucibus. Malesuada nunc vel risus commodo viverra maecenas.
        Ultrices eros in cursus turpis massa. Fringilla phasellus faucibus
        scelerisque eleifend donec pretium vulputate. Sodales ut eu sem integer
        vitae justo eget magna. Ac tortor dignissim convallis aenean. Id
        venenatis a condimentum vitae sapien pellentesque habitant. Urna
        porttitor rhoncus dolor purus non enim.
      </p>
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
