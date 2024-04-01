export const getPersonal = async () => {
  const res = await fetch('http://127.0.0.1:3000/personal')
  const data= await res.json()
  console.log(data)
  console.log(typeof(data))
  return data
}
