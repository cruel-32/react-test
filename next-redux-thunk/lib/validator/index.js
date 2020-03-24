const Joi = require('@hapi/joi').extend(require('@hapi/joi-date'))
const defaultScheme = {
    "type" : "string",
    "required" : false,
}
const defaultDateFormat = 'YYYY-MM-DD'
// const defaultDateTimeFormat = 'YYYY-MM-DD HHmmss'

export const createPropValidator = (propScheme) => {
    let validator = Joi;
    const Schema = {
        ...defaultScheme,
        ...propScheme,
    }
    
    Object.keys(Schema).forEach(scheme=> {
        const value = Schema[scheme]
        if(scheme == 'type'){
            if(value == 'date'){
                validator = validator.date().format(Schema['format'] || defaultDateFormat).utc()
            } else {
                validator = validator[value]()
            }
        } else if(scheme == 'required'){
            if(value !== false){
                validator = validator.required()
            } else {
                validator = validator.allow('').allow(null)
            }
        } else if(scheme == 'children'){
            if(typeof value === 'object'){
                if(Object.keys(value).includes('type')){
                    validator = validator.items(createPropValidator(value))
                } else {
                    validator = validator.items(createValidator(value))
                }
            }
        } else if(scheme == 'props'){
            validator = createValidator(value)
            if(typeof value === 'object'){
                if(Object.keys(value).includes('type')){
                    validator = createPropValidator(value)
                } else {
                    validator = createValidator(value)
                }
            }
        } else if(scheme == 'ref'){
            validator = validator.valid(Joi.ref(value))
        } else {
            validator = typeof validator[scheme] == 'function' ?
                    validator[scheme](value)
                :
                    validator
        }
    })
    return validator
}

//validator 생성
export const createValidator = SchemeObj => {
    const schemeSet = {}

    Object.keys(SchemeObj).forEach(propScheme=>{
        schemeSet[propScheme] = createPropValidator(SchemeObj[propScheme])
    })

    return Joi.object(schemeSet)
}
