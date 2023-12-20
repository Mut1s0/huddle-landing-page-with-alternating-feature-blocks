import { CTA, Community, Footer, Hero, Navbar } from "./components";

function App() {

  return(

    <main>

      <div>

        <header className="py-8 lg:py-10">

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