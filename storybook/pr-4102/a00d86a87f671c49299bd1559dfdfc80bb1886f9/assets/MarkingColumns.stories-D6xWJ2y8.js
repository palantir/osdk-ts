import{f as p,j as e}from"./iframe-Cd3assbj.js";import{O as i}from"./object-table-C_4Wdn3N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJDETHpR.js";import"./Table-fpqkWRlu.js";import"./index-CuezTBwu.js";import"./Dialog-DD6q0N6r.js";import"./cross-BWupVKMA.js";import"./svgIconContainer-mKWT46Ew.js";import"./useBaseUiId-BiXP69FS.js";import"./InternalBackdrop-Bfk48BSq.js";import"./composite-Ba6K1tVR.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./index-CwyP96WI.js";import"./useEventCallback-CeMIqilU.js";import"./SkeletonBar-Cic0iWBu.js";import"./LoadingCell-WSwJSa42.js";import"./ColumnConfigDialog-D1iMsssx.js";import"./DraggableList-ClnuHX0a.js";import"./search-DpDuiZ1l.js";import"./Input-CNsHRcz9.js";import"./useControlled-C6IOb7yO.js";import"./Button-DL7dr6Eo.js";import"./small-cross-D0ffFCO-.js";import"./ActionButton-CJgwBqar.js";import"./Checkbox-DVavq1Vw.js";import"./useValueChanged-BUUaJ7qm.js";import"./CollapsiblePanel-_KRgjImS.js";import"./MultiColumnSortDialog-u-IZRocT.js";import"./MenuTrigger-TQRmhiQT.js";import"./CompositeItem-Bvq7b2TM.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./getDisabledMountTransitionStyles-JnE9U1PQ.js";import"./getPseudoElementBounds-DSs2TMmL.js";import"./chevron-down-CJuFpDqg.js";import"./index-N34x7HCr.js";import"./error-DnfhABs7.js";import"./BaseCbacBanner-DADEXJEh.js";import"./makeExternalStore-BWQlbo1w.js";import"./Tooltip-CtacdFMY.js";import"./PopoverPopup-vz2lsMDk.js";import"./debounce-BBOLVlWE.js";import"./useOsdkClient-5X7bez4P.js";import"./tick-CiqYFsfj.js";import"./DropdownField-CwGIbooA.js";import"./isEqual-CwKKTIZp.js";import"./withOsdkMetrics-CmAk2EDk.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
