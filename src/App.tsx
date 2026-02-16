import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Forums from "./pages/Forums";
import Sectors from "./pages/Sectors";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Rewards from "./pages/Rewards";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import EventDetail from "./pages/EventDetail";
import News from "./pages/News";
import SuccessStories from "./pages/SuccessStories";
import Downloads from "./pages/Downloads";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Politics from "./pages/focus/Politics";
import Diplomacy from "./pages/focus/Diplomacy";
import Business from "./pages/focus/Business";
import Climate from "./pages/focus/Climate";
import Policy from "./pages/focus/Policy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/focus/politics" element={<Politics />} />
          <Route path="/focus/diplomacy" element={<Diplomacy />} />
          <Route path="/focus/business" element={<Business />} />
          <Route path="/focus/climate" element={<Climate />} />
          <Route path="/focus/policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
