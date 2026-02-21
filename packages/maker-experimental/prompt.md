Ok in `/Users/aparson/Desktop/oac-rewrite-test` I have a test case for maker and maker-experimental clis. maker-experimental is a re-implementation of the maker package + a bunch of java code that should create the exact same output. You job will be to verify that maker-experimental produces the same output and fix it if it doesn't.

So for broader context maker consumes the JS definition of an ontology and returns OntologyIr* types. Then there is a java package (`/Volumes/git/second/ontology-metadata-service/ontology-as-code/src/main/java/com/palantir/ontology/ascode/OntologyAsCodeBlockGenerator.java`) that produces the BlockData and Shapes. maker-experimental is a re-implementation that consumes the same JS types but produces the BlockData and Shapes without java. 

Since creating maker-experimental there have been a bunch of updates to maker and even during the creation process I noticed some parts of it didn't work. To run the test case first you should build the maker and maker-experimental packages by running `pnpm turbo build --filter=@osdk/maker-experimental` then run `npx /Volumes/git/osdk-ts/packages/maker-experimental -i ontology/dist/ontology.js --apiNamespace "com.palantir.aparson1"` from the test directory. 


You can find the results of maker + java run of the same ontology here:

**block data**: /Users/aparson/Desktop/oac-rewrite-test/build/java-run/tmp/marketplace/block_set/code_blocks/06554e0d-6581-35bc-9028-3fc344e30b3d 2/files/ontology.json

**shapes**: /Users/aparson/Desktop/oac-rewrite-test/build/java-run/tmp/marketplace/block_set/code_blocks/06554e0d-6581-35bc-9028-3fc344e30b3d 2/generatedManifest.v1.json

Please note that the structure of the shapes file might be in a slightly different from java, but the inputs and outputs fields should be exactly the same for maker-experimental. 