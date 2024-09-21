import Image from "next/image"
import product from "../../../public/cta.svg"

export const ProductsComponent = ({ position, color = '#fff' }) => {
    const image = () => (
        <div className="mt-8">
            <Image src={product} alt="test" />
        </div>
    )
    const text = () => (
        <div className="flex justify-center py-8 w-1/3 flex-wrap">
            <p className="text-4xl font-semibold">
                Impulsionando construindo um futuro sustentável Tecnologia
            </p>
            <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consecttur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
        </div>)
    return (
        <div className={`py-16 flex justify-center items-center gap-8 bg-[${color}]`}>
            {position === 'left' && (
                <>
                    {image()}
                    {text()}
                </>
            )}
            {position === 'right' && (
                <>
                    {text()}
                    {image()}
                </>
            )}
        </div>
    )
}