function getCurrentDate () {
  const d = new Date(Date.now())
  const options = {
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: '2-digit'
  }

  return d.toDateString(options) // Return date as string might change this to own
}

export default getCurrentDate
