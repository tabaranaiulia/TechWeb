function addTokens(input, tokens) {
    if (typeof input!='string' && !(input instanceof String)){
        throw 'Invalid input';
    }
    if(input.length<6){
        throw "Input should have at least 6 characters"
    }

    const element=tokens.every((token)=>typeof token.tokenName==='string');
    if (!element){
        throw 'Invalid array format';
    }

    let i=0;
    while(input.includes("...")){
        input=input.replace("...","${"+tokens[i].tokenName+"}");
        i++;
    }
    return input;
}

const app = {
  addTokens: addTokens,
};

module.exports = app;
