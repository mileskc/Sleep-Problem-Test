function solution(S) {
    console.log(S)
    let arr = S.split("/n")
    console.log(arr)

    //separate meeting times by arrays for each day
    let Monday = []
    let Tuesday = []
    let Wednesday = []
    let Thursday = []
    let Friday = []
    let Saturday = []
    let Sunday = []

    for(let i = 0; i < arr.length; i++) {
        if (arr[i].includes("Mon")) {
            Monday.push(arr[i])
        } else if (arr[i].includes("Tue")) {
            Tuesday.push(arr[i])
        } else if (arr[i].includes("Wed")) {
            Wednesday.push(arr[i])
        } else if (arr[i].includes("Thu")) {
            Thursday.push(arr[i])
        } else if (arr[i].includes("Fri")) {
            Friday.push(arr[i])
        } else if (arr[i].includes("Sat")) {
            Saturday.push(arr[i])
        } else if (arr[i].includes("Sun")) {
            Sunday.push(arr[i])
        }
    }
    console.log(`Mond is ${Monday}`)
    console.log(`Tuesd is ${Tuesday}`)
    console.log(`Wedn is ${Wednesday}`)
    console.log(`Thurs is ${Thursday}`)
    console.log(`Frid is ${Friday}`)
    console.log(`Satu is ${Saturday}`)
    console.log(`Sund is ${Sunday}`)

    //start and end time arrays of strings for each day without day name

    let MonTimes = Monday.map(meeting => meeting.slice(4))
    console.log(`Monday is ${MonTimes}`)
    let TuesTimes = Tuesday.map(meeting => meeting.slice(4))
    console.log(`Tuesday is ${TuesTimes}`)
    let WedTimes = Wednesday.map(meeting => meeting.slice(4))
    console.log(`Wednesday is ${WedTimes}`)
    let ThursTimes = Thursday.map(meeting => meeting.slice(4))
    console.log(`Thursday is ${ThursTimes}`)
    let FriTimes = Friday.map(meeting => meeting.slice(4))
    console.log(`Friday is ${FriTimes}`)
    let SatTimes = Saturday.map(meeting => meeting.slice(4))
    console.log(`Saturday is ${SatTimes}`)
    let SunTimes = Sunday.map(meeting => meeting.slice(4))
    console.log(`Sunday is ${SunTimes}`)

    //Monday to arrays of start and end minutes

    let MonStartHr = MonTimes.map(meeting=>meeting.slice(0,2))
    let MonStartMin = MonTimes.map(meeting=>meeting.slice(3,5))
    console.log(MonStartHr)
    console.log(MonStartMin)
    console.log(MonTimes)
    let MonStartHrNum = MonStartHr.map(hour=>parseInt(hour))
    console.log(MonStartHrNum)
    let MonStartMinNum = MonStartMin.map(min=>parseInt(min))
    console.log(MonStartMinNum)
    let MonStartHrtoMin = MonStartHrNum.map(hour => hour*60)
    console.log(MonStartHrtoMin)

    let MonStartTimes = MonStartHrtoMin.map( (num, i) => {
        return num + MonStartMinNum[i]
    })
    console.log(MonStartTimes)

    let MonStartTimesSorted = MonStartTimes.sort()
    console.log(MonStartTimes)
    console.log(MonStartTimesSorted)

    //monday end

    let MonEndHr = MonTimes.map(meeting=>meeting.slice(6,8))
    let MonEndMin = MonTimes.map(meeting=>meeting.slice(9,11))
    console.log(MonEndHr)
    console.log(MonEndMin)
    let MonEndHrNum = MonEndHr.map(hour=>parseInt(hour))
    console.log(MonEndHrNum)
    let MonEndMinNum = MonEndMin.map(min=>parseInt(min))
    console.log(MonEndMinNum)
    let MonEndHrtoMin = MonEndHrNum.map(hour => hour*60)
    console.log(MonEndHrtoMin)

    let MonEndTimes = MonEndHrtoMin.map( (num, i) => {
        return num + MonEndMinNum[i]
    })
    console.log(MonEndTimes)

    let MonEndTimesSorted = MonEndTimes.sort()
    console.log(MonEndTimes)
    console.log(MonEndTimesSorted)

    //Tuesday start times
    let TuesStartHr = TuesTimes.map(meeting=>meeting.slice(0,2))
    let TuesStartMin = TuesTimes.map(meeting=>meeting.slice(3,5))
    console.log(TuesStartHr)
    console.log(TuesStartMin)
    console.log(TuesTimes)
    let TuesStartHrNum = TuesStartHr.map(hour=>parseInt(hour))
    console.log(TuesStartHrNum)
    let TuesStartMinNum = TuesStartMin.map(min=>parseInt(min))
    console.log(TuesStartMinNum)
    let TuesStartHrtoMin = TuesStartHrNum.map(hour => (hour+24)*60)
    console.log(TuesStartHrtoMin)

    let TuesStartTimes = TuesStartHrtoMin.map( (num, i) => {
        return num + TuesStartMinNum[i]
    })
    console.log(TuesStartTimes)

    let TuesStartTimesSorted = TuesStartTimes.sort()
    console.log(TuesStartTimes)
    console.log(TuesStartTimesSorted)

    //Tuesday End Times

    let TuesEndHr = TuesTimes.map(meeting=>meeting.slice(6,8))
    let TuesEndMin = TuesTimes.map(meeting=>meeting.slice(9,11))
    console.log(TuesEndHr)
    console.log(TuesEndMin)
    let TuesEndHrNum = TuesEndHr.map(hour=>parseInt(hour))
    console.log(TuesEndHrNum)
    let TuesEndMinNum = TuesEndMin.map(min=>parseInt(min))
    console.log(TuesEndMinNum)
    let TuesEndHrtoMin = TuesEndHrNum.map(hour => (hour+24)*60)
    console.log(TuesEndHrtoMin)

    let TuesEndTimes = TuesEndHrtoMin.map( (num, i) => {
        return num + TuesEndMinNum[i]
    })
    console.log(TuesEndTimes)

    let TuesEndTimesSorted = TuesEndTimes.sort()
    console.log(TuesEndTimes)
    console.log(TuesEndTimesSorted)

    //Wed Start times

    let WedStartHr = WedTimes.map(meeting=>meeting.slice(0,2))
    let WedStartMin = WedTimes.map(meeting=>meeting.slice(3,5))
    console.log(WedStartHr)
    console.log(WedStartMin)
    console.log(WedTimes)
    let WedStartHrNum = WedStartHr.map(hour=>parseInt(hour))
    console.log(WedStartHrNum)
    let WedStartMinNum = WedStartMin.map(min=>parseInt(min))
    console.log(WedStartMinNum)
    let WedStartHrtoMin = WedStartHrNum.map(hour => (hour+48)*60)
    console.log(WedStartHrtoMin)

    let WedStartTimes = WedStartHrtoMin.map( (num, i) => {
        return num + WedStartMinNum[i]
    })
    console.log(WedStartTimes)

    let WedStartTimesSorted = WedStartTimes.sort()
    console.log(WedStartTimes)
    console.log(WedStartTimesSorted)

    //Wed End Times

    let WedEndHr = WedTimes.map(meeting=>meeting.slice(6,8))
    let WedEndMin = WedTimes.map(meeting=>meeting.slice(9,11))
    console.log(WedEndHr)
    console.log(WedEndMin)
    let WedEndHrNum = WedEndHr.map(hour=>parseInt(hour))
    console.log(WedEndHrNum)
    let WedEndMinNum = WedEndMin.map(min=>parseInt(min))
    console.log(WedEndMinNum)
    let WedEndHrtoMin = WedEndHrNum.map(hour => (hour+48)*60)
    console.log(WedEndHrtoMin)

    let WedEndTimes = WedEndHrtoMin.map( (num, i) => {
        return num + WedEndMinNum[i]
    })
    console.log(WedEndTimes)

    let WedEndTimesSorted = WedEndTimes.sort()
    console.log(WedEndTimes)
    console.log(WedEndTimesSorted)

    //Thurs Start Times

    let ThursStartHr = ThursTimes.map(meeting=>meeting.slice(0,2))
    let ThursStartMin = ThursTimes.map(meeting=>meeting.slice(3,5))
    console.log(ThursStartHr)
    console.log(ThursStartMin)
    console.log(ThursTimes)
    let ThursStartHrNum = ThursStartHr.map(hour=>parseInt(hour))
    console.log(ThursStartHrNum)
    let ThursStartMinNum = ThursStartMin.map(min=>parseInt(min))
    console.log(ThursStartMinNum)
    let ThursStartHrtoMin = ThursStartHrNum.map(hour => (hour+72)*60)
    console.log(ThursStartHrtoMin)

    let ThursStartTimes = ThursStartHrtoMin.map( (num, i) => {
        return num + ThursStartMinNum[i]
    })
    console.log(ThursStartTimes)

    let ThursStartTimesSorted = ThursStartTimes.sort()
    console.log(ThursStartTimes)
    console.log(ThursStartTimesSorted)

    //Thurs End Times

    let ThursEndHr = ThursTimes.map(meeting=>meeting.slice(6,8))
    let ThursEndMin = ThursTimes.map(meeting=>meeting.slice(9,11))
    console.log(ThursEndHr)
    console.log(ThursEndMin)
    let ThursEndHrNum = ThursEndHr.map(hour=>parseInt(hour))
    console.log(ThursEndHrNum)
    let ThursEndMinNum = ThursEndMin.map(min=>parseInt(min))
    console.log(ThursEndMinNum)
    let ThursEndHrtoMin = ThursEndHrNum.map(hour => (hour+72)*60)
    console.log(ThursEndHrtoMin)

    let ThursEndTimes = ThursEndHrtoMin.map( (num, i) => {
        return num + ThursEndMinNum[i]
    })
    console.log(ThursEndTimes)

    let ThursEndTimesSorted = ThursEndTimes.sort()
    console.log(ThursEndTimes)
    console.log(ThursEndTimesSorted)

    //Friday Start Times

    let FriStartHr = FriTimes.map(meeting=>meeting.slice(0,2))
    let FriStartMin = FriTimes.map(meeting=>meeting.slice(3,5))
    console.log(FriStartHr)
    console.log(FriStartMin)
    console.log(FriTimes)
    let FriStartHrNum = FriStartHr.map(hour=>parseInt(hour))
    console.log(FriStartHrNum)
    let FriStartMinNum = FriStartMin.map(min=>parseInt(min))
    console.log(FriStartMinNum)
    let FriStartHrtoMin = FriStartHrNum.map(hour => (hour+96)*60)
    console.log(FriStartHrtoMin)

    let FriStartTimes = FriStartHrtoMin.map( (num, i) => {
        return num + FriStartMinNum[i]
    })
    console.log(FriStartTimes)

    let FriStartTimesSorted = FriStartTimes.sort()
    console.log(FriStartTimes)
    console.log(FriStartTimesSorted)

    //Fri End Times

    let FriEndHr = FriTimes.map(meeting=>meeting.slice(6,8))
    let FriEndMin = FriTimes.map(meeting=>meeting.slice(9,11))
    console.log(FriEndHr)
    console.log(FriEndMin)
    let FriEndHrNum = FriEndHr.map(hour=>parseInt(hour))
    console.log(FriEndHrNum)
    let FriEndMinNum = FriEndMin.map(min=>parseInt(min))
    console.log(FriEndMinNum)
    let FriEndHrtoMin = FriEndHrNum.map(hour => (hour+96)*60)
    console.log(FriEndHrtoMin)

    let FriEndTimes = FriEndHrtoMin.map( (num, i) => {
        return num + FriEndMinNum[i]
    })
    console.log(FriEndTimes)

    let FriEndTimesSorted = FriEndTimes.sort()
    console.log(FriEndTimes)
    console.log(FriEndTimesSorted)

    //Sat Start Times

    let SatStartHr = SatTimes.map(meeting=>meeting.slice(0,2))
    let SatStartMin = SatTimes.map(meeting=>meeting.slice(3,5))
    console.log(SatStartHr)
    console.log(SatStartMin)
    console.log(SatTimes)
    let SatStartHrNum = SatStartHr.map(hour=>parseInt(hour))
    console.log(SatStartHrNum)
    let SatStartMinNum = SatStartMin.map(min=>parseInt(min))
    console.log(SatStartMinNum)
    let SatStartHrtoMin = SatStartHrNum.map(hour => (hour+120)*60)
    console.log(SatStartHrtoMin)

    let SatStartTimes = SatStartHrtoMin.map( (num, i) => {
        return num + SatStartMinNum[i]
    })

    let SatStartTimesSorted = SatStartTimes.sort()
    console.log(SatStartTimes)
    console.log(SatStartTimesSorted)

    //Sat End Times

    let SatEndHr = SatTimes.map(meeting=>meeting.slice(6,8))
    let SatEndMin = SatTimes.map(meeting=>meeting.slice(9,11))
    console.log(SatEndHr)
    console.log(SatEndMin)
    console.log(SatTimes)
    let SatEndHrNum = SatEndHr.map(hour=>parseInt(hour))
    console.log(SatEndHrNum)
    let SatEndMinNum = SatEndMin.map(min=>parseInt(min))
    console.log(SatEndMinNum)
    let SatEndHrtoMin = SatEndHrNum.map(hour => (hour+120)*60)
    console.log(SatEndHrtoMin)

    let SatEndTimes = SatEndHrtoMin.map( (num, i) => {
        return num + SatEndMinNum[i]
    })

    let SatEndTimesSorted = SatEndTimes.sort()
    console.log(SatEndTimes)
    console.log(SatEndTimesSorted)

    //Sun Start Times

    let SunStartHr = SunTimes.map(meeting=>meeting.slice(0,2))
    let SunStartMin = SunTimes.map(meeting=>meeting.slice(3,5))
    console.log(SunStartHr)
    console.log(SunStartMin)
    console.log(SunTimes)
    let SunStartHrNum = SunStartHr.map(hour=>parseInt(hour))
    console.log(SunStartHrNum)
    let SunStartMinNum = SunStartMin.map(min=>parseInt(min))
    console.log(SunStartMinNum)
    let SunStartHrtoMin = SunStartHrNum.map(hour => (hour+144)*60)
    console.log(SunStartHrtoMin)

    let SunStartTimes = SunStartHrtoMin.map( (num, i) => {
        return num + SunStartMinNum[i]
    })

    let SunStartTimesSorted = SunStartTimes.sort()
    console.log(SunStartTimes)
    console.log(SunStartTimesSorted)

    //Sun End Times

    let SunEndHr = SunTimes.map(meeting=>meeting.slice(6,8))
    let SunEndMin = SunTimes.map(meeting=>meeting.slice(9,11))
    console.log(SunEndHr)
    console.log(SunEndMin)
    console.log(SunTimes)
    let SunEndHrNum = SunEndHr.map(hour=>parseInt(hour))
    console.log(SunEndHrNum)
    let SunEndMinNum = SunEndMin.map(min=>parseInt(min))
    console.log(SunEndMinNum)
    let SunEndHrtoMin = SunEndHrNum.map(hour => (hour+144)*60)
    console.log(SunEndHrtoMin)

    let SunEndTimes = SunEndHrtoMin.map( (num, i) => {
        return num + SunEndMinNum[i]
    })

    let SunEndTimesSorted = SunEndTimes.sort()
    console.log(SunEndTimes)
    console.log(SunEndTimesSorted)

}

console.log(solution("Sun 10:00-20:00/nFri 05:00-10:00/nFri 16:30-23:50/nSat 10:00-24:00/nSun 01:00-04:00/nSat 02:00-06:00/nTue 03:30-18:15/nTue 19:00-20:00/nWed 04:25-15:14/nWed 15:14-22:40/nThu 00:00-23:59/nMon 05:00-13:00/nMon 15:00-21:00"))