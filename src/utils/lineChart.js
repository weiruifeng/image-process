/* eslint-disable no-undef */
import * as d3 from 'd3';
function lineChart(initData, id, strength = 1) {
    const dataSet = [];
    for (let i = 0, len = initData.length; i < len; i++) {
        if (initData[i]) {
            const data = [i * strength, initData[i]];
            dataSet.push(data);
        }
    }
    // 图表的宽度和高度
    const width = 800;
    const height = 600;
    // 预留给轴线的距离
    const padding = { top: 50, right: 50, bottom: 50, left: 50 };
    const max = d3.max(dataSet, function(d) {
        return d[1];
    });
    const xScale = d3.scaleLinear()
        .domain([1, 260])
        .range([0, width - padding.left - padding.right]);

    const yScale = d3.scaleLinear()
        .domain([0, max])
        .range([height - padding.top - padding.bottom, 0]);

    const svg = d3.select(id)
        .append('svg')
        .attr('width', width + 'px')
        .attr('height', height + 'px');

    const xAxis = d3.axisBottom()
        .scale(xScale);

    const yAxis = d3.axisLeft()
        .scale(yScale);

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding.left + ',' + (height - padding.bottom) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .call(yAxis);

    const linePath = d3.line()
        .x(function(d) {
            return xScale(d[0]);
        })
        .y(function(d) {
            return yScale(d[1]);
        });

    svg.append('g')
        .append('path')
        .attr('class', 'line-path')
        .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        .attr('d', linePath(dataSet))
        .attr('fill', 'none')
        .attr('stroke-width', 1)
        .attr('stroke', 'rgba(3,132,251,.7');

    svg.append('g')
        .selectAll('circle')
        .data(dataSet)
        .enter()
        .append('circle')
        .attr('r', 2)
        .attr('transform', function(d) {
            return 'translate(' + (xScale(d[0]) + padding.left) + ',' + (yScale(d[1]) + padding.top) + ')';
        })
        .attr('fill', '#0384FB');
}

export { lineChart };
