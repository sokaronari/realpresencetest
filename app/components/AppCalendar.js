import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";

function Coba() {
  LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul.",
      "Aug",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dec."
    ],
    dayNames: [
      "Sunday ",
      "Monday",
      "Tuesday",
      "wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    dayNamesShort: ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
    today: "today"
  };
  LocaleConfig.defaultLocale = "en";

  return (
    <View
      style={{
        paddingTop: 50,
        backgroundColor: "#406BA2",
        flex: 1,
        paddingHorizontal: 5
      }}
    >
      <CalendarList
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={months => {
          console.log("now these months are visible", months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.

        markedDates={{
          "2020-09-16": { selected: true, marked: true, selectedColor: "blue" },
          "2020-09-17": { marked: true },
          "2020-09-18": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2020-09-19": { disabled: true, disableTouchEvent: true }
        }}
      />
    </View>
  );
}

export default Coba;
