import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Services from "./Services";
import Mentors from "./Mentors";
import Courses from "./Courses";
import Partners from "./Partners";
import FAQ from "./FAQ";

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
      <Courses />
      <Partners />
      <FAQ />
    </ThemeProvider>
  );
}

export default App;
