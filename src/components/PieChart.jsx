import React,{useState,useEffect} from 'react';
import { ResponsivePie } from '@nivo/pie';
import { animated } from '@react-spring/web'

function PieChart({ dataObj }) {
    const [data,setData] = useState(dataObj['initial']);
    const [btn,setBtn] = useState(0);
    var total;
    useEffect(() => {
      total = 0;
      data.map(item => total += item.emp)
    },[data])
  return (
    <React.Fragment >
      <div style={{ height: 500 ,width:500 }}>
      {btn === 1 ? (<button onClick={() =>{setData(dataObj['initial']);setBtn(0)}} style={{ border:'none',backgroundColor:'blue',color:'white',height:'45px',width:'10%',marginLeft:'5%',marginTop:'5%' }}>Back</button>) : ''}
            <ResponsivePie   
                onClick={(node,event) => { setData(dataObj[node.label]);setBtn(1) }}
                valueFormat={value => (value +"%")}         
                data={data}
                padAngle={1}
                colors={{ datum:'data.color' }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                activeOuterRadiusOffset={25}
                tooltip={({ datum: { data:{ label,emp,value } } }) => (
                      <div style={{ padding: 12, color:"white", background: '#222222',textAlign:"left" }}>
                          <span>{"Status"}: <strong>{label}</strong></span><br />
                          <span>{"Count"}: <strong> {emp}</strong></span><br />
                          <span>{"Percentage"}: <strong>{value + "%"}</strong></span>
                      </div>
                  )}
                  theme={{
                      tooltip: {
                          container: {
                              background: '#333',
                          },
                      },
                  }}
                slicesLabelsTextColor="#F3F1F0"
                sliceLabel={d => <tspan>{d.id}</tspan>}
                arcLinkLabelsSkipAngle={10}
                enableArcLinkLabels={false}
                arcLinkLabelsTextColor="#fff"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={20}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            10
                        ]
                    ]
                }}
                arcLabelsRadiusOffset={0.69}
                radialLabelsSkipAngle={10}
                arcLabelsComponent={({ datum,label, style, datum: {data : {emp,id}} }) => (
                  <React.Fragment>                    
                      <animated.g transform={style.transform} style={{ pointerEvents: 'none' }}>
                        <text
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill='#fff'
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                            }}
                        >
                            {emp+ '-' + label}<br /> <br />{ id }
                        </text>
                    </animated.g>      
                    <circle fill="#ffffff"  strokeWidth={5} r={25} />
                    <text textAnchor="middle"
                            dominantBaseline="central">{total}</text>
                  </React.Fragment>
                    
                )}
                legends={[
                    {
                      anchor: 'bottom',
                      direction: 'column',
                      justify: false,
                      translateX: 280,
                      translateY: -10,
                      itemsSpacing: 1,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'square',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
          />
      </div>            
    </React.Fragment>
  )
}

export default PieChart