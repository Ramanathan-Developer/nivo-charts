import { ResponsiveTimeRange } from '@nivo/calendar';
import moment from 'moment';
import React from 'react';

export const data = [
  {
    "value":350,
    "day":"2022-06-01"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-02"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-03"
  },
  {
    "value":50,
    "day":"2022-06-04"
  },
  {
    "value":450,
    "day":"2022-06-05"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-06"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-07"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-08"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-09"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-10"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-11"
  },
  {
    "value":450,
    "day":"2022-06-12"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-13"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-14"
  },
  {
    "value":150,
    "checkIn":"09:00 AM",
    "checkOut":"06:00 PM",
    "day":"2022-06-15"
  },
  {
    "value":250,
    "day":"2022-06-16"
  },
  {
    "value":250,
    "day":"2022-06-17"
  },
  {
    "value":250,
    "day":"2022-06-18"
  },
  {
    "value":250,
    "day":"2022-06-19"
  },
  {
    "value":250,
    "day":"2022-06-20"
  },
  {
    "value":250,
    "day":"2022-06-21"
  },
  {
    "value":250,
    "day":"2022-06-22"
  },
  {
    "value":250,
    "day":"2022-06-23"
  },
  {
    "value":250,
    "day":"2022-06-24"
  },
  {
    "value":250,
    "day":"2022-06-25"
  },
  {
    "value":250,
    "day":"2022-06-26"
  },
  {
    "value":250,
    "day":"2022-06-27"
  },
  {
    "value":250,
    "day":"2022-06-28"
  },
  {
    "value":250,
    "day":"2022-06-29"
  },
  {
    "value":250,
    "day":"2022-06-30"
  },
  {
    "value":250,
    "day":"2021-06-30"
  },
  {
    "value":250,
    "day":"2022-06-30"
  }
]


  const presentHtml = (day,checkIn,checkOut) => {
    return (
      <>
        <span>Day : {day},</span><br></br>
        <span>Checkin : {checkIn},</span><br></br>
        <span>Checkout : {checkOut}</span><br></br>
      </>
    );
  }

  const toolTIpKit = (data,day) => {
    return (
      <>
        <span>{data}</span><br></br>
        <span>{day}</span>
      </>
    )
  }

  export const MyResponsiveTimeRange = (props) => (
    <ResponsiveTimeRange
    valueFormat={value => (value)}
      data={props.data}
      from={props.from} 
      to={props.to}
      monthLegend={(year, month, date) => {
        return date.getMonth() +' '+ date.getFullYear();
      }}
      dayRadius="10px"
      colors={[ '#f56464', '#b6f2a2', '#bfcbe0', '#a5a8a6' ,'#83917d']}
      emptyColor="#f56464"
      tooltip={({ day, value, festival,checkIn,checkOut }) => (
      <div
          style={{ 
              padding: 6,
              color:'#ffffff',
              background: '#222222',
        }}
    >
          <strong>
              {value === 150 && presentHtml(day,checkIn,checkOut)}
              {value === 50 && toolTIpKit("Empty",day)}
              {value === 250 && toolTIpKit("Future Date",day)}
              {value === 450 && toolTIpKit("Weekoff",day)}
              {value === 350 && toolTIpKit("Absent",day)}
        </strong> 
    </div>
    )}  
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    square={true}
    weekdayTicks = {[0, 1, 2, 3, 4, 5, 6]}
    monthLegendOffset={9}
    weekdayLegendOffset={66}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
        {
          anchor: 'bottom-right',
          direction: 'row',
          justify: false,
          itemCount: 4,
          itemWidth: 52,
          itemHeight: 8,
          itemsSpacing: 9,
          itemDirection: 'right-to-left',
          translateX: -86,
          translateY: -65,
          symbolSize: 20
        }
    ]}
    />);

  export const barData = [
    {
        "date": moment("2022-06-01").format('ddd,MMM DD'),
        "Present":parseFloat(moment("2022-06-01 08:02:53").format('hh.mm')),
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM",
    },
    {
        "date": moment("2022-06-02").format('ddd,MMM DD'),
        "Absent":0,
        "AbsentColor": "hsl(270, 100%, 44%)",
    },
    {
        "date": moment("2022-06-03").format('ddd,MMM DD'),
        "Present":8.1,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-04").format('ddd,MMM DD'),
        "Present":6.5,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-05").format('ddd,MMM DD'),
        "Weekoff":0,
        "WeekoffColor": "hsl(238, 0%, 60%)"
    },
    {
        "date": moment("2022-06-06").format('ddd,MMM DD'),
        "Present":7.3,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-07").format('ddd,MMM DD'),
        "Present":8.1,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-08").format('ddd,MMM DD'),
        "Leave":0,
        "LeaveColor": "hsl(137, 100%, 44%)",
    },
    {
        "date": moment("2022-06-09").format('ddd,MMM DD'),
        "Present":7.8,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-10").format('ddd,MMM DD'),
        "Present":9.8,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-11").format('ddd,MMM DD'),
        "Present":10,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-12").format('ddd,MMM DD'),
        "Weekoff":0,
        "WeekoffColor": "hsl(238, 0%, 60%)"
    },
    {
        "date": moment("2022-06-13").format('ddd,MMM DD'),
        "Present":7.6,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-14").format('ddd,MMM DD'),
        "Absent":0,
        "AbsentColor": "hsl(270, 100%, 44%)",
    },
    {
        "date": moment("2022-06-15").format('ddd,MMM DD'),
        "Present":6.6,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-16").format('ddd,MMM DD'),
        "Present":8.6,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-17").format('ddd,MMM DD'),
        "Present":7.4,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-18").format('ddd,MMM DD'),
        "Present":8.8,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-19").format('ddd,MMM DD'),
        "Weekoff":0,
        "WeekoffColor": "hsl(238, 0%, 60%)"
    },
    {
        "date": moment("2022-06-20").format('ddd,MMM DD'),
        "Present":4.3,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-21").format('ddd,MMM DD'),
        "Present":3.5,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },        
    {
        "date": moment("2022-06-22").format('ddd,MMM DD'),
        "Absent":0,
        "AbsentColor": "hsl(270, 100%, 44%)"
    },
    {
        "date": moment("2022-06-23").format('ddd,MMM DD'),
        "Present":6.7,
        "PresentColor":"hsl(205, 55%, 60%)",
        "In":"07:00 AM",
        "out":"06:00 PM"
    },
    {
        "date": moment("2022-06-24").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)",
    },
    {
        "date": moment("2022-06-25").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)",
    },
    {
        "date": moment("2022-06-26").format('ddd,MMM DD'),
        "Weekoff":0,
        "WeekoffColor": "hsl(238, 0%, 60%)"
    },
    {
        "date": moment("2022-06-27").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)",
    },
    {
        "date": moment("2022-06-28").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)",
    },
    {
        "date": moment("2022-06-29").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)",
    },        
    {
        "date": moment("2022-06-30").format('ddd,MMM DD'),
        "NA":0,
        "NAColor": "hsl(202, 21%, 72%)"
    }
  ];

  export const initialData = [  
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 10,
      "color": "hsl(158, 100%, 50%)",
      "emp":150,
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 30,
      "color": "hsl(210, 100%, 50%)",
      "emp":250,
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 20,
      "color": "hsl(139, 100%, 50%)",
      "emp":350,
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":15,
      "color":"hsl(45, 100%, 50%)",
      "emp":450,
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":15,
      "color":"hsl(195, 100%, 50%)",
      "emp":550,
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":10,
      "color":"hsl(293, 2%, 50%)",
      "emp":650,
    }
  ]
  export const pending = [  
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 20,
      "color": "hsl(139, 100%, 41%)",
      "emp":450
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 20,
      "color": "hsl(152, 2%, 53%)",
      "emp":150
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 20,
      "color": "hsl(194, 56%, 53%)",
      "emp":250
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":20,
      "color":"hsl(228, 87%, 58%)",
      "emp":650
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":10,
      "color":"hsl(60, 84%, 51%)",
      "emp":700
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":10,
      "color":"hsl(2, 87%, 53%)",
      "emp":400
    }
  ]

  export const inProgress = [
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 15,
      "color": "hsl(139, 100%, 41%)",
      "emp":233
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 15,
      "color": "hsl(152, 2%, 53%)",
      "emp":544
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 15,
      "color": "hsl(194, 56%, 53%)",
      "emp":611
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":15,
      "color":"hsl(228, 87%, 58%)",
      "emp":270
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":20,
      "color":"hsl(60, 84%, 51%)",
      "emp":816
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":20,
      "color":"hsl(2, 87%, 53%)",
      "emp":791
    }
  ]

  export const completedOnTime = [
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 35,
      "color": "hsl(139, 100%, 41%)",
      "emp":240
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 10,
      "color": "hsl(152, 2%, 53%)",
      "emp":490
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 25,
      "color": "hsl(194, 56%, 53%)",
      "emp":572
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":10,
      "color":"hsl(228, 87%, 58%)",
      "emp":450
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":10,
      "color":"hsl(60, 84%, 51%)",
      "emp":330
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":10,
      "color":"hsl(2, 87%, 53%)",
      "emp":270
    }
  ]

  export const completedPastDate = [
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 15,
      "color": "hsl(139, 100%, 41%)",
      "emp":88
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 30,
      "color": "hsl(152, 2%, 53%)",
      "emp":452
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 15,
      "color": "hsl(194, 56%, 53%)",
      "emp":751
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":15,
      "color":"hsl(228, 87%, 58%)",
      "emp":545
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":8,
      "color":"hsl(60, 84%, 51%)",
      "emp":878
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":17,
      "color":"hsl(2, 87%, 53%)",
      "emp":785
    }
  ]

  export const upComing = [
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 20,
      "color": "hsl(139, 100%, 41%)",
      "emp":542
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 7,
      "color": "hsl(152, 2%, 53%)",
      "emp":425
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 13,
      "color": "hsl(194, 56%, 53%)",
      "emp":435
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":18,
      "color":"hsl(228, 87%, 58%)",
      "emp":525
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":32,
      "color":"hsl(60, 84%, 51%)",
      "emp":785
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":10,
      "color":"hsl(2, 87%, 53%)",
      "emp":447
    }
  ]

  export const canceled = [
    {
      "id": "COT",
      "label": "Completed On Time",
      "value": 10,
      "color": "hsl(139, 100%, 41%)",
      "emp":878
    },
    {
      "id": "CPD",
      "label": "Completed Past Date",
      "value": 10,
      "color": "hsl(152, 2%, 53%)",
      "emp":354
    },
    {
      "id": "PEN",
      "label": "Pending",
      "value": 10,
      "color": "hsl(194, 56%, 53%)",
      "emp":855
    },
    {
      "id":"IP",
      "label":"In-Progress",
      "value":10,
      "color":"hsl(228, 87%, 58%)",
      "emp":455
    },
    {
      "id":"UC",
      "label":"Up-Coming",
      "value":20,
      "color":"hsl(60, 84%, 51%)",
      "emp":550
    },
    {
      "id":"CANC",
      "label":"Canceled",
      "value":40,
      "color":"hsl(2, 87%, 53%)",
      "emp":650
    }
  ]

  export const sunburstData = {
    "name": "nivo",
    "color": "hsl(132, 70%, 50%)",
    "children": [
      {
        "name": "viz",
        "color": "hsl(147, 70%, 50%)",
        "children": [
          {
            "name": "stack",
            "color": "hsl(2, 70%, 50%)",
            "children": [
              {
                "name": "cchart",
                "color": "hsl(21, 70%, 50%)",
                "loc": 31403
              },
              {
                "name": "xAxis",
                "color": "hsl(147, 70%, 50%)",
                "loc": 162786
              },
              {
                "name": "yAxis",
                "color": "hsl(193, 70%, 50%)",
                "loc": 139177
              },
              {
                "name": "layers",
                "color": "hsl(240, 70%, 50%)",
                "loc": 124480
              }
            ]
          },
          {
            "name": "ppie",
            "color": "hsl(103, 70%, 50%)",
            "children": [
              {
                "name": "chart",
                "color": "hsl(81, 70%, 50%)",
                "children": [
                  {
                    "name": "pie",
                    "color": "hsl(193, 70%, 50%)",
                    "children": [
                      {
                        "name": "outline",
                        "color": "hsl(265, 70%, 50%)",
                        "loc": 27833
                      },
                      {
                        "name": "slices",
                        "color": "hsl(72, 70%, 50%)",
                        "loc": 140727
                      },
                      {
                        "name": "bbox",
                        "color": "hsl(195, 70%, 50%)",
                        "loc": 198180
                      }
                    ]
                  },
                  {
                    "name": "donut",
                    "color": "hsl(72, 70%, 50%)",
                    "loc": 8283
                  },
                  {
                    "name": "gauge",
                    "color": "hsl(185, 70%, 50%)",
                    "loc": 25208
                  }
                ]
              },
              {
                "name": "legends",
                "color": "hsl(57, 70%, 50%)",
                "loc": 104882
              }
            ]
          }
        ]
      },
      {
        "name": "colors",
        "color": "hsl(76, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(15, 70%, 50%)",
            "loc": 82345
          },
          {
            "name": "hsl",
            "color": "hsl(18, 70%, 50%)",
            "loc": 163714
          }
        ]
      },
      {
        "name": "utils",
        "color": "hsl(105, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(252, 70%, 50%)",
            "loc": 178882
          },
          {
            "name": "resetClock",
            "color": "hsl(294, 70%, 50%)",
            "loc": 119823
          },
          {
            "name": "noop",
            "color": "hsl(77, 70%, 50%)",
            "loc": 127433
          },
          {
            "name": "tick",
            "color": "hsl(167, 70%, 50%)",
            "loc": 139578
          },
          {
            "name": "forceGC",
            "color": "hsl(88, 70%, 50%)",
            "loc": 11113
          },
          {
            "name": "stackTrace",
            "color": "hsl(11, 70%, 50%)",
            "loc": 79511
          },
          {
            "name": "dbg",
            "color": "hsl(267, 70%, 50%)",
            "loc": 72524
          }
        ]
      },
      {
        "name": "generators",
        "color": "hsl(168, 70%, 50%)",
        "children": [
          {
            "name": "address",
            "color": "hsl(309, 70%, 50%)",
            "loc": 156535
          },
          {
            "name": "city",
            "color": "hsl(212, 70%, 50%)",
            "loc": 47520
          },
          {
            "name": "animal",
            "color": "hsl(209, 70%, 50%)",
            "loc": 42080
          },
          {
            "name": "movie",
            "color": "hsl(134, 70%, 50%)",
            "loc": 166223
          },
          {
            "name": "user",
            "color": "hsl(278, 70%, 50%)",
            "loc": 197607
          }
        ]
      },
      {
        "name": "set",
        "color": "hsl(150, 70%, 50%)",
        "children": [
          {
            "name": "clone",
            "color": "hsl(237, 70%, 50%)",
            "loc": 151523
          },
          {
            "name": "intersect",
            "color": "hsl(134, 70%, 50%)",
            "loc": 160937
          },
          {
            "name": "merge",
            "color": "hsl(315, 70%, 50%)",
            "loc": 59481
          },
          {
            "name": "reverse",
            "color": "hsl(288, 70%, 50%)",
            "loc": 66126
          },
          {
            "name": "toArray",
            "color": "hsl(9, 70%, 50%)",
            "loc": 102574
          },
          {
            "name": "toObject",
            "color": "hsl(99, 70%, 50%)",
            "loc": 3417
          },
          {
            "name": "fromCSV",
            "color": "hsl(275, 70%, 50%)",
            "loc": 10820
          },
          {
            "name": "slice",
            "color": "hsl(64, 70%, 50%)",
            "loc": 149416
          },
          {
            "name": "append",
            "color": "hsl(198, 70%, 50%)",
            "loc": 143202
          },
          {
            "name": "prepend",
            "color": "hsl(281, 70%, 50%)",
            "loc": 99515
          },
          {
            "name": "shuffle",
            "color": "hsl(190, 70%, 50%)",
            "loc": 32185
          },
          {
            "name": "pick",
            "color": "hsl(244, 70%, 50%)",
            "loc": 127101
          },
          {
            "name": "plouc",
            "color": "hsl(166, 70%, 50%)",
            "loc": 97822
          }
        ]
      },
      {
        "name": "text",
        "color": "hsl(341, 70%, 50%)",
        "children": [
          {
            "name": "trim",
            "color": "hsl(124, 70%, 50%)",
            "loc": 43863
          },
          {
            "name": "slugify",
            "color": "hsl(77, 70%, 50%)",
            "loc": 115018
          },
          {
            "name": "snakeCase",
            "color": "hsl(332, 70%, 50%)",
            "loc": 194017
          },
          {
            "name": "camelCase",
            "color": "hsl(43, 70%, 50%)",
            "loc": 63344
          },
          {
            "name": "repeat",
            "color": "hsl(103, 70%, 50%)",
            "loc": 69197
          },
          {
            "name": "padLeft",
            "color": "hsl(143, 70%, 50%)",
            "loc": 67483
          },
          {
            "name": "padRight",
            "color": "hsl(13, 70%, 50%)",
            "loc": 4666
          },
          {
            "name": "sanitize",
            "color": "hsl(301, 70%, 50%)",
            "loc": 28129
          },
          {
            "name": "ploucify",
            "color": "hsl(355, 70%, 50%)",
            "loc": 197947
          }
        ]
      },
      {
        "name": "misc",
        "color": "hsl(75, 70%, 50%)",
        "children": [
          {
            "name": "greetings",
            "color": "hsl(170, 70%, 50%)",
            "children": [
              {
                "name": "hey",
                "color": "hsl(2, 70%, 50%)",
                "loc": 141898
              },
              {
                "name": "HOWDY",
                "color": "hsl(314, 70%, 50%)",
                "loc": 196390
              },
              {
                "name": "aloha",
                "color": "hsl(297, 70%, 50%)",
                "loc": 64408
              },
              {
                "name": "AHOY",
                "color": "hsl(246, 70%, 50%)",
                "loc": 160632
              }
            ]
          },
          {
            "name": "other",
            "color": "hsl(300, 70%, 50%)",
            "loc": 182660
          },
          {
            "name": "path",
            "color": "hsl(272, 70%, 50%)",
            "children": [
              {
                "name": "pathA",
                "color": "hsl(45, 70%, 50%)",
                "loc": 27431
              },
              {
                "name": "pathB",
                "color": "hsl(229, 70%, 50%)",
                "children": [
                  {
                    "name": "pathB1",
                    "color": "hsl(149, 70%, 50%)",
                    "loc": 157239
                  },
                  {
                    "name": "pathB2",
                    "color": "hsl(302, 70%, 50%)",
                    "loc": 38394
                  },
                  {
                    "name": "pathB3",
                    "color": "hsl(356, 70%, 50%)",
                    "loc": 103505
                  },
                  {
                    "name": "pathB4",
                    "color": "hsl(81, 70%, 50%)",
                    "loc": 63570
                  }
                ]
              },
              {
                "name": "pathC",
                "color": "hsl(346, 70%, 50%)",
                "children": [
                  {
                    "name": "pathC1",
                    "color": "hsl(138, 70%, 50%)",
                    "loc": 58440
                  },
                  {
                    "name": "pathC2",
                    "color": "hsl(183, 70%, 50%)",
                    "loc": 17061
                  },
                  {
                    "name": "pathC3",
                    "color": "hsl(113, 70%, 50%)",
                    "loc": 60491
                  },
                  {
                    "name": "pathC4",
                    "color": "hsl(226, 70%, 50%)",
                    "loc": 170598
                  },
                  {
                    "name": "pathC5",
                    "color": "hsl(309, 70%, 50%)",
                    "loc": 20714
                  },
                  {
                    "name": "pathC6",
                    "color": "hsl(126, 70%, 50%)",
                    "loc": 69121
                  },
                  {
                    "name": "pathC7",
                    "color": "hsl(337, 70%, 50%)",
                    "loc": 173221
                  },
                  {
                    "name": "pathC8",
                    "color": "hsl(36, 70%, 50%)",
                    "loc": 93856
                  },
                  {
                    "name": "pathC9",
                    "color": "hsl(263, 70%, 50%)",
                    "loc": 64901
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

  const events = [
    { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
    {
      title: "Long Event",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10")
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-09T16:00:00+00:00")
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-16T16:00:00+00:00")
    },
    {
      title: "Conference",
      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19")
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00")
    },
    { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00")},
    { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
    { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
    { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
    { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") }
  ];
  
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;
  
  