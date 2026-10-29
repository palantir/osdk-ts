import{f as p,j as e}from"./iframe-CVDpL90O.js";import{O as i}from"./object-table-C4OyoEoQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIPjJPKp.js";import"./Table-m3siUyni.js";import"./index-BF0HWBEB.js";import"./Dialog-Bbk56tVZ.js";import"./cross-vYjtUHUt.js";import"./svgIconContainer-XCs7jcMS.js";import"./useBaseUiId-BCC_HzQ6.js";import"./InternalBackdrop-BZZ5bQIp.js";import"./composite-lCZw7hw2.js";import"./index-Ds1Aymw0.js";import"./index-CULs0xL-.js";import"./index-Dtg66FsS.js";import"./useEventCallback-srOVomUh.js";import"./SkeletonBar-CqE5Ixfq.js";import"./LoadingCell-Vzzqg9Lm.js";import"./ColumnConfigDialog-EkF4Nkow.js";import"./DraggableList-CdbA5-07.js";import"./search-DRW19Kos.js";import"./Input-j-X_dej_.js";import"./useControlled-DZoipFBP.js";import"./Button-BH6PW13i.js";import"./small-cross-DZOaDD7A.js";import"./ActionButton-C7QU8r5M.js";import"./Checkbox-B5xiFf3B.js";import"./useValueChanged-DXsPmKg2.js";import"./CollapsiblePanel-Cp-hOTel.js";import"./MultiColumnSortDialog-Bmkk9Lni.js";import"./MenuTrigger-BK4NkiMG.js";import"./CompositeItem-Cv4L9909.js";import"./ToolbarRootContext-ibPgpNdZ.js";import"./getDisabledMountTransitionStyles-B9VELkTQ.js";import"./getPseudoElementBounds-Die0kok9.js";import"./chevron-down-h1ntsUGU.js";import"./index-DY-TprZd.js";import"./error-DF2Qy4tB.js";import"./BaseCbacBanner-DxmNGCYc.js";import"./makeExternalStore-fRsFu06A.js";import"./Tooltip-CqTiZ4gu.js";import"./PopoverPopup-D4SYJzOZ.js";import"./debounce-C-oR-6vV.js";import"./useOsdkClient-BiLmRsAv.js";import"./tick-BMFIqZXK.js";import"./DropdownField-BM5OcVuZ.js";import"./isEqual-BaPrlMHb.js";import"./withOsdkMetrics-Bl2KNckA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
