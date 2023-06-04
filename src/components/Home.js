import React, {Component} from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resp: []
        }
        this.fetchStatus = this.fetchStatus.bind(this);
    }
    componentDidMount() {
        this.fetchStatus()
    }
    fetchStatus() {
        fetch('http://127.0.0.1:5000')
            .then(response => response.json())
            .then(r => {
                this.setState(
                    {
                        resp: r
                    }
                )
            })
    }

    render(){
        return( <
            div className = "Home" > {
                this.state.resp.Status
            }
        </div>
        )
    }

}

export default Home