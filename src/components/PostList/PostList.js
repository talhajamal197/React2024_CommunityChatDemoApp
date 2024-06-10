import React, { useContext } from 'react';
import { PostContext } from '../PostContext/PostContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <Card>
      <Card.Header as="h5">Recent Posts</Card.Header>
      <ListGroup variant="flush">
        {posts.map((post) => (
          <ListGroup.Item key={post.id}>
            <p>{post.content}</p>
            <small>Posted by {post.user}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};
export {PostList};
