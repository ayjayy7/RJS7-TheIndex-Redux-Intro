import React from "react";
import { addAuthor } from "./stores/actions";
import { connect } from "react-redux";

function Sidebar(props) {
  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button className="btn btn-block btn-light" onClick={props.addAuthor}>
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addAuthor: () => dispatch(addAuthor())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
