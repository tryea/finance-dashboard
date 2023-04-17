export interface ExpensesByCategory {
    salaries: number,
    supplies: number,
    services: number
}

export interface Month {
    id: string,
    month: string,
    revenue: number,
    expenses: number,
    operationalExpenses: number,
    nonOperationalExpenses: number
}

export interface Day {
    id: string,
    date: String,
    revenue: number,
    expenses: number
}

export interface GetKpisResponse {
    id: string,
    _id: string,
    __v: string,
    totalProfit: number,
    totalRevenue: number,
    totalExpenses: number
    expensesByCategory: ExpensesByCategory,
    monthlyData: Array<Month>,
    dailyData: Array<Day>
}