import {
  DataGridPro, GridColDef, GridRowSelectionModel
} from '@mui/x-data-grid-pro'
import Link from 'next/link'
import { Urgency } from './urgency'
import { useEffect, useMemo, useState } from 'react'

import { LicenseInfo } from '@mui/x-license-pro'

LicenseInfo.setLicenseKey(process.env.NEXT_PUBLIC_MUI_PRO_LICENSE_KEY!)

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

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])

  useEffect(() => {
    const selectedRow = localStorage.getItem('selectedRow')
    if (selectedRow !== null && selectedRow !== undefined) {
      setRowSelectionModel([+selectedRow])
    }
  }, [setRowSelectionModel])

  const { rows, pinnedRows } = useMemo(() => {
    const selectedId = rowSelectionModel[0]
    return {
      rows: notifications.filter(({ id }) => id !== selectedId),
      pinnedRows: { top: notifications.filter(({ id }) => id === selectedId) },
    };
  }, [notifications, rowSelectionModel])

  return (
    <div style={{ height: 175 }}>
      <DataGridPro
        rows={rows}
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
        onRowClick={({ id }) => {
          if (rowSelectionModel[0] === id) {
            localStorage.removeItem('selectedRow')
            setRowSelectionModel([])
          } else {
            localStorage.setItem('selectedRow', `${id}`)
            setRowSelectionModel([id])
          }
        }}
        rowSelectionModel={rowSelectionModel}
        pinnedRows={pinnedRows}
      />
    </div>
  )
}
