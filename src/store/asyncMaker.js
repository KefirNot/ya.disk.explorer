export default (actionPrefix, functionPrefix) => {
    const result = {};
    result[actionPrefix] = actionPrefix;

    const startedActionType = `${actionPrefix}_STARTED`;
    result[startedActionType] = startedActionType;

    const successedActionType = `${actionPrefix}_SUCCESSED`;
    result[successedActionType] = successedActionType;

    const failedActionType = `${actionPrefix}_FAILED`;
    result[failedActionType] = failedActionType;

    result[functionPrefix] = (arg) => ({ type: actionPrefix, payload: { arg } });

    result[`${functionPrefix}Started`] = () => ({ type: startedActionType, payload: {} });

    result[`${functionPrefix}Successed`] = (result) => ({ type: successedActionType, payload: { ...result } });

    result[`${functionPrefix}Failed`] = (error) => ({ type: failedActionType, payload: { ...error } });

    return result;
}