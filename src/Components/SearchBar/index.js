import './style.css'

export default function SearchBar (props){
    return(
        <div className='searchbar'>
            <input 
                placeholder='O que você está procurando?'
                // onChange={(ev)=> props.this.setState({search: ev.target.value})}
                // value={props.this.state.search}
            />
            {/* <button onClick={props.this.FilterPosts}> */}

            <select>
                <option>Todos</option>
                <option>Dieta</option>
                <option>Emagrecimento</option>
            </select>

            <button>
                <i className='fa fa-search'></i>
            </button>
      </div>
    );
}