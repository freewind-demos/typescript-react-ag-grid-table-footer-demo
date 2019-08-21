import React, {useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {GridApi, ColDef, ICellRendererParams} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function DeleteRowButton(props: ICellRendererParams) {
  const {api, node} = props;

  function deleteRow() {
    api.updateRowData({remove: [node.data]})
  }

  return <button onClick={deleteRow}>X</button>
}

const columnDefs: ColDef[] = [{
  headerName: "Make", field: "make", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Model", field: "model", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Price", field: "price", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Operation", field: "operation", cellRendererFramework: DeleteRowButton
}]

type Data = {
  make: string,
  model: string,
  price: number
};

const rowData: Data[] = [{
    make: "Toyota", model: "Celica", price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }]
;

function newData(): Data {
  return {
    make: "NewMake", model: "NewModel", price: 999
  }
}

export default function Hello() {
  const [gridApi, setGridApi] = useState<GridApi>(null as any)

  function addNewRow() {
    gridApi.updateRowData({add: [newData()]});
  }

  function addNewRowAndEdit() {
    const result = gridApi.updateRowData({add: [newData()]});
    const addedNode = result.add[0]
    gridApi.setFocusedCell(addedNode.rowIndex, 'make');
    gridApi.startEditingCell({
      rowIndex: addedNode.rowIndex,
      colKey: 'make',
    });
  }

  function clearAll() {
    gridApi.setRowData([]);
  }

  function removeSelected() {
    const selectedRows = gridApi.getSelectedRows();
    gridApi.updateRowData({remove: selectedRows});
  }

  return <div>
    <h1>Hello React-AgGrid</h1>
    <div
      className="ag-theme-balham"
      style={{
        height: '300px',
        width: '600px'
      }}
    >
      <div>
        <button onClick={addNewRow}>Add</button>
        <button onClick={addNewRowAndEdit}>Add & Edit</button>
        <button onClick={clearAll}>Clear All</button>
        <button onClick={removeSelected}>Remove Selected</button>
      </div>
      <AgGridReact
        columnDefs={columnDefs}
        rowSelection='multiple'
        rowData={rowData}
        onGridReady={params => setGridApi(params.api)}>
      </AgGridReact>
    </div>
  </div>
};
