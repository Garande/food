export const generateDbPathFromList = (listOfStrings, dateTimeMillis) => {

    let path = '';
    let timestamp = 0;
    if (dateTimeMillis == null)
        timestamp = new Date().getTime();
    else timestamp = dateTimeMillis;
    listOfStrings.forEach(id => {
        if (path === '')
            path = id;
        else path = path + '-' + id;
    })
    if (timestamp !== '')
        path = path + "-" + timestamp;
    return filterPath(path);
}

export const filterPath = (key) => {
    key = key.replace(" ", "-");
    key = key.replace("/", "-");
    key = key.replace("//", "-");
    key = key.replace("/", "-");
    key = key.replace("\\", "-");
    key = key.replace("_", "-");
    key = key.replace("--", "-");
    key = key.replace("- -", "-");
    key = key.replace(",,", ",");
    key = key.replace(".", "-");
    key = key.replace(".", "-");
    key = key.replace("[", "-");
    key = key.replace("]", "-");
    key = key.replace("{", "-");
    key = key.replace("}", "-");
    key = key.replace("(", "-");
    key = key.replace(")", "-");
    key = key.replace("$", "-");
    key = key.replace("&", "-");
    key = key.replace("'", "-");
    key = key.replace("\"", "-");
    key = key.replace("#", "-");
    key = key.replace("-null", "");
    key = key.replace("null-", "");
    key = key.replace("null_", "");
    key = key.replace("_null", "");
    key = key.replace("0x00", "-");
    key = key.replace("0x1F", "-");
    key = key.replace("0x7F", "-");
    if (key.length >= 768)
        key = key.substring(0,
            500); //768 is the max number of character a downloadPath can contain.
    return key;
}


export const generateChatId = (myId, peerId) => {
    if (hashCode(myId) > hashCode(peerId)) {
        return (myId + "-" + peerId);

    } else if (hashCode(peerId) > hashCode(myId)) {
        return (peerId + "-" + myId);
    }
}

export const hashCode = (s) => {
    let h;
    for (let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;

    return h;
}


export const getDataSize = (dataSize) => {
    let size = 0;
    let sizeString = ""
    if (dataSize < 1000) {
        sizeString = dataSize.toFixed(1) + " B"
    } else if (dataSize < 1000000 && dataSize >= 1000) {
        size = dataSize / 1000;
        sizeString = size.toFixed(1) + " KB";
    } else if (dataSize < 1000000000) {
        size = dataSize / 1000000;
        sizeString = size.toFixed(1) + " MB";
    } else if (dataSize >= 1000000000) {
        size = (dataSize / 1000).toFixed(1);
        sizeString = size.toFixed(1) + " GB";
    }

    return sizeString;
}


export const formatDateString = (timestamp) => {
    let dateObject = new Date(timestamp);
    let dateBefore = new Date((new Date().getTime() - (24 * 60 * 60 * 1000)));
    let today = new Date();


    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let [month, date, year] = dateObject.toLocaleDateString().split("/");

    let [todayMonth, todayDate, todayYear] = today.toLocaleDateString().split('/');

    let [dayBeforeMonth, dayBeforeDate, dayBeforeYear] = dateBefore.toLocaleDateString().split('/');

    let todayString = [todayDate, todayMonth, todayYear].join('-');
    let currentDateString = [date, month, year].join('-');
    let dateBeforeString = [dayBeforeDate, dayBeforeMonth, dayBeforeYear].join('-');

    if (todayString === currentDateString) {
        return 'Today';
    } else if (dateBeforeString === currentDateString) {
        return 'Yesterday';
    } else {
        let weekDay = dateObject.getDay();
        return `${days[weekDay]} ${date} ${months[month - 1]}, ${year}`
    }
}


export function removeCSSClass(ele, cls) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
}

export function addCSSClass(ele, cls) {
    ele.classList.add(cls);
}

export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
