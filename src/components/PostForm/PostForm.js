import React, { useState, useContext, useRef } from 'react';
import { PostContext } from '../PostContext/PostContext';
import { useAuth } from '../../AuthContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


const PostForm = () => {
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);
  const { currentUser } = useAuth();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({ content, id: Date.now(), user: currentUser.email });
      setContent('');
      inputRef.current.focus();
    }
  };

  if (!currentUser) {
    return <Alert variant="warning">Please log in to post.</Alert>;
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              ref={inputRef}
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              className="mb-2"
            />
          </Form.Group>
          <Button type="submit" variant="primary">Post</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export { PostForm};
