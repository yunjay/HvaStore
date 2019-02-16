const {forwardTo} = require('prisma-binding');

// 4 vars : parent, args(arguments) , ctx(context of request ex) cookies) ,info 
const Query = {
    items: forwardTo('db'), //uses prisma binding to forward data  `
    
    // async items(parent,args,ctx,info){
    //     //return ctx.db.query.items();``
    //     const items = await ctx.db.Query.items();
    //     return items;
    // },
};

module.exports = Query;
``