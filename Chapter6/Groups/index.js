class Group {
    constructor(){
        this.set = [];
    }

    add(value) {
        if(this.set.indexOf(value) > -1){
            return;
        }
        this.set.push(value);
    }

    delete(value) {
        this.set = this.set.filter((x) => x !== value);
    }

    has(value) {
        return this.set.includes(value)
    }
    static from(obj) {
        const newGroup = new Group();
        obj.forEach(element => {
           newGroup.add(element); 
        });
        return newGroup;
    } 
}

module.exports = Group;