import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mariadb',
  host: '94.73.146.42',
  port: 3306,
  username: 'u1301608_osman',
  password: 'UXUIKJDs{J}8',
  database: 'u1301608_forum',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
