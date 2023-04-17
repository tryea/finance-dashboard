import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area,
} from "recharts";

const Row1 = () => {
    const { data } = useGetKpisQuery();
    const { palette } = useTheme()
    console.log(data)

    const revenueExpenses = useMemo(() => {
        return (
            data && data[0].monthlyData.map(({ month, revenue, expenses, }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses
                }
            })
        )
    }, [data])
    return (
        <>
            <DashboardBox gridArea="a">
                <ResponsiveContainer width="100%" height="100%" >
                    <AreaChart
                        width={500}
                        height={400}
                        data={revenueExpenses}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="0 3" />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            style={{
                                fontSize: "10px"
                            }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={{
                                strokeWidth: "0"
                            }}
                            style={{
                                fontSize: "10px",
                            }}
                            domain={[8000, 23000]}
                        />
                        <Tooltip />
                        <Area
                            type={"monotone"}
                            dataKey={"revenue"}
                            dot={true}
                            stroke={palette.primary.main}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                        <Area
                            type={"monotone"}
                            dataKey={"expenses"}
                            dot={true}
                            stroke={palette.primary.main}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="b">
            </DashboardBox>
            <DashboardBox gridArea="c">
            </DashboardBox>
        </>
    );
};

export default Row1;