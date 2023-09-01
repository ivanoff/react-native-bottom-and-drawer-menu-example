import React from 'react';

const initialCounterState = {
  count: 0,
  theme: 'light',
  lang: 'en',
};

const ee = {
  en: {
    'Home Page': '',
    'Home Screen': '',
    'Help Screen': '',
  },
  es: {
    'Home Page': 'Página de inicio',
    'Home Screen': 'Pantalla de inicio',
    'Help Screen': 'Pantalla de ayuda',
  },
};

const contextWrapper = (component?: React.Component) => ({
  ...initialCounterState,
  increment: () => {
    initialCounterState.count += 1;
    component?.setState({context: contextWrapper(component)});
  },
  decrement: () => {
    initialCounterState.count -= 1;
    component?.setState({context: contextWrapper(component)});
  },
  setTheme: (theme: string) => {
    initialCounterState.theme = theme;
    component?.setState({context: contextWrapper(component)});
  },
  setLang: (lang: string) => {
    initialCounterState.lang = lang;
    component?.setState({context: contextWrapper(component)});
  },
  t: (w: string): string => {
    const {lang = 'en'} = component?.state?.context || {};
    console.log('t ==> ', lang);
    return ee?.[lang]?.[w] || w;
  },
});

type Context = ReturnType<typeof contextWrapper>;

export const CounterContext = React.createContext<Context>(contextWrapper());

interface State {
  context: Context;
}

export class CounterContextProvider extends React.Component {
  state: State = {
    context: contextWrapper(this),
  };

  render() {
    return (
      <CounterContext.Provider value={this.state.context}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
