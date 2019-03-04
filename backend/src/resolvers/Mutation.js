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
    },
    updateItem(parent,args,ctx,info){
    // take a copy of updates (args===input)
    const updates = {...args}; //copies everything first
    // fucking murder the id (cause we dont want to change the id)
    delete updates.id; 
    //updateItem method
    return ctx.db.mutation.updateItem({
        data: updates,
        where: {
            id:args.id,
        }
      },
      info
    );
  },
};

module.exports = Mutations;