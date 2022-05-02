export let INFO = Symbol( "Info" )
export let WARNING = Symbol( "Warning" )
export let ERROR = Symbol( "Error" )

export function resObj( value, message = "GOOD" ) {
    return { message: message, value: value }
}