import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colorMappings = {
  // Orange colors
  'orange-50': 'primary-50',
  'orange-100': 'primary-100',
  'orange-200': 'primary-200',
  'orange-300': 'primary-300',
  'orange-400': 'primary-400',
  'orange-500': 'primary-500',
  'orange-600': 'primary-600',
  'orange-700': 'primary-700',
  'orange-800': 'primary-800',
  'orange-900': 'primary-900',
  'orange-950': 'primary-950',

  // Gray colors
  'gray-50': 'secondary-50',
  'gray-100': 'secondary-100',
  'gray-200': 'secondary-200',
  'gray-300': 'secondary-300',
  'gray-400': 'secondary-400',
  'gray-500': 'secondary-500',
  'gray-600': 'secondary-600',
  'gray-700': 'secondary-700',
  'gray-800': 'secondary-800',
  'gray-900': 'secondary-900',
  'gray-950': 'secondary-950',

  // Text colors
  'text-gray-900': 'text-text-primary',
  'text-gray-600': 'text-text-secondary',
  'text-gray-500': 'text-text-secondary',
  'text-gray-400': 'text-text-secondary',
  'text-white': 'text-text-light',

  // Background colors
  'bg-white': 'bg-background',
  'bg-gray-50': 'bg-background-light',
  'bg-gray-900': 'bg-background-dark',

  // Border colors
  'border-gray-200': 'border-border-light',
  'border-gray-300': 'border-border',
  'border-gray-600': 'border-border-dark',
};

function updateColors(content) {
  let updatedContent = content;
  
  // Update color classes
  Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(`\\b${oldColor}\\b`, 'g');
    updatedContent = updatedContent.replace(regex, newColor);
  });

  return updatedContent;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updatedContent = updateColors(content);

  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated colors in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(filePath);
    } else if (
      stat.isFile() &&
      (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js'))
    ) {
      processFile(filePath);
    }
  });
}

// Start processing from the src directory
const srcDir = path.join(__dirname, '..', 'src');
walkDir(srcDir);
console.log('Color update complete!'); 