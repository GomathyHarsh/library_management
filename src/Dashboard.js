import React from 'react'
import Card from './Card'
import { useState } from 'react';
function Dashboard() {
  const [datas,setDatas]=useState([
    {
      id:1,
      value:4000
    },
    {
      id:2,
      value:4850
    },
    {
      id:3,
      value:4990
    },
    {
      id:4,
      value:5420
    }

]);
  return (
    <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
                    <div class="row">
                    {
              datas.map((data)=>{
                return <Card value={data.value} />
              })
            }
                    </div>

      
    </div>
  )
}

export default Dashboard