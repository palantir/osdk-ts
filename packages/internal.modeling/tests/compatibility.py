# Copyright 2026 Palantir Technologies, Inc. All rights reserved.
# Licensed under the Apache License, Version 2.0.

import importlib.util
import json
from pathlib import Path
import sys

from pydantic import TypeAdapter, ValidationError

root = Path(sys.argv[1])
spec = importlib.util.spec_from_file_location("generated_models", root / "models.py")
models = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = models
spec.loader.exec_module(models)
adapter = TypeAdapter(models.Example)
fixtures = json.loads((root / "fixtures.json").read_text())
for index, fixture in enumerate(fixtures):
    try:
        instance = adapter.validate_json(fixture["json"])
    except ValidationError:
        assert not fixture["valid"], f"Pydantic rejected valid Zod fixture {index}"
    else:
        assert fixture["valid"], f"Pydantic accepted invalid Zod fixture {index}"
        wire = json.loads(fixture["json"])
        assert type(instance.revision) is int, f"Int64 was not decoded to an int in fixture {index}"
        assert instance.revision == int(wire["revision"])
        if "revisionHistory" in wire:
            assert all(type(value) is int for value in instance.revisionHistory)
        assert json.loads(adapter.dump_json(instance, by_alias=True)) == wire, f"Round-trip changed fixture {index}"

# Native Python integers are useful for authoring; JSON integers must still arrive as strings.
int64_adapter = TypeAdapter(models.Int64)
for value in [0, -1, 9007199254740993, -(2 ** 63), 2 ** 63 - 1]:
    instance = int64_adapter.validate_python(value)
    assert type(instance) is int and instance == value
    assert int64_adapter.dump_python(instance) == value
    assert json.loads(int64_adapter.dump_json(instance)) == str(value)
for value in [True, 1.0, 2 ** 63, -(2 ** 63) - 1]:
    try:
        int64_adapter.validate_python(value)
    except ValidationError:
        pass
    else:
        raise AssertionError(f"Accepted invalid native int64 {value!r}")

# Both schema modes describe the wire format, not Python's in-memory integer representation.
for mode in ("validation", "serialization"):
    schema = adapter.json_schema(mode=mode)
    assert schema["$defs"]["Int64"]["type"] == "string"
    assert schema["$defs"]["Int64"]["format"] == "int64"
print(f"Validated {len(fixtures)} shared Zod/Pydantic fixtures")
