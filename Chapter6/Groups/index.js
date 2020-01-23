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

    [Symbol.iterator]() {
        return new GroupIterator(this);
     }
}


class GroupIterator {
    constructor(group) {
       this.group = group; 
       this.index = 0;
    }

    next() {
        if(this.group.set.length <= this.index) return { done: true }
        const value = { value: this.group.set[this.index], done: false }
        this.index += 1;
        return value;
    }
}

module.exports = Group;