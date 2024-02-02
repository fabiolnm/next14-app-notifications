import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'
import { Urgency } from './urgency'

const columns: GridColDef[] = [
  {
    field: 'urgency',
    width: 20,
    renderCell: ({ row: { urgency }}) => <Urgency urgency={urgency } />
  },
  {
    field: 'category',
    width: 100,
    renderCell: ({ id, row: { category }}) => (
      <Link href={`/notifications/${id}`} style={{ textDecoration: 'underline' }}>
        #{id}
        <br />
        {category}
      </Link>
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
