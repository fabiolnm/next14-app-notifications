export function Urgency(props: any) {
  const { urgency } = props
  return (
    <>
      {urgency === 'HIGH' ? '🔴' : (
        urgency === 'MEDIUM' ? '🟡' : '🔵'
      )}
    </>
  )
}