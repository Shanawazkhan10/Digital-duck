import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../../Component/Sidebar/Sidebar';
import { arrCard } from '../../constant';
import BasicButtons from '../../Component/Button';
import { useNavigate } from 'react-router-dom';

// { id: 1, text: "Engage with custom activities.", kits: "UI Kits", imgURI: img, Rs: 20.00 },
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'text', headerName: 'Description', width: 230 },
    { field: 'kits', headerName: 'UI', width: 100 },
    {
        field: 'imgURI',
        headerName: 'Image',
        type: 'number',
        width: 100,
    },
    {
        field: 'Rs',
        headerName: 'Rs',
        // description: 'This column has a value getter and is not sortable.',
        // sortable: false,
        width: 90,
        // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

export default function CashApproval() {
    const navigate = useNavigate()
    return (
        <div style={{ marginLeft: 300 }}>
            <Sidebar />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={arrCard}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <br />
            <BasicButtons
                onClick={() => { window.location.replace("./Admin") }}
                text="Approved & Save"
                class="cta-btn"
                // outline={true}
                variant="contained" />
        </div>
    );
}