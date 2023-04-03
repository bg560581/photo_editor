const React = require('react')
const Def = require('./default')

function home(html){
    return (
        <Def>
            <main>
                <h1>Photo editor</h1>
                <div>
                    
                </div>
            {html.children}
            </main>
        </Def>
    )
}

module.exports = home
