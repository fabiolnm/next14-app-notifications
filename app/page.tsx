import { getNotifications } from "./data"
import { Notifications } from "./notifications"

export default async function Home() {
  const notifications = await getNotifications()

  return (
    <div>
      <Notifications notifications={notifications} />
    </div>
  )
}
