export interface IJob {
  position: string;
  company: string;
  jobLocation: string;
  jobTypeOptions: string ['full-time', 'part-time', 'remote', 'internship'];
  jobType: string;
  statusOptions: string ['interview', 'declined', 'pending'];
  status: string;
  isEditing: boolean;
  editJobId: string;
}