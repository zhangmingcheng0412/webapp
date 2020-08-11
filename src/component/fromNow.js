import dayJs from "dayjs";
require("dayjs/locale/zh-cn");
let relativeTime =require("dayjs/plugin/relativeTime");
dayJs.locale("zh-cn");
dayJs.extend(relativeTime);

function FromNow(props) {
    let {nowData} =props
    return (
        dayJs(nowData).fromNow()
    );
}

export default FromNow;