
export async function isLoggedIntoReddit(){
    return doNetworkTransfer( `/slim/reddit/status` )
    .then( result => { return result } )
    .catch( err => console.log( err ) )
}

export async function performRedditInitalAuth(){
    return doNetworkTransfer( `/slim/reddit/get_redirect` )
    .then( result => { return result } )
    .catch( err => console.log( err ) )
}

export async function testRedditAuth(){
    return doNetworkTransfer( '/slim/reddit/test' )
    .then( result => { return result } )
    .catch( err => console.log( err ) )
}

let doNetworkTransfer = async ( address, method = 'GET', log = false ) => {
    return new Promise( (resolve, reject ) =>  {
        fetch( `https://slimmitapi:23446${address}`, { method: method } ).then( async ( result ) => {
            let body = await result.json()
            if ( log )
                console.log( body )

            resolve( body.value )
        }) 
        .catch( err => reject( err ) )
    })
}