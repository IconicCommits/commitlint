/**
 * @file Rule for enforcing Iconic Commits emoji types
 */

const { ICONIC_COMMIT_CODES } = require('../constants');

// Rule to validate that the commit type (emoji) is one of the allowed iconic commit types
module.exports = (parsed, _when, _value) => {
  const { type } = parsed;
  
  // Fail if we couldn't parse a type
  if (!type) {
    return [false, 'Commit message type (emoji) not found'];
  }

  // Normalize the type to ensure it has colons
  const normalizedType = type.startsWith(':') ? type : `:${type}:`;

  // Check if the type is in our allowed list
  const isValid = ICONIC_COMMIT_CODES.includes(normalizedType);

  return [
    isValid,
    `Commit type "${type}" is not an allowed Iconic Commits type. Please use one of: ${ICONIC_COMMIT_CODES.join(', ')}`,
  ];
}; 