import { LuAlarmCheck, LuBarChart4, LuBuilding2, LuGem, LuLeaf } from "react-icons/lu";
import { RiRobot2Fill } from "react-icons/ri";
import { CardComponent } from "../CardComponent";



export const ContentComponent = () => {
    return (
        <div className="bg-[#edf6f5] py-8 mx-auto flex flex-col justify-center items-center">
            <div className="flex justify-center py-8">
                <p className="text-2xl font-semibold">
                    Construindo um futuro sustentável através da tecnologia
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-8">
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Análises" icon={LuBarChart4}/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Suporte 24h" icon={LuAlarmCheck}/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Inovação" icon={RiRobot2Fill}/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Clientes" icon={LuBuilding2}/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Prêmios" icon={LuGem}/>
                <CardComponent content="Impulsionando construindo um futuro sustentável Tecnologia" title="Sustentável" icon={LuLeaf}/>
            </div>
        </div>
    )
}