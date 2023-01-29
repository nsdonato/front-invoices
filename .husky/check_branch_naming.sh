#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^((feature|bugfix)\/[0-9\-]+)$'

message="Hay algo mal con el nombre de tu branch. Los nombres de los branchs de este proyecto deben seguir este contrato: $valid_branch_regex. Tu commit será rechazado. Renombra tu rama con un nombre válido e intentalo de nuevo."

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; then
    echo "$message"
    exit 1
fi

exit 0