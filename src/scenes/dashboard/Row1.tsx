import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";

const Row1 = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    console.log(data)

    return (
        <>
            <DashboardBox gridArea="a">
            </DashboardBox>
            <DashboardBox gridArea="b">
            </DashboardBox>
            <DashboardBox gridArea="c">
            </DashboardBox>
        </>
    );
};

export default Row1;