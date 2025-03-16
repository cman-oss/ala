import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import ContactPage from "./components/contact/ContactPage";
import PricingPage from "./components/pricing/PricingPage";

// Lazy load components
const DocumentationPage = lazy(
  () => import("./components/documentation/DocumentationPage"),
);
const CheckoutPage = lazy(
  () => import("./components/subscription/CheckoutPage"),
);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
