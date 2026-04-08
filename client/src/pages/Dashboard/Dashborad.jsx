import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
const Dashborad = () => {
    // #region Sample data
    const data = [
        { name: 'Installed', value: 400, fill: '#0088FE' },
        { name: 'uninstalled', value: 300, fill: '#00C49F' },

    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default Dashborad;