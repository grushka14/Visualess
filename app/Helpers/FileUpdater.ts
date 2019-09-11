const writeYamlFile = require('write-yaml-file')

//create a new sueverless.yml file in the place of the old one
const fileUpdater =  async(oldyml: any, field: any, newData: JSON, path: string) => {
    let newyml = {...oldyml}
    console.log(newyml)
    newyml[field] = newData
    console.log(newyml)
    writeYamlFile(path+'serverless.yml',  newyml).then(() => {
        console.log('done')
      })
}

export default fileUpdater