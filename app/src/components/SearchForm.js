import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderLoader = () => {
    return (
      <>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={15}
          width={115}
          timeout={10000} //3 seconds
        />
      </>
    );
  };
  console.log("props", props.isLoading);
  return (
    <form>
      <input type="text" onChange={handleChanges} value={searchTerm} />
      <button>{props.isLoading ? renderLoader() : "Search"}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(SearchForm);
