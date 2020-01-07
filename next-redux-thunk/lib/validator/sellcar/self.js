export default {
    "carNum" : {
        "type":"string",
        "required" : true,
        "pattern" : /[가-힣]*[0-9]+[가-힣]+[0-9]{4}/,
        "msg" : "올바른 차량 번호를 입력해주세요(예 12가1234)",
    },
    "testNum" : {
        "type":"number",
        "min" : 1,
        "max" : 99,
        "required" : true,
    }
}