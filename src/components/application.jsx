import React from 'react'
import { AppHeader, AppMain } from '../organism'

const App = () => {
    document.title = "iwoca | Application Portal"

    return (
        <>
            <AppHeader />
            <AppMain />
        </>
    );
}

export default App;