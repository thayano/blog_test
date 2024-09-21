interface CardContentProps {
    title : string,
    content : string,
    icon : string,  
}
import { FaBeer } from 'react-icons/fa'

export const CardComponent : React.FC<CardContentProps> = ({title, content, icon}) => {
    return (
        <div className="bg-white w-72 rounded-xl text-center flex flex-col justify-center items-center gap-2 px-8 py-8">
            <FaBeer color='#343242' size={20}/>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='text-[#777777]'>{content}</div>
        </div>
    )
}