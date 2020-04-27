import React, { Component } from 'react'
import Header from './header/header'
import Content from './content/content'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <Header children={<Content />} />

            </div>
        )
    }
}
