import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import { useState, useEffect } from "react";
import Projects from "./components/Sections/Projects";
import Footer from "./components/Sections/Footer";
import RealtimeProfiles from "./components/Sections/Profiles";
import Certifications from "./components/Sections/Certifications";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;




// Toggle Button Styling
const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.text_primary};
  color: ${({ theme }) => theme.bg};
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
    opacity: 0.8;
  }
`;

// Pop-up Notification Styling
const Popup = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 8px;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(10px)")};
  transition: opacity 0.4s ease, transform 0.4s ease;
  z-index: 999;
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const [showPopup, setShowPopup] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Show popup when switching to light mode
  useEffect(() => {
    if (theme === "light") {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <div>
          <Wrapper>
            <Hero />
            </Wrapper>
            <Wrapper>
              <Skills />
              </Wrapper>
              <Wrapper>
              <Certifications />
              </Wrapper>
              <Wrapper>
              <RealtimeProfiles />
            </Wrapper>
              <Wrapper>
              <Experience />
            </Wrapper>
            <Wrapper>
            <Education />
            </Wrapper>
            <Wrapper>
              <Projects />
            </Wrapper>
            
            <Footer />
          </div>
        </Body>

        {/* Popup Message */}
        <Popup show={showPopup}>Best in Dark Mode</Popup>

        {/* Theme Toggle Button */}
        <ToggleButton onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </ToggleButton>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
