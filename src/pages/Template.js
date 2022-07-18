import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

function Template({ children }) {
  return (
    <Container fluid className="p-0">
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
