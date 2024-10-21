import { ILang, LangType } from "./assets/lang-types"

export interface ITodo {
          id: number,
          title: string,
          date: string,
          desc: string        
}

export interface INotesContenxt {
      notes: ITodo[],
      modal: boolean,
      setModal: (param: boolean)=>void,
      currentId: number,
      addNote: (item:ITodo)=>void,
      delNote:(id: number)=>void
      editNote: (id: number)=>void
      info: ITodo | null
      changeNote:(item : ITodo)=>void
      cancelModal:()=>void
      search: string
      setSearch: (param:string)=>void
      words:ILang,
      lang: LangType,
      setLang: (param:LangType)=>void
}
