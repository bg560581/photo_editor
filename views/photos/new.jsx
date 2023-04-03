const React = require('react')
const Def = require('../default')

function newPhoto (data) {
    let message = ''
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>
            <h1>Add a Photo to Your Database</h1>
            {message}
            <form method="POST" action="/photos">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="name">Photo Name</label>
                  <input id="name" name="name" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="image">Photo</label>
                  <input className="form-control" id="image" name="image" />
                </div>
              </div>
              <input className="btn btn-primary" type="submit" value="Add Photo" />
            </form>
          </main>
        </Def>
    )
}

module.exports = newPhoto