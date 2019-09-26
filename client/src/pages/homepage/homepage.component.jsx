import React from 'react'
import MenuItem from '../../components/menu-item/menu-item.component'
import DiscoverNew from '../../components/discover-new/discover-new.component'
import TrendingNow from '../../components/trending-now/trending-now.component'

function HomePage() {
    return (
        <div>
            <MenuItem />
            <DiscoverNew />
            <TrendingNow />
        </div>
    )
}

export default HomePage
