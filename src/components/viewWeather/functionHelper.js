import moment from "moment"

export const ativeViewWeather = (time, valueTab) => {
    const timeconvert = new Date(moment.unix(time))
    const currentTime = new Date()
    const hour = timeconvert.getHours()
    const date = timeconvert.getDate()
    if (valueTab === 1) {
        if (hour === currentTime.getHours() && date === currentTime.getDate()) {
            return true
        } else {
            return false
        }
    } else if (valueTab === 2) {
        if (date === currentTime.getDate()) {
            return true
        } else {
            return false
        }
    }
}
