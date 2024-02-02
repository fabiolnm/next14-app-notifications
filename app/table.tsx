import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {
    field: 'urgency',
    width: 20,
    renderCell: ({ row: { urgency }}) => (
      urgency === 'HIGH' ? '🔴' : (
        urgency === 'MEDIUM' ? '🟡' : '🔵'
      )
    )
  },
  {
    field: 'category',
    width: 100,
    renderCell: ({ id, row: { category }}) => (
      <>
        #{id}
        <br />
        {category}
      </>
    )
  },
  { field: 'title', width: 200 },
]

interface Props {
  notifications: any[]
}

export default function NotificationsTable (props: Props) {
  const { notifications } = props

  return (
    <div style={{ height: 100 }}>
      <DataGrid
        rows={notifications}
        columns={columns}
        density="compact"
        hideFooter
        getRowHeight={() => 'auto'}
        sx={{
          '.MuiDataGrid-columnHeaders': {
            display: 'none'
          },
          '.MuiDataGrid-cell': {
            minWidth: 'initial !important',
          },
          '.MuiDataGrid-cellContent': {
            overflow: 'initial',
            textOverflow: 'initial',
            whiteSpace: 'initial',
          }
        }}
        localeText={{ noRowsLabel: "Sem notificações" }}
      />
    </div>
  )
}
