import React, { useState } from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst';
import { sunburstData } from '../utility';


function SunBurst() {
    const [data,setData] = useState(sunburstData);
    const [historyData,setHistoryData] = useState([sunburstData]);
    const flatten = data =>
    data.reduce((acc, item) => {
        if (item.children) {
            return [...acc, item, ...flatten(item.children)]
        }
        return [...acc, item]
    }, [])
    const clickHandler = () => {
        let dataArr = [...historyData];
        dataArr.pop();
        setHistoryData(dataArr);
        let length = dataArr.length;
        if(length > 0) setData(dataArr[length - 1]); else setData(sunburstData);
        
    }

    const findObject = (data, name) => data.find(searchedName => searchedName.name === name)
  return (
    <React.Fragment>
        {/* <button style={{ border:'none',backgroundColor:'black',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }} onClick={() => clickHandler()}>Reset</button> */}
        <div style={{ width:100,height:400 }}>
        <ResponsiveSunburst
                data={data}
                width={600}
                height={600}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                id="name"
                value="loc"
                cornerRadius={2}
                borderColor={{ theme: 'background' }}
                colors={{ scheme: 'nivo' }}
                childColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'brighter',
                            0.1
                        ]
                    ]
                }}
                enableArcLabels={true}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.4
                        ]
                    ]
                }}
                layers={['arcs','arcLabels', ({ centerX, centerY }) => (
                    <text
                        x={centerX}
                        y={centerY }
                        onClick={() => clickHandler()}
                        textAnchor="middle"
                        fill='gray'
                        style={{
                            fontSize: "32px",
                            fontWeight:600
                        }}
                        >
                        Back
                    </text>
                )]}
                onClick={clickedData => {
                   const foundObject = findObject(flatten(data.children), clickedData.id)
                   if (foundObject && foundObject.children) {
                       setData(foundObject)
                       setHistoryData([...historyData,foundObject])
                   }
               }}
            />
        </div>
        
    </React.Fragment>
  )
}

export default SunBurst