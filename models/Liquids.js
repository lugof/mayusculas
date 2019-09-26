module.exports = function(sequelize, DataTypes) {
  var nicLevels = [0,3,6,9];
  const Liquids = sequelize.define("Liquids", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV1,
      isUnique:true,
      autoIncrement:true
  },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1,140]
      }
    },
    cantidadMl: {
      type: DataTypes.INTEGER,
      defaultValue: false
    },
    nivelNicotina:{
      type: DataTypes.INTEGER,
      validate:{
        inclusion:{
          nicLevels
        }
      }
    },
    isNational:{
      type:DataTypes.BOOLEAN,
    },
    precio:{
      type:DataTypes.DECIMAL(10,2)
    },
    cantidad:{
      type: DataTypes.BIGINT
    },
    createdAt:{
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt:{
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    imageLink:{
      type: DataTypes.STRING
    }



  });

  
  return Liquids;
};
