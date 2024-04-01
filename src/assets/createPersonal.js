export const cargarPersonal = async ( personal ) => {
  const response = await fetch('http://127.0.0.1:3000/create-user', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(personal),
  });
  return await response.json()
}
