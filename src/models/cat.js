module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastfed: DataTypes.DATE,
        
    }
return sequelize.define('Cat', schema)
}