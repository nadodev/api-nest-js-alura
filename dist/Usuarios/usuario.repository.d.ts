export declare class usuarioRepository {
    private users;
    save(user: Array<string>): Promise<void>;
    findAll(): Promise<any[]>;
}
