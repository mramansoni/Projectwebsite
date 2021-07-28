import React from 'react'

export default function Footer() {
    let footerstyle = {
        position: "relative",
        top: "70vh",
        width: "100%",
        // border: "2px solid red"
    }


    return (
        <footer className="bg-dark text-light" >
            <p className="text-center">
                copyright &copy; Project.com

            </p>

        </footer>
    )
}
