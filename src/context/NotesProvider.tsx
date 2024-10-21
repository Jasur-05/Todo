import {createContext, ReactNode, useEffect, useState} from 'react'
import words from '../assets/lang';
import { INotesContenxt, ITodo } from '../types';
import { LangType } from '../assets/lang-types';
export const NotesContext = createContext<INotesContenxt>({} as INotesContenxt);

interface INotesProviderProps {
  children: ReactNode
}

const NotesProvider = ({children}: INotesProviderProps) => {
    const [notes, setNotes] = useState<ITodo[]>([
        {
          id: 1,
          title: 'Vue',
          date: '07.03.2022',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
          id: 2,
          title: 'React',
          date: '07.03.2022',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
          id: 3,
          title: 'JavaScript',
          date: '07.03.2022',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
      ]);
    const [modal, setModal] = useState(true);
    const [currentId, setCurrentId] = useState(0);
    const [info, setInfo] = useState<ITodo | null>(null);
    const [search, setSearch] = useState('');
    const [lang, setLang] = useState<LangType>(LangType.ru)

    useEffect(()=>{
      let localNotes = localStorage.getItem('notes')
      if (localNotes) {
        let b = localNotes = JSON.parse(localNotes)
        setNotes(b);        
      }
      let localLang = localStorage.getItem('lang');
      if (localLang) {
        let b = localLang as LangType
        setLang(b)
      }
    }, [])

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes))
        let last = notes.length - 1;
        const id = last >= 0 ? notes[last].id : 0;
        setCurrentId(id);
    }, [notes])

    useEffect(()=>{
      localStorage.setItem('lang', lang)
    }, [lang])

    const addNote = (item:ITodo)=>{
      setNotes([...notes, item])
      setCurrentId(item.id)
    }

    const delNote = (id: number)=>{
      var newNotes = notes.filter( (elem) => elem.id != id )
      setNotes(newNotes)
    }

    const editNote = (id:number)=>{
      let note = notes.find((elem)=> elem.id == id);
      if (note) {
        setInfo(note);
      }
      setModal(false);
    }

    const changeNote = (item : ITodo)=>{
      var newNotes = notes.map((elem)=>{
          if(elem.id == item.id) {
            elem.date = item.date;
            elem.desc = item.desc;
            elem.title = item.title;
          }
          return elem
      })
      setNotes(newNotes);
      setInfo(null);
    }

    const cancelModal = ()=>{
      setInfo(null);
      setModal(true);
    }
  return (
    <NotesContext.Provider value={ 
      { notes, 
        modal, setModal, 
        currentId, 
        addNote, delNote, editNote, info, changeNote, cancelModal,
        search, setSearch, 
        words, lang, setLang
      } 
      }>
        {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider