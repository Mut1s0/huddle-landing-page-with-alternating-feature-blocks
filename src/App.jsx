import { CTA, Community, Footer, Hero, Navbar } from "./components";

function App() {

  return(

    <main>

      <div>

        <header>

          <Navbar />
          <Hero />

        </header>

        <article>

          <Community />
          <CTA />

        </article>

        <footer>

          <Footer />

        </footer>

      </div>

    </main>

  )
}

export default App;