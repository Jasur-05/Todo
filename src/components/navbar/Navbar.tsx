import { ChangeEvent, useContext, useState } from 'react'
import { backImg, closeImg, searchImg } from '../../assets/image'
import './navbar.css'
import Transition from '../ui/Transition'
import { NotesContext } from '../../context/NotesProvider'
import { LangType } from '../../assets/lang-types'

const Navbar = () => {
    const {search, setSearch, words, lang, setLang} = useContext(NotesContext)
    const [hide, setHide] = useState(false);
    
    const changeHide = ()=>{
        setHide(!hide);
        setSearch('')
    }
    const changeSearch = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearch(e.target.value);
    }

  return (
    <header className='header'>
        <Transition className="header__content" show={hide} >
            {   lang == 'ru' ?
                <button className='header__lang' onClick={()=>{setLang(LangType.uz)}}>uz</button> :
                <button className='header__lang' onClick={()=>{setLang(LangType.ru)}}>ru</button>
            }
            <h1 className='header__title'>
                {words.appbartitle[lang]}
            </h1>
            <button className='header__search' onClick={changeHide}>
                <img src={searchImg} alt="" />
            </button>
        </Transition>
        <Transition className="header__form" show={!hide}>
            <button className='header__back' onClick={changeHide}>
                <img src={backImg} alt="" />
            </button>
            <input 
                type="text" 
                className='header__input container' 
                placeholder={words.appbarseacrch[lang]}
                onChange={changeSearch}
                value={search}
            />
            <button className='header__clear' onClick={()=>{setSearch('')}}>
                <img src={closeImg} alt="" />
            </button>
        </Transition>
    </header>
  )
}

export default Navbar