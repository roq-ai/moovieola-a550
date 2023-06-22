const mapping: Record<string, string> = {
  comments: 'comment',
  companies: 'company',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
