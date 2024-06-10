import { PostProvider } from './components/PostContext/PostContext';
import {PostForm} from './components/PostForm/PostForm'
import {PostList} from './components/PostList/PostList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Header = styled.div`
  background-color: #007bff;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-bottom: 20px;
`;

const App = () => {
  return (
    <PostProvider>
      <Container className="p-3">
        <Header>
          <h1>Community Portal</h1>
          <p>Share your thoughts and connect with the community</p>
        </Header>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <PostForm />
            <PostList />
          </Col>
        </Row>
      </Container>
    </PostProvider>
  );
};

export default App;
