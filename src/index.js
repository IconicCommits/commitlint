/**
 * @file Commitlint plugin for Iconic Commits
 */

const rules = {
  // Rule for checking if commit type is from the Iconic Commits list
  'iconic-commits-type-enum': require('./rules/iconicCommitsTypeEnum'),
};

module.exports = {
  rules,
}; 