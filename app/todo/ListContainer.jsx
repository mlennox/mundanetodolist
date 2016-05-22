import React from 'react'

// stateless component because https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
// we only use props which are passed from the parent/container

class DisplayImage extends React.Component {
    static propTypes = {
        todo_items: React.PropTypes.array
    }

    static defaultProps = {
        todo_items: []
    }

    render() {
        return <section id='main'>
            <p>There are {this.props.todo_items.length} to-do items in the list : {this.props.todo_items}</p>
            </section>
    }

}

export default DisplayImage
