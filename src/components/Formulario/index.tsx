import React, { useState } from 'react'
import { ITarefa } from '../../types/tarefa'
import Botao from '../Botao'
import style from './Formulario.module.scss'

const Formulario = (
  setTarefas: React.Dispatch<
    React.SetStateAction<
      {
        tarefa: string
        tempo: string
      }[]
    >
  >
) => {
  const [estudo, setEstudo] = useState({
    tarefa: '',
    tempo: '00:00',
  })

  const addTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    console.log('state: ', estudo)
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={estudo.tarefa}
          onChange={(evento) => setEstudo({ ...estudo, tarefa: evento.target.value })}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={estudo.tempo}
          onChange={(evento) => setEstudo({ ...estudo, tempo: evento.target.value })}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit" texto="Adicionar" />
    </form>
  )
}

export default Formulario
