import React, { Component } from 'react';

import {
	Text,
	View,
	StyleSheet,
	Image,
	Alert
	} from 'react-native';

	const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeSlotText: {
    marginLeft: 12,
    fontSize: 12,
  },
	playerInfoText: {
    marginLeft: 12,
    fontSize: 20,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

const Row = (props) => (
	<View style={styles.container}>
	  <Image source={{ uri: props.ProfilePic}} style={styles.photo} />
		<Text>{showTimeShotInfo(props.text.TimeSlotId)}</Text>
		<Text>{showPlayersInfo(props.text.Players)}</Text>
	</View>
);

function showPlayersInfo(players)
{
	if(!players)
		return ""
	var player1 = players.Player1
	var player2 = players.Player2
	var playerInfoString = ""

	if (player1)
	{
		playerInfoString = "    " + player1.UserName
		if (player2)
		{
			playerInfoString += " Vs " + player2.UserName
		}
	}

	return (
		<Text style={styles.playerInfoText}>
			{playerInfoString}
		</Text>)
}

function showTimeShotInfo(slotId)
{
	return (
	<Text style={styles.timeSlotText}>
		{`${getTimeSlotInfo(slotId)}`}
	</Text>)
}

function getTimeSlotInfo(slotId)
{
	var fewMinutesLater = new Date();
	fewMinutesLater.setHours(0);
	fewMinutesLater.setMinutes(0);
  fewMinutesLater.setSeconds(0);

	fewMinutesLater.setMinutes(fewMinutesLater.getMinutes() + (slotId*15));
	var slotEnd = fewMinutesLater.getHours()+":"+fewMinutesLater.getMinutes()

	fewMinutesLater.setMinutes(fewMinutesLater.getMinutes() - 15 );
	var slotStart = fewMinutesLater.getHours()+":"+fewMinutesLater.getMinutes()

	return slotStart + " - " + slotEnd
}

export default Row;
