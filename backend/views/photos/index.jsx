const React = require('react')
const Def = require('../default')

function index (data) {
    let position = null
    if (data && data.photos) {data.photos.map((photo) => {
        return (
            <div>
                <h2>
                    <a href={`/photos/${photo.id}`}>
                        {photo.name}
                    </a>
                </h2>
                <img src={photo.image} alt={image.name} />
            </div>
        )
    })
}
    return (
        <Def>
            <main>
                <h1>Photos for You Edit</h1>
                <div className='row'>
                    {position}
                </div>
            </main>
        </Def>
    )
}

module.exports = index