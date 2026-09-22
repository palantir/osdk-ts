import{f as p,j as e}from"./iframe-b99LbP9m.js";import{O as i}from"./object-table-pZnWuds5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVhK3iQp.js";import"./Table-BRLCpUgA.js";import"./index-lvCDhi6D.js";import"./Dialog-CbNqy00v.js";import"./cross-DIxLp0N9.js";import"./svgIconContainer-BihU0y1S.js";import"./useBaseUiId-6kqzncOU.js";import"./InternalBackdrop-COXnZoqL.js";import"./composite-CtvoA4ac.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./index-DPKFJAUb.js";import"./useEventCallback-BRh0F3Gc.js";import"./SkeletonBar-DiB2OCWt.js";import"./LoadingCell-lj19Zhoi.js";import"./ColumnConfigDialog-Cjx8ju9e.js";import"./DraggableList-Dw54j7lg.js";import"./search-CC467d8u.js";import"./Input-hdA3kWA3.js";import"./useControlled-ByvbEfpA.js";import"./Button-C5yqAo8p.js";import"./small-cross-CVBamzYp.js";import"./ActionButton-CgHWaoxM.js";import"./Checkbox-f37FVRU5.js";import"./useValueChanged-CqszMfOm.js";import"./CollapsiblePanel-Bq-rJ7Pf.js";import"./MultiColumnSortDialog-BBbGd2Rj.js";import"./MenuTrigger-BGm_gEHF.js";import"./CompositeItem-CKc0sSZR.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./getDisabledMountTransitionStyles-4C3EEDb3.js";import"./getPseudoElementBounds-CP-KB6E2.js";import"./chevron-down-D4nxFd5U.js";import"./index-DLEC-1eU.js";import"./error-DAEmkM_5.js";import"./BaseCbacBanner-BF3-W7TS.js";import"./makeExternalStore-BPDPOT32.js";import"./Tooltip-GFqETB97.js";import"./PopoverPopup-CtpNbWOs.js";import"./debounce-BQ_I9Yzc.js";import"./useOsdkClient-B5OWGTmv.js";import"./tick-DHP_OEKV.js";import"./DropdownField-B091wn9X.js";import"./isEqual-DCogO1wH.js";import"./withOsdkMetrics-C6RLviWF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
