import GlobalStyles from './theme/GlobalStyles';

import Header from './ui/organisms/Header'

import Onboarding from './ui/templates/Onboarding'

function App() {
  return (
    <>
      <GlobalStyles />
      <Onboarding />
      <Header />
      <footer>
        made with panicc for React Europe
      </footer>
    </>
  );
}

export default App;
