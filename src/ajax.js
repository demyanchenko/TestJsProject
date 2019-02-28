function getPromise() {
  return new Promise((resolve, reject) => {
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = () => {
      if (xmlHttpRequest.readyState === 4) {
        if (xmlHttpRequest.status === 200) {
          resolve(xmlHttpRequest.text);
        } else {
          reject(xmlHttpRequest);
        }
      }
    };
    xmlHttpRequest.open('GET', 'localhosxt:8080/1');
    xmlHttpRequest.send(null);
  });
}

// Используем async вместо Promise
async function show() {
  const text = await getPromise();
  const {id, price} = JSON.parse(text);
  console.log(id + price);
}

show()
  .catch(reason => console.log(reason.status));

// Использование Promise
/* getPromise().then(text => {
   const { id, price } = JSON.parse(text);
   return id + price;
 }).then(value => console.log(value))
   .catch(reason => console.log(reason.status));*/
