import React from 'react'

import { Row, Portion } from '../../assets/fictoan/fictoan'


class Home extends React.PureComponent {
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <div>
                <Row className="double-padding margin-top-small">
                    <Portion className="whole">
                        <h2 className="margin-bottom-fixed">React+FICTOAN</h2>
                    </Portion>
                </Row>
            </div>
        );
    }
}

export default Home
