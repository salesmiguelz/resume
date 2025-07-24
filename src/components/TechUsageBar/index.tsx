import {
    TechUsageBarContainer,
    UsageBar,
    UsageSegment,
    LegendContainer,
    LegendItem,
    LegendColorBox,
    TECHNOLOGY_COLORS,
    COLORS,
} from "./styles";

interface TechUsage {
    name: string;
    percentage: number;
}

interface TechUsageBarProps {
    data: TechUsage[];
    isLanguage?: boolean;
}

export function TechUsageBar({ data, isLanguage = true }: TechUsageBarProps) {
    const total = data.reduce((acc, cur) => acc + cur.percentage, 0);
    const normalized = total === 100
        ? data
        : data.map(d => ({ ...d, percentage: (d.percentage / total) * 100 }));

    const allColors = Object.values(TECHNOLOGY_COLORS);

    function getColor(name: string, idx: number) {
        if (isLanguage) {
            return TECHNOLOGY_COLORS[name] ?? "#cccccc";
        } else {
            return COLORS[idx % allColors.length];
        }
    }

    return (
        <TechUsageBarContainer>
            <UsageBar>
                {normalized.map((tech, i) => (
                    <UsageSegment
                        key={tech.name}
                        widthPercent={tech.percentage}
                        color={getColor(tech.name, i)}
                        title={`${tech.name}: ${tech.percentage.toFixed(1)}%`}
                    />
                ))}
            </UsageBar>

            <LegendContainer>
                {normalized.map((tech, i) => (
                    <LegendItem key={tech.name}>
                        <LegendColorBox color={getColor(tech.name, i)} />
                        <span>
                            {tech.name} — {tech.percentage.toFixed(1)}%
                        </span>
                    </LegendItem>
                ))}
            </LegendContainer>
        </TechUsageBarContainer>
    );
}
