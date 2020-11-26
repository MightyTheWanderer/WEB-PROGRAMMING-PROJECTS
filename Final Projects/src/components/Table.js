import {useEffect, useState} from 'react';
import $ from "jquery";
import DataTable from 'datatables.net';
// funtional component that will render the table
function Table(props) {

    // calling the table generation method in constructor
    useEffect(() => {
        $('#data-table').DataTable({
            paging: true,
            searching: true,
            bInfo: true,
            data: props.people,
            columns: [
                {data: 'name', title: 'Name'},
                {data: 'craft', title: 'Craft'}
            ],
        });
    }, []);

    // UI for table
    return (
        <table id="data-table" className="display" style={{width: "100%"}}></table>
    );
}

export default Table;