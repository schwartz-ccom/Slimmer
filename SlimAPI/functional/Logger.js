import { INFO } from './Types.js'

let messageCounter = 0


export function log( message, category = INFO, ) {
    if ( message instanceof Object ) {
        console.log( message )
    }
    else {
        console.log( `[${ messageCounter++ } ${category.description}] - ${ message }`)
    }
}