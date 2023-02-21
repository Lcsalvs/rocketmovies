import { FiPlus } from 'react-icons/fi'

import { Container, Content, NewMovies } from "./styles"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Movie } from "../../components/Movie"

export function Home() {
  return (
    <Container>
      <Header />

      <main>

        <Content>
          <Section title="Meus filmes">
            <Movie data = {
              {
                title: 'Interestellar',
                description: 'Lalalala',
                tags: [
                  {id: "1", name: 'Ficção Científica'},
                  {id: "2", name: 'Drama'},
                  {id: "3", name: 'Família'}
                ]
              }
            }
            />
          </Section>

          <NewMovies>
            <FiPlus />
            Adicionar filme
          </NewMovies>

        </Content>

      </main>

    </Container>
  )
}