import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter your url' });

import QRCode from 'qrcode';

try {
  const qr = await QRCode.toString(answer, { type: 'utf8' });
  console.log(qr);
} catch (err) {
  console.error(err);
}