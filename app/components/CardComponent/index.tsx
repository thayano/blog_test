import { IconType } from 'react-icons'
interface CardContentProps {
    title : string,
    content : string,
    icon : IconType,  
}

export const CardComponent : React.FC<CardContentProps> = ({title, content, icon: IconComponent}) => {
    return (
        <div className="bg-white w-72 rounded-xl text-center flex flex-col justify-center items-center gap-2 px-8 py-8">
            <IconComponent color='#343242' size={20} />
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='text-[#777777]'>{content}</div>
        </div>
    )
}