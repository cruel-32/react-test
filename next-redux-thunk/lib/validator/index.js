const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'))
const defaultScheme = {
    "type" : "string",
    "required" : false,
}

const setValidatorProp = (scheme, value, validator=Joi) => {
    if(scheme == 'type'){
        return validator[value]()
    } else if(scheme == 'required'){
        if(value !== false){
            return validator.required()
        } else {
            return validator.allow('')
        }
    } else {
        return typeof validator[scheme] == 'function' ? validator[scheme](value) : validator
    }
}

//property 1개를 검증
export const getPropValidator = propScheme => {
    const Schema = Object.assign({}, defaultScheme, propScheme)
    let validator;
    Object.keys(Schema).forEach(scheme=> validator = setValidatorProp(scheme, Schema[scheme], validator))
    return validator
}

//object 검증
export const getObjectValidator = SchemeObj => {
    const schemeSet = {}

    Object.keys(SchemeObj).forEach(propScheme=>{
        let validator;
        Object.keys(Schema).forEach(scheme=> validator = setValidatorProp(scheme, Schema[scheme], validator))
        schemeSet[propScheme] = validator
    })

    return Joi.object(schemeSet)
}
