import React from 'react'
import AbotUsSquare from './AbotUsSquare'
import TreasurySquare from './BotTreasurySquare'
import CustomRequestSquare from './CustomRequestSquare'

export default function Home() {
    return (
        <div class="row">
            <div class="col-6 treasury">
                <TreasurySquare />
            </div>
            <div class="col-6">
                <div class="row">
                    <AbotUsSquare />
                </div>
                <div class="row">
                    <CustomRequestSquare />
                </div>
            </div>
        </div>
    )
}
