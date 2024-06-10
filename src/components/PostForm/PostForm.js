import React, { useState, useContext, useRef } from 'react';
import { PostContext } from '../PostContext/PostContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostForm = () => {
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost({ content, id: Date.now() });
      setContent('');
      inputRef.current.focus();
    }
  };

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
