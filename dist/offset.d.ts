// noinspection JSUnusedGlobalSymbols

type Vertex = Object

declare class Offset {
    constructor(vertices?: Vertex[], arcSegments?: number)

    public data: (vertices: Vertex[]) => this

    public arcSegments: (arcSegments: number) => this

    public validate: (vertices: Vertex[]) => Vertex[]
    public createArc: (
        vertices: Vertex[],
        center: Vertex,
        radius: number,
        startVertex: Vertex,
        endVertex: Vertex,
        segments: number,
        outwards: boolean
    ) => Vertex[]

    public distance: (dist: number, units: string) => this
    public degreesToUis: (degrees: number, units: string) => number
    public ensureLastPoint: (vertices: Vertex[]) => Vertex[]
    public offset: (dist: number) => Vertex[]
    public margin: (dist: number) => any
    public padding: (dist: number) => any
    public offsetLine: (dist: number) => any
    public offsetLines: (dist: number) => any
    public offsetContour: (curve: any[], edges: number[]) => any
    public offsetPoint: (distance: number) => any
}

export default Offset