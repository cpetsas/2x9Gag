const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Posts extends Sequelize.Model {}
    Posts.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'Pending approval'
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image_name: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: true
        },
        tags: {
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'posts'});
    return Posts
}