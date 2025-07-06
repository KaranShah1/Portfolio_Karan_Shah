import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/home";
import GestationalDiabetes from "@/pages/project-details/gestational-diabetes";
import VirtualStockExchange from "@/pages/project-details/virtual-stock-exchange";
import MovieRecommendation from "@/pages/project-details/movie-recommendation";
import GreenProsperity from "@/pages/project-details/green-prosperity";
import DataTechSpecialist from "@/pages/role-details/data-tech-specialist";
import DataAnalyst from "@/pages/role-details/data-analyst";
import TaekwondoBlackBelt from "@/pages/achievement-details/taekwondo-black-belt";
import CajonPercussionist from "@/pages/achievement-details/cajon-percussionist";
import AiesecLeadership from "@/pages/achievement-details/aiesec-leadership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/gestational-diabetes" component={GestationalDiabetes} />
      <Route path="/projects/virtual-stock-exchange" component={VirtualStockExchange} />
      <Route path="/projects/movie-recommendation" component={MovieRecommendation} />
      <Route path="/projects/green-prosperity" component={GreenProsperity} />
      <Route path="/roles/data-tech-specialist" component={DataTechSpecialist} />
      <Route path="/roles/data-analyst" component={DataAnalyst} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
