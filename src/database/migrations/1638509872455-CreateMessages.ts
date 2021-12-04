import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1638509872455 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'messages',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'admin_id',
                        type: 'uuid',
                        isNullable: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'text',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKuser', // nome cutomizado da foreign key
                        referencedTableName: 'users', // nome da tabela dona da chave
                        referencedColumnNames: ['id'], // nome da coluna que tem as chaves
                        columnNames: ['user_id'], // nome da minha coluna que irá receber a chave estrangeira
                        onDelete: 'SET NULL', // se for um dado crítico, sensível que não pode ser removido da tabela, setamos como CASCADING
                        onUpdate: 'SET NULL' // mesma coisa do onDelete, a menos que não queira que o dado seja alterado por algum motivo bizarro
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('messages')
    }

}
