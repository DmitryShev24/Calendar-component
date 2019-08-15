import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from '../App';
import shortid from 'shortid';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            note: '',
            id: this.props.id
        }
        /*this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        */
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
    }
    saveNote = (id) => {
        this.props.changeNote(id, this.state.note);
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
        const listPosts = posts.map((post) => {
            if (post.id == this.state.id) {
                return(
                <li key={post.id}>
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
                    </li>
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

Counter.propTypes = {
    value: PropTypes.array.isRequired
}

export default Counter