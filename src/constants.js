/**
 * @file Constants for Iconic Commits commitlint plugin
 */

// Based on Iconic Commits specification
// List of allowed commit types with their emoji and description
const ICONIC_COMMIT_TYPES = [
  { icon: '✨', code: ':sparkles:', description: 'Introduce new features' },
  { icon: '🐛', code: ':bug:', description: 'Fix a bug' },
  { icon: '📚', code: ':books:', description: 'Add or update documentation' },
  { icon: '♻️', code: ':recycle:', description: 'Refactor code' },
  { icon: '🧪', code: ':test_tube:', description: 'Add or update tests' },
  { icon: '🎨', code: ':art:', description: 'Improve structure/format of the code' },
  { icon: '⚡️', code: ':zap:', description: 'Improve performance' },
  { icon: '🔒', code: ':lock:', description: 'Fix security issues' },
  { icon: '⬆️', code: ':arrow_up:', description: 'Upgrade dependencies' },
  { icon: '⬇️', code: ':arrow_down:', description: 'Downgrade dependencies' },
  { icon: '✅', code: ':white_check_mark:', description: 'Add, update, or pass tests' },
  { icon: '🔧', code: ':wrench:', description: 'Add or update configuration files' },
  { icon: '🚀', code: ':rocket:', description: 'Deploy stuff' },
  { icon: '💄', code: ':lipstick:', description: 'Add or update the UI and style files' },
  { icon: '🔥', code: ':fire:', description: 'Remove code or files' },
  { icon: '🚧', code: ':construction:', description: 'Work in progress' },
  { icon: '👷', code: ':construction_worker:', description: 'Add or update CI build system' },
  { icon: '📝', code: ':memo:', description: 'Add or update documentation' }
];

// Extract the emoji codes for validation
const ICONIC_COMMIT_CODES = ICONIC_COMMIT_TYPES.map(type => type.code);

module.exports = {
  ICONIC_COMMIT_TYPES,
  ICONIC_COMMIT_CODES,
}; 