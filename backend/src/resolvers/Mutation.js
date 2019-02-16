const Mutations = {
    //args = 입력
    async createItem(parent,args,ctx,info){

        const item = await ctx.db.mutation.createItem({
            data:{
                ...args //input data. (title: args.title etc.)
            } 
        }, info); //context.database
        console.log(item);
        return item; //비동기로 promise -> variable 저장
    }
};

module.exports = Mutations;