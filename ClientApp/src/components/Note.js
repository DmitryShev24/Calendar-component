import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            note: '',
            id: this.props.id
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNote({
            id: this.props.id,
            text: this.state.text,
            post: this.props.value
        })
        this.setState({
            text: ""
        })
    }
    handleDelete = e => {
        //e.preventDefault();
        this.props.deleteNote(e);
        this.setState({
            note: ''
        })
    }
    saveNote = (id) => {
        this.props.changeNote(id, this.state.note);
        this.setState({
            note: ''
        })
    }
    handleFirstChangeNote = e => {
        this.setState({
            note: e
        });
    } 
    handleChangeNote = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    } 
    
    render() {
        const posts = this.props.value
        const id = this.props.id
        const listPosts = posts.map((post) => {
            if (post.id === id) {
                return (
                    <div key={post.id}>
                        <p onClick={() => this.handleFirstChangeNote(post.text)}>{post.text}</p>
                        <form onSubmit={() => { this.saveNote(post.id) }}>
                            <input
                                name="note"
                                onChange={this.handleChangeNote}
                                value={this.state.note}
                            />
                        </form>
                        <button onClick={() => { this.handleDelete(post.id) }}>Delete</button>
                        <button onClick={() => { this.saveNote(post.id) }}>Change</button>
                    </div >
                )
            }
        }
        )
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="text"
                        placeholder="text..."
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button onClick={this.handleSubmit}>
                        Add Note
                    </button>
                </form>
                
                {listPosts}
            </div>
        )
    }
}

Note.propTypes = {
    value: PropTypes.array.isRequired
}

export default Note