PATH=$(npm bin):$PATH

parcel build parsing/src/ugg.js \
    --target browser \
    --out-dir ./parsing/dist \
    --no-source-maps \
    --experimental-scope-hoisting \
    --out-file ugg.tmp.js

google-closure-compiler \
    -O ADVANCED parsing/dist/ugg.tmp.js \
    --js_output_file parsing/dist/ugg.prod.js \
    --language_out ECMASCRIPT_2019