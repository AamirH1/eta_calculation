function getETA() {
    let created_on = '07/01/2020 13:04:27';
    let resolutionTime = 9; //currently this logic is implemented for one Assignment Group.
   // sys_created_on = moment(sys_created_on, 'DD/MM/YYYY, h:mm:ss a').format('MM/DD/YYYY, h:mm:ss a');import
    let newEta = new Date(created_on).getTime() + resolutionTime * 60 * 60 * 1000;
    let day = new Date(created_on).getDay();
    let loginTime = new Date(`${new Date(created_on).toDateString()} 09:00:00`).getTime();
    let logoutTime = new Date(`${new Date(created_on).toDateString()} 17:00:00`).getTime();
    let remaining = newEta - logoutTime;
    let result = null;
    if (logoutTime > newEta) {
      result = new Date(newEta);
    } else if (day > 0 && day < 5) {
      result = new Date(loginTime + remaining + 86400000);
    } else if (day == 5) {
      result = new Date(loginTime + remaining + 259200000);
    } else if (day == 6) {
      result = new Date(loginTime + remaining + 172800000);
    } else if (day == 0) {
      result = new Date(loginTime + remaining + 86400000);
    }
    console.log('Eta result after cheking conditions.', result);
    return result;
  }
  getETA();
