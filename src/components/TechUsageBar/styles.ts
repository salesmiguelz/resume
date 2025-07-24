import styled from "styled-components";

interface UsageSegmentProps {
  widthPercent: number;
  color: string;
}


interface LegendColorBoxProps {
  color: string;
}

export const COLORS = [
  "#6f42c1",
  "#0366d6",
  "#28a745",
  "#d73a49",
  "#f66a0a",
  "#e36209",
  "#1b7c83",
  "#005cc5",
  "#7928ca",
];

export const TECHNOLOGY_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  "C#": "#178600",
  Go: "#00ADD8",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Rust: "#dea584",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
};


export const TechUsageBarContainer = styled.div`
  width: 100%;
`;

export const UsageBar = styled.div`
  display: flex;
  height: 1.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0.0625rem 0.1875rem rgb(27 31 35 / 0.1); 
  background-color: #e1e4e8;
`;



export const UsageSegment = styled.div<UsageSegmentProps>`
  width: ${({ widthPercent }) => widthPercent}%;
  background-color: ${({ color }) => color};
  transition: width 0.3s ease;
`;

export const LegendContainer = styled.div`
  margin-top: 0.625rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme["text-sm"]};
  color: ${({ theme }) => theme["base-span"]};
`;


export const LegendColorBox = styled.span<LegendColorBoxProps>`
  display: inline-block;
  width: 0.875rem; 
  height: 0.875rem; 
  border-radius: 0.1875rem;
  background-color: ${({ color }) => color};
  margin-right: 0.375rem;
`;
