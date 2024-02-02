'use client'

import { useState, useEffect } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'

import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Remove } from '@mui/icons-material'
import NotificationsTable from './table'

export function Notifications (props: any) {
  const [expanded, setExpanded] = useState<boolean>()

  useEffect(() => {
    setExpanded(Boolean(window.localStorage.getItem('notificationsOpen')))
  }, [setExpanded])

  return (
    <div>
      { expanded !== undefined && (
        <Accordion defaultExpanded={expanded} onChange={() => {
          if (expanded) {
            window.localStorage.removeItem('notificationsOpen')
          } else {
            window.localStorage.setItem('notificationsOpen', '1')
          }
        }}
        sx={{
          width: '400px',
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
        >
          <AccordionSummary expandIcon={<Remove sx={{ color: 'white' }} />}
            sx={{ background: 'blue',  color: 'white' }}
          >
            <Typography>
              <strong>
                Ultimas movimentações
              </strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NotificationsTable {...props} />
          </AccordionDetails>
        </Accordion>
      )}
   </div>
  );
}