export class ReleaseRequest {

    constructor(
       public id: string,
       public ProjectId: string,
        public Summary: string,
        public ReleaseStartDate: Date,
        public ReleaseEndDate: Date,
        public Brand: string,
        public BusinessService: string,
        public DeploymentTime: any,
        public TestingTime: any,
        public Outage: string,
        public DeploymentDuration: number,
        public SanityDuration: number,
        public Status: string
    ) { }
}
