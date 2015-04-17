module.exports = {
	up: function (migration, DataTypes, done) {
		
		// console.log(DataTypes);
		// return;
		
		migration.createTable('organizations', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		
		migration.createTable('schools', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		
		migration.createTable('chapters', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			join_organizations_id: {
				type: DataTypes.INTEGER,
				references: 'organizations',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			join_schools_id: {
				type: DataTypes.INTEGER,
				references: 'schools',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			join_users_id_president: {
				type: DataTypes.INTEGER,
				references: 'users',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		migration.addIndex('chapters', ['join_organizations_id']);
		migration.addIndex('chapters', ['join_schools_id']);
		migration.addIndex('chapters', ['join_users_id_president']);
		
		migration.createTable('councils', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		
		migration.createTable('councils_x_chapters', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			join_councils_id: {
				type: DataTypes.INTEGER,
				references: 'councils',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			join_chapters_id: {
				type: DataTypes.INTEGER,
				references: 'chapters',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			name: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		migration.addIndex('councils_x_chapters', ['join_councils_id']);
		migration.addIndex('councils_x_chapters', ['join_chapters_id']);
		
		migration.createTable('users', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			join_chapters_id: {
				type: DataTypes.INTEGER,
				references: 'chapters',
				referencesKey: 'id',
				onUpdate: 'CASCADE',
				onDelete: 'RESTRICT'
			},
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			password_salt: DataTypes.STRING,
			firstname: DataTypes.STRING,
			lastname: DataTypes.STRING,
			created: {
				type: DataTypes.DATE
			},
			updated: {
				type: DataTypes.DATE
			}
		}, {
			engine: 'InnoDB',
			charset: 'utf8mb4'
		});
		migration.addIndex('users', ['join_chapters_id']);
		
		done();
	},
	down: function (migration, DataTypes, done) {
		// add reverting commands here, calling 'done' when finished
		done();
	}
}