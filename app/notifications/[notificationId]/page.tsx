import { Button, Card, CardActions, CardContent, CardHeader, Divider } from "@mui/material"
import { getNotification } from "../../data"
import Link from "next/link"
import { Urgency } from "@/app/urgency"

interface HomeProps {
  params: {
    notificationId: string
  }
}

export default async function Home(props: HomeProps) {
  const { params: { notificationId } } = props
  const notification = await getNotification(+notificationId)
  return notification === null ? 'Not found' : (
    <Card sx={{ m: 2, width: 400 }}>
      <CardHeader
        avatar={<Urgency urgency={notification.urgency} />}
        title={`${notification.category} #${notification.id}`}
        sx={{ background: '#DDD' }}
      />
      <Divider />
      <CardContent>
        <p>{notification.title}</p>
      </CardContent>
      <Divider />
      <CardActions>
        <Button href="/" variant="contained" LinkComponent={Link}>
          Back
        </Button>
      </CardActions>
    </Card>
  )
}
