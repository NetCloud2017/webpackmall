function ajax (url, data, type = 'GET') {
  if (type === 'GET') {
    let queryData = ''
    let keys = Object.keys(data).forEach((key) => {
      queryData += `${key}=${data[key]}&`
    })
    queryData = queryData.slice(0, queryData.length -1);
    console.log(queryData)
    // axios.get()
  }
}

ajax('toto', {name: 'master', age: '232'})