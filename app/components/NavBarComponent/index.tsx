import { ButtonComponent } from "../ButtonComponent";

type MenuOptions = Array<{ title: string, href: string }>;

export const NavBarComponent = () => {
  const menu: MenuOptions = [
    { title: 'Home', href: '#/home' },
    { title: 'Sobre', href: '#/about' },
    { title: 'Blog', href: '#/blog' },
    { title: 'Contato', href: '#/contact' }
  ]
  return (
    <main className="w-full px-16 py-4 flex items-center justify-between">
      <div className="flex items-center w-10">
        {/* <img className="w-10 h-10" src="/logo.png" alt="Nastek" /> */}
        <span className="ml-4 text-lg font-bold">Nastek</span>
      </div>
      <div className="flex items-center gap-16">
        {menu.map((item) => (
          <ButtonComponent key='' title={item.title} href={item.href}></ButtonComponent>
        ))}
      </div>
     
      <div className="">
        <button className="w-full bg-[#0AA8A7] py-2 px-4 rounded-full font-semibold text-white">Get Started</button>
      </div>
    </main>
  )
}
