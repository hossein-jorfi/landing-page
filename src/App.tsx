import styles from "./style";

// Components
import {
  Billing,
  Business,
  CardDeal,
  Client,
  CTA,
  Footer,
  NavBar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

function App() {
  return (
    <div className={`min-h-screen bg-primary w-full overflow-hidden`}>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      {/* Navbar */}

      {/* Main */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* Main */}

      {/* Content */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
      {/* Content */}
    </div>
  );
}

export default App;
