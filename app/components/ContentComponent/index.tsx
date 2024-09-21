import { CardComponent } from "../CardComponent";


export const ContentComponent = () => {
    return (
        <div className="bg-[#edf6f5] py-8 mx-auto flex flex-col justify-center items-center">
            <div className="flex justify-center py-8">
                <p className="text-2xl font-semibold">
                    Impulsionando construindo um futuro sustentável Tecnologia
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-8">
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="tesrts" icon=''/>
            </div>
        </div>
    )
}