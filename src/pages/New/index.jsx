import {FiArrowLeft} from 'react-icons/fi'

import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Textarea } from '../../components/Textarea';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>
            <h1>Novo Filme</h1>
          </header>

          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações"/>

          <div className="tags">
            <h3>Marcadores</h3>
          </div>

          <div className="buttons">
            <Button isActive={false} title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>

        </Form>
      </main>
    </Container>
  )
}