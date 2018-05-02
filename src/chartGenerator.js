const NUMBER_OF_POINTS = 100

const randomNum = (i) => Math.floor(Math.random() * 20 + Math.log2(i * (i/100))) * (Math.random() < .03 ? 4 : 1)

const generateChart = () => Array.apply(null, {length: NUMBER_OF_POINTS}).map( (el, i) => randomNum(i+1))

const GenerateCharts = () => {
  let final = {"key": '1D', "data": {}}
  let keys = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

  keys.map( key => {
    let data = generateChart()
    final.data[key] = {
      "prices": data,
      "high": [{x: 0, y: Math.max(...data)},{x: NUMBER_OF_POINTS, y: Math.max(...data)}],
      "low": [{x: 0, y: Math.min(...data)},{x: NUMBER_OF_POINTS, y: Math.min(...data)}],
      "closing": [{x: 0, y: data[data.length - 1]},{x: NUMBER_OF_POINTS, y: data[data.length - 1]}]
    }
  })
  return final
}


export default GenerateCharts