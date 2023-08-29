import Navbar from "./component/Navbar/Navbar";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
    <QueryClientProvider>

      <Navbar />
    </QueryClientProvider>
    </div>
  );
}

export default App;
