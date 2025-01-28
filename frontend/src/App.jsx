import { Nav } from "./components";
import { Footer, Hero, Homes } from "./sections";

function App() {
  return (
    <>
      <main>
        <Nav />
        <section>
          <Hero />
        </section>
        <section>
          <Homes />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
