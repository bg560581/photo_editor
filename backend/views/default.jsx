const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Default</title>
            </head>
            <body>
                <div className='container'>
                    
                </div>
                    {html.children}
            </body>
        </html>
    )
} 

module.exports = Def