export function timeToString (time = Date.now()) {
    const date = new Date(time)
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
  }



// CODE OF USER BROOFA FROM STACKOVERFLOW TO GENERATE UID (https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16 | 0), v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
}


export function formatDecksInfo(results) {
    console.log(results)
    result = {}
    return 'bla'
}


