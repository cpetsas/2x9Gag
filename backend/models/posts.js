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
        }
    }, {
        sequelize,
        modelName: 'posts'});
    return Posts
}