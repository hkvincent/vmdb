import React from 'react'

export default function Footer() {
    return (
        <footer className="text-center pb-3 mt-5">
            <p className="text-sm text-gray-500">&copy; VMDB {new Date().getFullYear()} - Vincent</p>
        </footer>
    )
}
