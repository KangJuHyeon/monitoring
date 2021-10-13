import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
        };
    }
    componentDidMount() {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) =>
                this.setState({
                    username: data.username,
                }),
            );
    }
    render() {
        const { username } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    {username ? `Hello ${username}` : 'Hell World'}
                </header>
            </div>
        );
    }
}

export default App;
