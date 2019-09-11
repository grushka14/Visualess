const yaml = require('js-yaml');
const fs = require('fs');

//reading yml file and writing it into json.
const parser = (path: string) => {
    try {
        var doc = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
        console.log(doc);
      } catch (e) {
        console.log(e);
        return e
      }
    return doc
}

export default parser