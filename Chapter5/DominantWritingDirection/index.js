const scripts = require('./scripts');
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  function countBy(items, groupInfo) {
    let counts = [];
    for (let item of items) {
      let info = groupInfo(item);
      let known = counts.findIndex(c => c.name == info.name);
      if (known == -1) {
        counts.push({...info, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

const dominantDirection = (text) => {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? {name: script.name, direction: script.direction }: {name: "none"};
    }).filter(({name}) => name != "none");
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    const {
        direction: writingDirection,
    } =scripts.reduce((accum, {name, count, direction}) => {
        
        if(count > accum.count) return {count, direction}
        return accum
    }, { count: 0 });
    return writingDirection;
  }

module.exports = dominantDirection;