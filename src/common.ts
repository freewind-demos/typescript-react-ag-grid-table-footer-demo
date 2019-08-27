import {ColDef, GridOptions} from 'ag-grid-community';

export const columnDefs: ColDef[] = [{
  headerName: "Make", field: "make", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Model", field: "model", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Price", field: "price", sortable: true, filter: true, editable: true, width: 100
}]

export type Data = {
  make: string,
  model: string,
  price: number
};

export const bodyGridOptions: GridOptions = {
  alignedGrids: [],
  suppressHorizontalScroll: true
}

export const footerGridOptions: GridOptions = {
  alignedGrids: []
}

bodyGridOptions.alignedGrids!.push(footerGridOptions);
footerGridOptions.alignedGrids!.push(bodyGridOptions);
