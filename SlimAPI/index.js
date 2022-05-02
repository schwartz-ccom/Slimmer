import express from 'express'
import config from 'config'
import cors from 'cors'
import https from 'https'
import fs from 'fs'
import snoowrap from 'snoowrap'

import { log } from './functional/Logger.js'
import { resObj } from './functional/Types.js'

let reddit = new snoowrap({
    clientId: config.api.client.id,
    clientSecret: config.api.client.secret,
    refreshToken: "",
    userAgent: config.api.identity
})

let app = express()
app.use( cors() )
app.use( express.json() )

app.get( "/", ( req, res ) => {
    res.json( resObj( "Hi!" ) )
})

app.get( "/slim/reddit/auth", ( req, res ) => {
    log( "Reddit has authed!" )
    log( "Setting client's auth code to the code" )
    reddit.refreshToken = req.code
    
    res.redirect( "https://localhost/setupEnv/" )
})

app.get( "/slim/reddit/test", ( req, res ) => {
    log( "Testing reddit object..." )
    
    reddit.getHot().map( posts => posts.title )
        .then( () => res.json( resObj( true ) ) )
        .catch( err => res.json( resObj( false ) ) )
})

app.get( "/slim/reddit/isAuthed", ( req, res ) => {
    log( "Are we authed?" )
    log( reddit.refreshToken !== "" )

    res.json( resObj( reddit.refreshToken !== "" ) )
})

app.get( "/slim/reddit/status", ( req, res ) => {
    log( "Checking with reddit to see if authenticated" )
    res.json( resObj( false ) )
})

app.get( "/slim/reddit/get_redirect", ( req, res ) => {
    log( "Returning reddit redirect link" )

    res.json( resObj( snoowrap.getAuthUrl({
        clientId: config.api.client.id,
        state: "init_auth",
        scope: [ "read", "save", "submit", "vote", "subscribe", "wikiedit", "wikiread", "identity", "edit", "flair", "history", "mysubreddits", "privatemessages", "report" ],
        redirectUri: config.api.redirect_url
    })))
})

app.get( "/slim/reddit/start_auth", ( req, res ) => {
    log( "Trying for user token..." )

    res.json( resObj( false ))
})

log( "Starting SlimAPI..." )
let creds = {
    key: fs.readFileSync( 'C:\\Certs\\server.key' ),
    cert: fs.readFileSync( 'C:\\Certs\\server.crt' ),
}

let httpsServer = https.createServer( creds, app )
httpsServer.listen( 23446, () => {
    log( "Secured SlimAPI started on 23446" )
} )