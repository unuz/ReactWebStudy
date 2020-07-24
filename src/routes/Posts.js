import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({ match }) => {
    return (
        <h2>
            {match.params.title}
        </h2>
    )
}

const Posts = () => {
    return (
        <div className="text-center">
            포스트<br />
            <Link to="/posts/react" className="posts">React</Link><br />
            <Link to="/class" className="posts">Class Gugudan</Link><br />
            <Link to="/hooks" className="posts">Hooks Gugudan</Link><br />
            <Link to="/repeat" className="posts">Repeat</Link><br />
            <Link to="/redux" className="posts">Redux</Link><br />
            
            <Route path="/posts/:title" component={Post}></Route>
        </div>
    );
};

export default Posts;