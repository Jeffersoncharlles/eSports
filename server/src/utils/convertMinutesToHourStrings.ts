//1100 => 18:00

export const convertMinutesToHourStrings = (minutesAmount: number) => {
    const hours = Math.floor(minutesAmount / 60) //
    const minutes = minutesAmount % 60 //resto por 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}
