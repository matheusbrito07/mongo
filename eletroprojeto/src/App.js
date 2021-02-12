//import Header from "./components/header/header"
//import Body from "./components/body/body"
import Epiclogo from "./components/img/epiclogo.png"
import {Switch, Route} from "react-router-dom"
import {lazy, Suspense} from "react"
import Home from "./components/pages/home"
import Produtos from "./components/pages/produtos"
import Contatos from "./components/pages/contatos"

//mudança pra splitting
const Body = lazy(()=>import ("./components/body/body"))
const Header = lazy(()=> import ("./components/header/header"))
const Footer = lazy(()=> import ("./components/footer/footer"))
//fim 








function App() {
  return (
    <>
      <Suspense fallback={<p>carregando...</p>}>
        <Header titulo="Home" imagem={Epiclogo} />
      </Suspense>
      <Suspense fallback={<p>carregando...</p>}>
      <Body>
         <Switch>
            <Route path="/home" component={Home} />
            <Route path="/produtos" component={Produtos} />
            <Route path="/contatos" component={Contatos} />
          </Switch>
        
      </Body>
      </Suspense>
        <Suspense fallback={<p>carregando...</p>}>
         <Footer />
        </Suspense>
    </>
  );
}

export default App;
