import * as Yup from 'yup';

export const rule = {
    email : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    username: /^[A-Za-z0-9가-힣\-_$]{2,12}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/,
    name:/^[가-힣]{2,10}$/,
    phone:  /^[0-9]{8-12}$/,
    // authentication: String, //'Y' || 'N'
    // thumbnail:  String,
    // birth: Date,
    // deleted: String, //'Y' || 'N'
    // owns:  Array,
    // managements:  Array,
    // togethers:  Array,
    // message : String,
}

export const message = {
    'required' : "필수입력항목 입니다",
    'email' : '이메일 형식이 아닙니다',
    'username': '한글,영문,숫자 조합 2~12자를 입력하세요',
    'password': '특수문자,숫자,알파벳을 포함한 8~16자를 입력하세요',
    'passwordConf': '패스워드가 동일하지 않습니다',
    'name': '2글자이상 실명을 입력하세요',
}

const { email, password, passwordConf } = {
    email: Yup.string().email(message.email).required(message.required),
    password: Yup.string().matches(rule.password, message.password).required(message.required),
    passwordConf: Yup.string().oneOf([Yup.ref('password'), null], message.passwordConf).required(message.required)
}

export const loginSchema = Yup.object().shape({
    email, password
})

export const joinSchema = Yup.object().shape({
    email, password, passwordConf,
})

export const passwordSchema = Yup.object().shape({
    password
})
