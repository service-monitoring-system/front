import generateRandomLog from '@/utils/generate-log';

/**
 * 프로젝트 리스트 불러오기
 * @param {string} apiKey api 키
 * @returns {string[]}
 */
async function getProjects(apiKey: string): Promise<string[]> {
  console.warn(apiKey);
  return [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
    'Project 7',
    'Project 8',
    'Project 9',
    'Project 10',
  ];
}

async function getLogs(projectId: string): Promise<string[]> {
  console.warn({ projectId });
  return [
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
    generateRandomLog(),
  ];
}

export { getProjects, getLogs };
