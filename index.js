const regex = /^(?<pre>git@)(?<home>[^\s:]+):(?<any>[^\s]+[^/\s])$/;
const replacement = 'https://$<home>/$<any>';

module.exports = (ssh) => {
  const tmp = ssh.replace(regex, replacement);
  if (tmp === ssh) {
    throw new SyntaxError('Not SSH url');
  }
  return tmp;
};
