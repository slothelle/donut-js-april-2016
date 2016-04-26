// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  hat: require("../assets/hat.jpg"),
  hats: require("../assets/hats.jpg"),
  fire: require("../assets/fire.jpg"),
  pattern: require("../assets/pattern.png"),
  math: require("../assets/math.jpg"),
  repos: require("../assets/repos.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "white",
  quartenary: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={100}>
          <Slide bgImage={images.hat} bgDarken={0.25}>
            <Heading size={1} fit caps>
              Liz Abinante presents
            </Heading>
            <Heading size={4} fit textColor="primary">
              her foolish quest to auto-generate
            </Heading>
            <Heading size={4} fit textColor="primary">
              knitting patterns using JavaScript. 
            </Heading>
            <Text textSize={36} lineHeight={3} bold textColor="primary">
              @feministy &bull; me@liz.codes
            </Text>
          </Slide>

          <Slide bgColor="secondary">
            <Heading size={1} fit caps>
              Knitting + JavaScript
            </Heading>
            <Heading size={1} fit>
              What could go possibly wrong?
            </Heading>
          </Slide>

          <Slide bgImage={images.fire}>
            <Heading size={1} fit caps>
              A lot.
            </Heading>
          </Slide>

          <Slide bgColor="secondary">
            <Image src={images.repos} width="100%"></Image>
            <Appear>
              <Text textColor="primary" bold textColor="primary" lineHeight={1.5}>This is my yak.</Text>
            </Appear>
          </Slide>

          <Slide bgImage={images.pattern} bgDarken={0.8}>
            <Heading size={5} textColor="quartenary">
              What's in a knitting pattern?
            </Heading>
            <List textColor="quartenary">
              <Appear><ListItem>Required yarn weight and amount</ListItem></Appear>
              <Appear><ListItem>Sizing information</ListItem></Appear>
              <Appear><ListItem>Suggested needle size</ListItem></Appear>
              <Appear><ListItem>Gauge (stitches per inch and row)</ListItem></Appear>
              <Appear><ListItem>Abbreviations</ListItem></Appear>
              <Appear><ListItem>Actual instructions</ListItem></Appear>
              <Appear><ListItem>Reference images</ListItem></Appear>
              <Appear><ListItem>Charts</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.math} bgDarken={0.35}>
            <Heading size={2} textColor="quartenary">
              Math for math's sake is very different than math to create a real thing.
            </Heading>
          </Slide>

          <Slide bgImage={images.math} bgDarken={0.35}>
            <Heading size={2} textColor="quartenary">
              Common problems
            </Heading>
            <Appear>
              <Heading size={4} textColor="quartenary">
                Rounding
              </Heading>
            </Appear>

            <Appear>
              <Heading size={4} textColor="quartenary">
                Unit conversions
              </Heading>
            </Appear>

            <Appear>
              <Heading size={4} textColor="quartenary">
                Domain knowledge
              </Heading>
            </Appear>
          </Slide>

          
          <Slide bgImage={images.hats} bgDarken={0.35}>
            <Heading>Rounding</Heading>
            <Text textColor="primary" bold textColor="primary" lineHeight={1.5}>Little problems: 1/2" too small, or 1/3" too big?</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/rounding.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide bgImage={images.hats} bgDarken={0.35}>
            <Heading>Unit conversions</Heading>
            <Text textColor="primary" bold textColor="primary" lineHeight={1.5}>Calculating imperial vs metric units</Text>
            <Layout>
              <Fill margin={10}>
                <CodePane
                  margin={10}
                  lang="js"
                  source={require("raw!../assets/conversions.example")}
                  margin="20px auto"
                />
              </Fill>
              <Fill margin={10}>
                <CodePane
                  margin={10}
                  lang="js"
                  source={require("raw!../assets/conversions2.example")}
                  margin="20px auto"
                />
              </Fill>
            </Layout>
          </Slide>

          <Slide bgImage={images.hats} bgDarken={0.35}>
            <Heading>Domain knowledge</Heading>
            <Text textColor="primary" textColor="primary" lineHeight={1.5}>What's the appropriate slope for an adult hat?</Text>
            <Text textColor="primary" textColor="primary" lineHeight={1.5}>What method of decreasing do you use?</Text>
            <Text textColor="primary" textColor="primary" lineHeight={1.5}>What about for hats with extreme slopes?</Text>
            <Text textColor="primary" textColor="primary" lineHeight={1.5}>Is more or less ease ok?</Text>
            <Text textColor="primary" textColor="primary" lineHeight={1.5}>What about more complicated garments, like sweaters or socks?</Text>
          </Slide>

          <Slide bgImage={images.hat} bgDarken={0.25}>
            <Heading size={1} fit caps>
              The end result
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5}>
              Stuff!
            </Heading>
            <List>
              <ListItem><Link href="https://github.com/feministy/donut-js-april-2016">Slides</Link></ListItem>
              <ListItem><Link href="http://artcraftcode.com/patterns/very_pdx/">ArtCraftCode: Make a hat pattern!</Link></ListItem>
              <ListItem><Link href="https://github.com/ArtCraftCode/artcraftcode.com">ArtCraftCode source</Link></ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={5}>
              Images!
            </Heading>
            <List>
              <ListItem><Link href="https://unsplash.com/photos/hAobD5OjoHE">Knit hat</Link></ListItem>
              <ListItem><Link href="https://www.pexels.com/photo/wood-explosion-fire-hot-8504/">Fire</Link></ListItem>
              <ListItem><Link href="https://unsplash.com/photos/5mZ_M06Fc9g">Math equation</Link></ListItem>
              <ListItem><Link href="http://www.purlsoho.com/create/2014/10/22/classic-cuffed-hat/">Stack of knit hats</Link></ListItem>
            </List>
          </Slide>
          
        </Deck>
      </Spectacle>
    );
  }
}
