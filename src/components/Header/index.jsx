import { Container, Profile } from './styles'
import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <Profile>
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título"/>

        <div>
          <strong><span>Lucas Alves</span></strong>
          <span>sair</span>
        </div>
        
          <img src="https://github.com/lcsalvs.png" alt="Foto de usuario" />

      </Profile>
    </Container>
  )
}