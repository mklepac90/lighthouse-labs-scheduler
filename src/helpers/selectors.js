// OMG THIS IS TERRIBLE - MUST REFACTOR!!!!!!
// TERNARY OPERATORS??? LETS TRY IT!!!

export function getAppointmentsForDay(state, day) {

  // let requestedDay = (state.days.filter(d => d.name === day))[0];
  const requestedDay = state.days.find(d => d.name === day);

  
  // if (state.days.length === 0 || requestedDay === undefined) {
  // return [];
  // }

  // const dayAppointments = requestedDay.appointments;
  // let appointmentDetails = [];

  // for (const appointment in state.appointments) {
  //   if (dayAppointments.includes(state.appointments[appointment].id)) {
  //     appointmentDetails.push(state.appointments[appointment]);
  //   }
  // }

  // return appointmentDetails;
  return requestedDay ? requestedDay.appointments.map(key => state.appointments[key]) : [];

}

export function getInterviewersForDay(state, day) {

  // let requestedDay = (state.days.filter(d => d.name === day))[0];
  const requestedDay = state.days.find(d => d.name === day);


  // if (state.days.length === 0 || requestedDay === undefined) {
  //   return [];
  // }

  // const dayInterviewers = requestedDay.interviewers;
  // let interviewerDetails = [];

  // for (const interviewer in state.interviewers) {
  //   if (dayInterviewers.includes(state.interviewers[interviewer].id)) {
  //     interviewerDetails.push(state.interviewers[interviewer]);
  //   }
  // }

  // return interviewerDetails;
  return requestedDay ? requestedDay.interviewers.map(key => state.interviewers[key]) : [];

}

export function getInterview(state, interview) {

  // if (!interview) {
  //   return null;
  // }

  // const interviewerID = interview.interviewer;

  // const interviewDetails = {

  //   "student": interview.student,
  //   "interviewer": state.interviewers[interviewerID]

  // }

  // return interviewDetails;
  
  return interview ? {...interview, interviewer: state.interviewers[interview.interviewer]} : null;

}