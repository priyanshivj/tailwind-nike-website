import {
  Hero, PopularProduct, CustomerReview, Service, SpecialOffer, Subscribe, SuperQuality, Footer
} from './sections';

const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-b ">
      Hero
    </section>
    <section className="padding">
      Popular Products
    </section>
    <section className="padding">
      SuperQuality
    </section>
    <section className="padding-x py-10">
      Services
    </section>
    <section className="padding">
      Special Offer
    </section>
    <section className="padding bg-pale-blue padding">
      CustomerReviews
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      Subscribe
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      Footer
    </section>
  </main>
);

export default App;