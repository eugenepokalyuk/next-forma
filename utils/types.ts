export interface Exercise {
    name: string;
    sets: number;
    reps: string;
    completed: boolean;
}

export interface Day {
    day: number;
    exercises: Exercise[];
}

export interface ProgramDetails {
    id: number;
    title: string;
    description: string;
    days: Day[];
}

export interface Program {
    id: number;
    title: string;
    description: string;
}
export interface ProgramItemProps {
    name: string,
    level: number,
    _program: Program[],
    _programName: string
}
