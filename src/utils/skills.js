

export const addSkill = (skills, skillInput) => {

  if (!skillInput.trim()) return;

  if (formData.skills.includes(skillInput.trim())) return;

  setFormData({
    ...formData,
    skills: [...formData.skills, skillInput.trim()]
  });

  setSkillInput("");

  return [...skills, skill];

};

export const removeSkill = (skills,skill) => {

  setFormData({
    ...formData,
    skills: formData.skills.filter(s => s !== skill)
  });
 return skills
};
