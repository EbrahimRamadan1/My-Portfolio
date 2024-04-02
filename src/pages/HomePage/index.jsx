import HomeRight from '../../components/HomeRight'
import Photo from '../../components/Photo'
import './index.scss'
export default function HomePage (){
    return <div className="homePage col-12">
        <Photo/>
        <HomeRight/>
    </div>
}