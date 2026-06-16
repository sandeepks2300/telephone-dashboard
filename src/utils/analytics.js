export const totalCalls = (data) => data.length;

export const totalCost = (data) =>
  data.reduce(
    (sum, item) => sum + Number(item.callCost),
    0
  );

export const averageDuration = (data) =>
  Math.round(
    data.reduce(
      (sum, item) => sum + item.callDuration,
      0
    ) / data.length
  );

  export const successfulCalls = (data) =>
  data.filter(call => call.callStatus).length;

  export const failedCalls = (data) =>
  data.filter(call => !call.callStatus).length;