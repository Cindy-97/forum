/**
 *  @type httpRquest
 *  @version 0.0.1
 */
const toConcatData = (data) => {
    let str = '?';
    Object.keys(data).forEach((item)=>{
        str = `${str}${item}=${data[item]}&`
    })
    return str.substring(0,str.length-1)　;
}
export const get = (url,data) => {
    let queryStr = ""
    if(!data){
        queryStr = toConcatData(data)
    }
    let fetchUrl = `${url}${queryStr}`
    return new Promise((resolve, reject) => {
      fetch(fetchUrl)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
 
 export const post = (url, data) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'POST',
          credentials: "include",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
 
    })
  }


