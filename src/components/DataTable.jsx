import React, { useContext } from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";
import DataAreaContext from "../utils/DataAreaContext";

const DataTable = () => {
  const context = useContext(DataAreaContext);

  return (
    // table displaying all the content
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          {/* handles sorting when arrow is clicked */}
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  {/* pointer arrow to sort */}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
            {/* importing and displaying the body table component */}
        <DataBody />
      </table>
    </div>
  );
}

export default DataTable;