export interface IDashboard {
  id: number;
  time: Date;
  cpu_usage: number;
  memory_usage: number;
  cpu_interrupts: number;
  cpu_calls: number;
  memory_used: number;
  memory_free: number;
  bytes_sent: number;
  bytes_received: number;
  disk_usage: number;
}