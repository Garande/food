import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";

const CategoriesNav = (props) => {
  return (
    <SimpleBar style={{ maxHeight: "400px" }}>
      <Nav className='flex-column' >
        {props.categories.map((cat, index) => (
          <Nav.Item  key={`cat_${index}`} className='mt-1' style={{background: 'red'}}>
            <Nav.Link>{cat.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </SimpleBar>
  );
};

const mapStateToProps = (state) => {
  const { categories } = state.Food;
  return { categories };
};

export default connect(mapStateToProps, {})(CategoriesNav);
