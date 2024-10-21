import{ FC, ReactNode, useEffect, useRef } from 'react'

interface ITransitionProps {
  children: ReactNode, 
  className: string,
  show: boolean,
  onClick?: ()=>void
}

const Transition: FC<ITransitionProps> = (props) => {
  const { children, className, show, onClick } = props;
  const div = useRef<HTMLDivElement>({} as HTMLDivElement);
  useEffect(()=>{
    if (div.current && show) {
        div.current.style.display = 'none';
    } 
  }, [])
  useEffect(()=>{
    if (div.current && show) {
      div.current.classList.add(`${className}_hide`);
      setTimeout(() => {
        div.current.style.display = 'none';
      }, 500);
    } 
    else if(div.current && !show) {
      div.current.removeAttribute('style');
      setTimeout(() => {
        div.current.classList.remove(`${className}_hide`)        
      }, 100);
    }
  })
  
  return (
    <div ref={div} className={className} onMouseDown={onClick}>
      {children}
    </div>
  )
}

export default Transition