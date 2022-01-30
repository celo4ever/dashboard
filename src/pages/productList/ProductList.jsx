import React, { useState } from 'react';
import './productlist.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material"
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';


export default function ProductList() {
  const [data,setData] = useState(productRows);
  const handleDelete = (id) => {
    setTimeout(() => {
        setData(data.filter((item) => item.id !== id));
    });
    //Forma bastant bona per borrar, actualitza el data set usant
    //la funció de filtratge. Filtra la data per l'ID que arriba
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "product", headerName: "Product", width: 200, renderCell: (params) => {
        return <div className='productListProduct'>
            <img className='productListImg' src= {params.row.img} alt=''/>
            {params.row.name}
        </div>
    } },
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 120, },
    { field: "price", headerName: "Price", width: 160, },
    { field: "action", headerName: 'Action', width: 150, renderCell: (params) => {
        return(
          <>
              <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline className="productListDelete" onClick= {() =>handleDelete(params.row.id)}/>
          </>
          )
    }}
  ];

  return <div className='productList'>
      <DataGrid
        rows={data} 
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  </div>;
}
