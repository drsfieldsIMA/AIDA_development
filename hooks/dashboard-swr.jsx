import useSWR from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:1337/assets')
  const data = await response.json()
  return data
}

function DashboardSWR() {
  const { data, error } = useSWR('admin', fetcher)

  if (error) return 'An error has occurred.'
  if (!data) return 'Loading...'

  return (
    <div>
      <h2>SWR Dashboard</h2>
      <h2>Posts - {data.title}</h2>
      <h2>Likes - {data.content}</h2>
    </div>
  )
}

export default DashboardSWR