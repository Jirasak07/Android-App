import React, { Component } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
} from "react-native-calendars";
import testID from "../testID.ts";

interface State {
  items?: AgendaSchedule;
}

export default class RequestMe extends Component<State> {
  state: State = {
    items: undefined,
  };
  state = {
    curDT: new Date().toLocaleString(),
    vacation: { key: "vacation", color: "#F2921D", selectedDotColor: "blue" },
    massage: { key: "massage", color: "green", selectedDotColor: "blue" },

    events: [
      {
        title: "ไปมช",
        start: "2023-02-20 09:00:00",
        end: "2023-02-20 09:00:00",
        type: "1",
      },
    ],
  };

  render() {
    return (
      <Agenda
        //style={{paddingTop:20}}
        testID={testID.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={this.state.curDT}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        minDate={this.state.curDT}
        markingType={"multi-dot"}
        markedDates={{
          "2023-02-25": {
            dots: [this.state.vacation, this.state.massage],
          },
          "2023-02-26": { dots: [this.state.massage, this.state.vacation] },
        }}
        //monthFormat={'yyyy'}
        theme={{
          calendarBackground: "#B8E8FC",
          agendaKnobColor: "white",
          dayTextColor: "#000",
        }}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        //hideExtraDays={false}
        // showOnlySelectedDayItems
        // reservationsKeyExtractor={this.reservationsKeyExtractor}
      />
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.items || {};
    const events = this.state.events||{};
    //console.log(events);
    //console.log(items);
    setTimeout(() => {
console.log(events.title);
      /* if (!events) {
        items=[];
        items.push({
            name: "Events "+events.title,
            day:events.start,
          });
      } */

      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }
      const newItems: AgendaSchedule = {};

      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
       // console.log(key);
      });

      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <TouchableOpacity
        testID={testID.agenda.ITEM}
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{ fontSize, color }}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
