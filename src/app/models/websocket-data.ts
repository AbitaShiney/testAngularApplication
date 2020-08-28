export interface iWebSocket {
    sensor: {
        uuid: string;
        motor_rpm: number;
        output: number;
    },
    lidar: {
        memory: {
            total: number;
            available: number;
        },
        cpu: {
            "1": number;
            "2": number;
        }
    }
}