export const getNotification = async () => {
  const url = 'http://127.0.0.1:8000/anomaly-plot';
  const myHeaders = new Headers();
  myHeaders.append('accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  return await fetch(url, {
    method: 'GET',
    headers: myHeaders
  }).then((res) => {
    if (res) {
      return res.json();
    }
  });
}