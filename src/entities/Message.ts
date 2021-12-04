import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuid } from 'uuid'
import { User } from "./User"

@Entity('messages')
class Message {

  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @JoinColumn({name: 'user_id'}) // adicionar uma relação entre a coluna "user_id"
  @ManyToOne(() => User) // diz que essa relação é de many<entity atual> to One<entity passada> ou seja muitas mensagens para um usuário
  user: User

  @Column()
  user_id: string

  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Message }