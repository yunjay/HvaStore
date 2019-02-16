const Mutations = {
    //args = 입력
    createItem(parent,args,ctx,info){

        const item = ctx.db.mutation.createItem({
            data:{
                ...args //input data. (title: args.title etc.)
            } 
        }, info) //context.database
    }
};

module.exports = Mutations;