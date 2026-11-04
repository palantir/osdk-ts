import{f as p,j as e}from"./iframe-C_XIQRaj.js";import{O as i}from"./object-table-BjgJV20o.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yovbOiJH.js";import"./Table-pt3kJltT.js";import"./index-BeXNZw_x.js";import"./Dialog-UHsoLMa-.js";import"./cross-CUZU2tfy.js";import"./svgIconContainer-BNlRuGAK.js";import"./useBaseUiId-8inAF2n-.js";import"./InternalBackdrop-CVa7hO1U.js";import"./composite-DGI-ix3e.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./index-BBWBYdHe.js";import"./useEventCallback-DLCeib9r.js";import"./SkeletonBar-yWafqoD-.js";import"./LoadingCell-BAIKpw62.js";import"./ColumnConfigDialog-1AGcRHyc.js";import"./DraggableList-BC3BFZpg.js";import"./search-BE01uCTT.js";import"./Input-DAnQbmer.js";import"./useControlled-Ch9SndTb.js";import"./Button-dB7_sFTC.js";import"./small-cross-38kc_Q0Y.js";import"./ActionButton-D6EEbVJD.js";import"./Checkbox-Cefn8fFv.js";import"./useValueChanged-DzcQQ31i.js";import"./CollapsiblePanel-DHt-foUT.js";import"./MultiColumnSortDialog-Ck74_Wvq.js";import"./MenuTrigger-CsFi9KLa.js";import"./CompositeItem-BQROqFNc.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./getDisabledMountTransitionStyles-BNbLHEBU.js";import"./getPseudoElementBounds-17tz2fhi.js";import"./chevron-down-9VTaJsMC.js";import"./index-DW1hnjgV.js";import"./error-B-SAi68c.js";import"./BaseCbacBanner-gyGh-cKU.js";import"./makeExternalStore-CTMv2DMh.js";import"./Tooltip-C9o7ip4U.js";import"./PopoverPopup-tjx05EUI.js";import"./debounce-C9ttcPrX.js";import"./useOsdkClient-DX8nswLQ.js";import"./tick-C4shc0EI.js";import"./DropdownField-oiVuVzvB.js";import"./isEqual-BXyydvGq.js";import"./withOsdkMetrics-CVYgQ3H4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
