import React from 'react'


class DisplayImage extends React.Component {
    // static propTypes = {
    //     todo_items: React.PropTypes.array
    // }

    getInitialState () {
        return {
            todo_items: []
        }
    }

    render() {
        return <section id='main'>
            <p>There are {this.props.todo_items.length}</p>
            </section>
    }
    
}

export default DisplayImage
