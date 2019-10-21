function getCurrentDate() {
  let d = new Date(Date.now()) 
  return d.toDateString() // Return date as string
}

export default getCurrentDate