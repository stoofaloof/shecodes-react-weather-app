import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="md-3" id="form-input">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="form-control"
              placeholder="Enter your city"
            />
          </div>
          <div className="col-4 d-grid gap-2 d-md-flex justify-content-md-end">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary me-md-4"
              id="search-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
