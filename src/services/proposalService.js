import api from "./api";

export const submitProposal = async (projectId, proposalData) => {
  const response = await api.post(
    
    `/proposals/${projectId}`,
    proposalData
  );
console.log(response)
  return response.data;
};

export const getMyProposals = async ()=>{
    const response = await api.get('/proposals/me');

    return response.data;
}