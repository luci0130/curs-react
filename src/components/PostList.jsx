import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component {

    constructor(props) {
        console.log("UserList.js Constructor has been called.");
        super(props);
        this.state = {
            posts: []
        };
    }

    render() {
        console.log("UserList.js render has been called.");
        return <div className="post-list">
            {
                this.state.posts.map((post) => {
                    return <PostItem
                        title={post.title}
                        body={post.body}
                        key={post.id}
                    />
                })
            }
        </div>;
    }

    componentDidMount() {
        console.log("UserList.js componentDidMount has been called.");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            }).then((posts) => {
            this.setState({
                'posts': posts.filter((post) => {
                        return post.id < 7;
                    }
                )
            })
        })
    }
}

export default PostList;