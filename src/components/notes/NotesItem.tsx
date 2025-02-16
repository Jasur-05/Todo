import { FC, useContext } from 'react'
import { delImg, editImg } from '../../assets/image'
import { NotesContext } from '../../context/NotesProvider'
import { ITodo } from '../../types'

interface INotesItemProps {
    grid: boolean,
    note: ITodo,
} 

// const NotesItem = ({grid}) => {
const NotesItem: FC<INotesItemProps> = (p) => {
    const {grid, note } = p
    const { delNote, editNote, words, lang } = useContext(NotesContext)
  return (
    <div className='card'>
        <div className={ grid ? '' : "card__content"}>
            <h3 className="card__title">{note.title}</h3>
            <p className="card__date">{note.date} </p>
        </div>
        <p className="card__desc">{note.desc}</p>
        <div className="card__controls">
            <button className='btn' onClick={()=>{editNote(note.id)}}>
                <img src={editImg} alt="" />
                <span>{words.editbtn[lang]}</span>
            </button>
            <button className='btn btn_red' onClick={()=>{ delNote(note.id) }}>
                <img src={delImg} alt="" />
                <span>{words. deledit[lang]}</span>
            </button>
        </div>
    </div>
  )
}

export default NotesItem