const Mutations = {
    //args = 입력
    createDog(parent,args,ctx,info){
    global.dogs = global.dogs || [];
    //or empty array
    const newDog = {name: args.name};
    console.log(args);
    global.dogs.push(newDog);
    return newDog;
    }
};

module.exports = Mutations;