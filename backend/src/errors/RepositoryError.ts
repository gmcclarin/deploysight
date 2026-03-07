
export class RepositoryError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "RepositoryError";
    }

    public async wrapError(error:Error) {
        
    }
}