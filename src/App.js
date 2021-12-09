import GlobalStyles from './theme/GlobalStyles';

import Header from './ui/organisms/Header'
import Footer from './ui/organisms/Footer'

import Onboarding from './ui/templates/Onboarding'
import Form from './ui/molecules/Form'

function App() {
  return (
    <>
      <GlobalStyles />
      <Onboarding />
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
