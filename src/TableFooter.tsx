import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {Data, columnDefs, footerGridOptions} from './common';

const rowData: Data[] = [{
  make: "Total", model: "", price: 100000
}];

export default function TableFooter() {
  return <div
    className="ag-theme-balham"
    style={{
      height: '32px',
      width: '600px',
    }}
  >
    <AgGridReact
      columnDefs={columnDefs}
      rowData={rowData}
      gridOptions={footerGridOptions}
      headerHeight={0}
      rowStyle={{fontWeight: 'bold'}}>
    </AgGridReact>
  </div>;
};
