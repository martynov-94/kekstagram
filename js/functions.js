function isMeetingInTime(dayStart, dayEnd, meetingTime, meetingDuration) {
  [dayStart, dayEnd, meetingTime] = [dayStart, dayEnd, meetingTime].map(timeToMinutes);
  return meetingTime >= dayStart && meetingTime + meetingDuration <= dayEnd;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split`:`;
  return hours * 60 + +minutes;
}

isMeetingInTime('08:00', '17:30', '14:00', 90); // true
isMeetingInTime('8:0', '10:0', '8:0', 120); // true
isMeetingInTime('08:00', '14:30', '14:00', 90); // false
isMeetingInTime('14:00', '17:30', '08:0', 90); // false
isMeetingInTime('8:00', '17:30', '08:00', 900); // false
