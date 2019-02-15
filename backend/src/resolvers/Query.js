// 4 vars : parent, args(arguments) , ctx(context of request ex) cookies) ,info 
const Query = {
    dogs(parent,args,ctx,info){
        global.dogs = global.dogs || [];
        return[{ name:'누렁'},{name:'똥똥'}];
    },
};

module.exports = Query;
