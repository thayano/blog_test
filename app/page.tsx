import { ContentComponent } from "./components/ContentComponent";
import { FooterComponent } from "./components/FooterComponent";
import { HeroComponent } from "./components/HeroComponent";
import { NavBarComponent } from "./components/NavBarComponent";
import { ProductsComponent } from "./components/ProductsComponent";

export default function Home() {
  return (
    <>
      <header className="mx-auto max-w-7xl">
        <NavBarComponent></NavBarComponent>
      </header>
      <main className="flex justify-center flex-col">
        <section>
          <HeroComponent />
        </section>
        <section>
          <ContentComponent/> 
        </section>
        <section>
          <ProductsComponent position="left"/> 
        </section>
        <section>
          <ProductsComponent position="right" color="#edf6f5"/> 
        </section>        
      </main>
      <FooterComponent/>
    </>
  );
}
