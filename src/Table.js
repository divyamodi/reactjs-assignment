import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import MaterialTable from 'material-table';
import { useEffect, useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import FirstPageOutlinedIcon from '@material-ui/icons/FirstPageOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export const CovidTable = (renderData) => {

  return <div>

    <div>
    {renderData.renderData.length > 0 ? (
        <div className="table-container">
          <div className="">
            <h3 className="py-5">State wise Results</h3>
            <MaterialTable
          columns={[
            {
              title: "State",
              field: "state"
 
            },
            {
              title: "Active",
              field: "active"
            },
            {
              title: "confirmed",
              field: "confirmed",
            
            },
            {
              title: "Deaths",
              field: "deaths",
            },
            {
              title: "Recovered",
              field: "recovered",
            }
          ]}
          data={renderData.renderData}
          title=""
          icons={{
            Clear: (props) => <DeleteIcon />,
            Search: (props) => <SearchIcon />,
            ResetSearch: (props) => <DeleteIcon />,
            Export:(props) =><SystemUpdateAltOutlinedIcon />,
            FirstPage:(props) => <ChevronLeftOutlinedIcon />,
            LastPage:(props) => <ChevronRightOutlinedIcon />,
            PreviousPage:(props) => <FirstPageOutlinedIcon />,
            NextPage:(props) => <LastPageOutlinedIcon />

          }}
          options={{
            exportButton: true,
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF"
            }
          }}
        />
            

          </div>
        </div>
        )
        : (

          <label>No Data Found</label>
        )}
    </div>
  </div>
}