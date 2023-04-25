import { ref } from "vue";
import axios, { AxiosHeaders } from "axios";


const filters = {
    formatDate(date) {
        let newDate = date.toString();
        let year = newDate.slice(0, 4);
        let month = newDate.slice(4, 6);
        let day = newDate.slice(6, 8);
        // xử lý gì đó để hiển thị ra
        return day + '/' + month + '/' + year
    }
}
// export {
//     formatDate
// }
export default filters
