import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
        return (   
      <MuiThemeProvider>
            <AppBar
              title="Hello World"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
      </MuiThemeProvider>
        );
    } 
}

ReactDom.render(<App/>,document.getElementById('app'));