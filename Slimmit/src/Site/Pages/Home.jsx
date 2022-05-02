import { Button, Container } from '@mui/material'
import { testRedditAuth } from '../../Network/APICaller'
import React from 'react'

export default function Home() {
    return (
        <Container>
            <Button variant="contained" onClick={testRedditAuth}>Hello!</Button>
            <Button variant="contained" color="secondary">Hello!</Button>
        </Container>
    )
}