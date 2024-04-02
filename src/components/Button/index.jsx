import './index.scss'

export default function Button(props){
    return <div className='col-12'> 
        <button>
            {props.title}
        </button>
    </div>
}