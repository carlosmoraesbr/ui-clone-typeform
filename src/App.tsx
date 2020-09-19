import React from 'react';

import GlobalStyles from './styles/global';
import * as styles from './styles';

import Header from './components/Header';
import FirstAndSecond from './components/FirstAndSecond';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <GlobalStyles />

      <Header />

      <styles.Main style={{ height: '1610vh' }}>
        <styles.Section style={{ height: '72.7%' }}>
          <FirstAndSecond />
        </styles.Section>

        <styles.Section style={{ height: '9.7%' }}>
          <styles.Sticky className="third" />
        </styles.Section>

        <styles.Section style={{ height: '10.1%' }}>
          <styles.Sticky className="fourth" />
        </styles.Section>
      </styles.Main>
    </>
  );
}

export default App;
