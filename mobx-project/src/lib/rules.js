export const match = {
    'email' : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    'username': /^[A-Za-z0-9가-힣\-_$]{2,12}$/,
    'password': /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/,
    'name':/^[가-힣]{2,10}$/,
}

export const message = {
    'required' : "필수입력항목 입니다",
    'regex.email' : '이메일 제대로 써라 좀',
    'regex.username': '한글,영문,숫자 조합 2~12자를 입력하세요',
    'regex.password': '특수문자,숫자,알파벳을 포함한 8~16자를 입력하세요',
    'same.passwordConfirm' : '비밀번호가 서로 다릅니다.',
    'name':'실명',
}

export const rules = {
    accountRules : {
        'email': ['required', `regex:${match.email}`],
        'username': ['required', `regex:${match.username}`],
        'password': ['required', `regex:${match.password}`],
        'passwordConfirm':  ['required', `same:password`],
        'birth' : ['date'],
        'thumbnail' : ['string'],
        'name' : [`regex:${match.name}`], 
        'phone' : ['numeric'], 
        'message' : ['max:20'],
    },
}

