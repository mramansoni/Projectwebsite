import React from 'react'

export default function form() {
    let FormStyle = {
        padding: "23px"
    }
    return (
        <div className="FormDetail" style={FormStyle}>
            <form>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Enter Full Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="help"/>
                        <div id="Help" className="form-text">Please fill your detail here.</div>
  </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail" className="form-label">Email Address</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check Me Out</label>
  </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
</form>
                    </div>
                    )
}
