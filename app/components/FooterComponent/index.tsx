

export const FooterComponent = () => {
    return (
        <>
            <div className="bg-slate-950 w-full h-96 flex justify-center py-20">
                <div className="max-w-7xl grid grid-cols-4 text-zinc-400 gap-20">
                    <div>
                        <p className="text-2xl">Endereço</p>
                        <ul className="mt-8">
                            <li>Av. Eduardo Elias Zahran, 1120</li>
                            <li>Campo Grande - MS</li>
                            <li>Cep 79051-000</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-2xl">Suporte</p>
                        <ul className="mt-8">
                            <li>WhatsApp</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-2xl">Produtos</p>
                        <ul className="mt-8">
                            <li>Smary Owl</li>
                            <li>Control</li>
                        </ul>

                    </div>
                    <div>
                        <p className="text-2xl">Nastek</p>
                        <div className="mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus</div>
                    </div>
                </div>

            </div>
            <div className="bg-slate-950">
                Desenvolvido por @Thayano Davalo
            </div>
        </>
    )
}