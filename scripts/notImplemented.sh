#!/usr/bin/env bash

grep -rHn "not implemented" packages examples monorepo | grep -v '/build/' | cat -n