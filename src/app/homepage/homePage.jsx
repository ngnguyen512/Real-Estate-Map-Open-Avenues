'use client'
import './homePage.scss'
import SearchBar from '../../components/searchBar.client/SearchBar.client'
import Image from 'next/image';
import BigMap from '../../components/map/map';
import TaxAssessors from '../../components/AppoloClient/Appoloclient';
function HomePage(){
    return (
        <div className='homePage'>
            <div className='textContainer'>
                <div className='wrapper'>
                    <h1 className='title'>
                        Not Just a Home, It's Your Dream Come True
                    </h1>
                    <SearchBar />
                    <div className='boxes'>
                        <div className='box'>
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>200</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className='box'>
                            <h1>2000+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
                <BigMap/>
            </div>
            <div className='taxAssessors'>
                <TaxAssessors/>
            </div>

        </div>
    )
}

export default HomePage