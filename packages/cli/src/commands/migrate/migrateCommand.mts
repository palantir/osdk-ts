/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { consola } from 'consola';
import type { MigrateArgs } from './MigrateArgs.js';
import { updateIndexFile } from './updaters/updateIndexFile.js';
import { updateEnvFiles } from './updaters/updateEnvFiles.js';
import { updateClientFile } from './updaters/updateClientFile.js';
import { checkGitStatus, confirmProceedMigration, validateRequiredFiles, backupInstructions } from './utils.js';

export default async function migrateCommand(
  { ontology, clientPath, indexPath }: MigrateArgs,
): Promise<void> {
  consola.start(`Migration started`);
  try {
    const gitCheckResult = checkGitStatus();
    if (gitCheckResult.shouldConfirm) {
      const shouldProceed = await confirmProceedMigration(gitCheckResult.message);
      if (!shouldProceed) {
        consola.info('Migration cancelled');
        return;
      }
    }

    const validationResult = await validateRequiredFiles(clientPath, indexPath);
    if (!validationResult.success) {
      consola.error(validationResult.message);
      return;
    }
    
    const clientFileInfo = await updateClientFile(clientPath);
    const indexFileInfo = await updateIndexFile(indexPath);
    const envFilesInfo = await updateEnvFiles(ontology);
    backupInstructions(clientFileInfo, indexFileInfo, envFilesInfo);
  } catch (error) {
    consola.error(`Migration failed: ${error}`);
  }
}
