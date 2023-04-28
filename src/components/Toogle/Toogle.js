import React, { Component } from 'react';

class Toogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toogle: false
        };
        this.ActivToogle = this.ActivToogle.bind(this);
    }

    ActivToogle() {
        this.setState(prevState => ({
            toogle: !prevState.toogle
        }));
    }

    render() {
        return (
            <div>
                HEllo touglle

                {this.state.toogle === true &&
                    <div>Coucou</div>
                }

                <button onClick={this.ActivToogle}>Click ici </button>
            </div>
        );
    }
}

export default Toogle;
