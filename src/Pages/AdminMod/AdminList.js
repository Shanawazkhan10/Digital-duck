import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from '../../Component/Sidebar/Sidebar';
import { arrCard } from '../../constant';
import BasicButtons from '../../Component/Button';
import { useNavigate } from 'react-router-dom';
import { child, get, getDatabase, push, ref, set, update } from "firebase/database"
import { FireBaseApp } from '../../firebase'
import SimpleBackdrop from '../../Component/BackDrop';
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
        width: 90,
    },
];

export default function ApprovalList() {
    const [liveData, setLiveData] = React.useState([])
    const [nonApprovalData, setnonApprovalData] = React.useState([])
    const [loading, setLoading] = React.useState([])
    const [SelectedData, setSelectedData] = React.useState([])
    const [DisplayData, setDisplayData] = React.useState([])
    const fetchVersion = async () => {
        const db = getDatabase(FireBaseApp)
        const dbrefLive = ref(db, "ProductList")
        const snapshotlive = await get(dbrefLive)
        await setLiveData(Object.values(snapshotlive.val())?.[0])
        let nonAppr = await (Object.values(snapshotlive.val())?.[0])?.filter?.((i) => !i?.isStatus)
        setnonApprovalData(nonAppr)
        setDisplayData(Object.values(snapshotlive.val())?.[0])
        if (Object.values(snapshotlive.val())?.[0].length > 0) {
            setLoading(false)
        }
    }
    React.useEffect(() => {
        fetchVersion()
    }, [])
    const handleSubmit = () => {
        const idIsInList = id => SelectedData.includes(+id)
        const result = liveData.map(item => {
            if (idIsInList(item.id)) {
                return { ...item, isStatus: !item?.isStatus }
            } else {
                return item
            }
        })
        setLoading(true)
        const db = getDatabase(FireBaseApp)
        const updates = {};
        updates["ProductList"] = [result]

        return update(ref(db), updates)
            .then(() => { window.location.replace("./ApprovalList") })
            .catch(() => alert("ERROR Occurs"));
    }
    return (
        <div style={{ marginLeft: 300 }}>
            <Sidebar />
            <div style={{ textAlign: 'left', padding: 10 }}>
                <BasicButtons
                    onClick={() => {
                        setLoading(true); setDisplayData(liveData);
                        setTimeout(() => {
                            setLoading(false);
                        }, 3000);
                    }}
                    text="All Data"
                    class="cta-btn"
                    outline={true}
                    variant="contained" />
                &nbsp;
                &nbsp;
                <BasicButtons
                    onClick={() => {
                        setLoading(true); setDisplayData(nonApprovalData);
                        setTimeout(() => {
                            setLoading(false);
                        }, 3000);
                    }}
                    text="Pending Approval"
                    class="cta-btn"
                    outline={true}
                    variant="contained" />
            </div>
            {
                loading ? <SimpleBackdrop isload={loading} /> :
                    <>

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={DisplayData}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 10 },
                                    },
                                }}
                                // onCellClick={(e) => console.log(e, liveData, "DKODKODKODKOOKDKDKOF")
                                // }
                                onRowSelectionModelChange={(e) => setSelectedData(e)}
                                pageSizeOptions={[10, 10]}
                                checkboxSelection={true}
                            />
                        </div>
                        <br />
                        <BasicButtons
                            onClick={handleSubmit}
                            text="Approved & Save"
                            class="cta-btn"
                            // outline={true}
                            variant="contained" />
                    </>
            }

        </div>
    );
}