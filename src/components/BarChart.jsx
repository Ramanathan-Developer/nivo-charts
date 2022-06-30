import React,{useState} from 'react';
import { ResponsiveBar } from '@nivo/bar'

function BarChart(props) {
   const [pad,setPad] = useState(0.1);
   setTimeout(() => setPad(0.4),500)
  return (
        <React.Fragment>
            <div style={{ height:500 }}>
            <ResponsiveBar
                data={props.data}
                keys={[
                    'Present',
                    'Absent',
                    'NA',
                    'Leave',
                    'Weekoff'
                ]}
                indexBy="date"
                padding={pad}
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={({id,data}) => String(data[`${id}Color`])}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                onClick={ (node) => console.log(node)}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 2,
                    tickRotation: -45,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 40,                    
                }}
                valueFormat={value => 
                    (<tspan y={ -10 }>{ value+"h" }</tspan>)
                  }
                axisLeft={{
                    format: value  => (value + "h"),
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Hour',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                tooltip={({ id, value, color, data : {In,out} }) => (
                    <div style={{ padding: 12, color:'white', background: '#222222',textAlign:"left" }}>
                        <span>{'Status : '}<strong>{id}</strong></span>
                        <br />
                        { id==="Present" ? (
                        <div>
                            <span>{"Check In : "}<strong>{In}</strong></span><br />
                            <span>{"Check Out : "}<strong>{out}</strong></span><br />
                            <span>{"Working Hours: "} <strong>{value+'h'}</strong></span>
                        </div>
                        ) : '' }
                    </div>
                )}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            1.6
                        ]
                    ]
                }}
                // legends={[
                //     {
                //         dataFrom: 'keys',
                //         data: keys.map((id,index) => ({
                //             color:colors[index],
                //             id,
                //             label:keys[index]
                //         })),
                //         anchor: 'bottom-right',
                //         direction: 'column',
                //         justify: false,
                //         translateX: 120,
                //         translateY: 0,
                //         itemsSpacing: 2,
                //         itemWidth: 100,
                //         itemHeight: 20,
                //         itemDirection: 'left-to-right',
                //         itemOpacity: 0.85,
                //         symbolSize: 20,
                //         effects: [
                //             {
                //                 on: 'hover',
                //                 style: {
                //                     itemOpacity: 1
                //                 }
                //             }
                //         ]
                //     }
                // ]}
                role="application"
                ariaLabel="Nivo bar chart demo"
                barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
            />
            </div>            
        </React.Fragment>
  )
}

export default BarChart