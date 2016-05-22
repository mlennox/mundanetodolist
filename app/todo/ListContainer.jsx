import React from 'react'


class DisplayImage extends React.Component {
    static propTypes = {
        todo_items: React.PropTypes.array
    }

    static defaultProps = {
        todo_items: []
    }

    render() {
        return <section id='main'>
            <p>There are {this.props.todo_items.length} to-do items in the list</p>
            </section>
    }
    
}

export default DisplayImage
