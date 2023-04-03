const React = require('react')
const Def = require('../default')

function index (data) {
    let photoPostion = data.photos.map((photo) => {
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
    return (
        <Def>
            <main>
                <h1>Photos for You to Edit</h1>
                <div className='row'>
                    {photoPostion}
                </div>
            </main>
        </Def>
    )
}

module.exports = index