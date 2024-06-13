import { ThemeProvider, createTheme } from "@mui/material/styles";
import Courses from "./Courses";
import Partners from "./Partners";
import FAQ from "./FAQ";
import Mentors from "./Mentors";
import Services from "./Services";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#f5f5f5",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Mentors />
      <Services />
      <Courses />
      <Partners />
      <FAQ />
    </ThemeProvider>
  );
}

export default App;
