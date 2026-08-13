import{f as p,j as e}from"./iframe-C-P2XTps.js";import{O as i}from"./object-table-Bq9MDu7_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2ciRt_1.js";import"./Table-DVwBGtjK.js";import"./index-TAkEmTOr.js";import"./Dialog-CXf6dGMs.js";import"./cross-C-FokI4v.js";import"./svgIconContainer-CrU3EDkF.js";import"./useBaseUiId-CWFhVJhL.js";import"./InternalBackdrop-DN8Fgs_M.js";import"./composite-BK1c30lA.js";import"./index-CpJX8S-W.js";import"./index-DBmKylag.js";import"./index-I0ozREYH.js";import"./useEventCallback-B_mhEv2A.js";import"./SkeletonBar-BYO6lwk8.js";import"./LoadingCell-SjPMbpcz.js";import"./ColumnConfigDialog-EIQNHS4y.js";import"./DraggableList-BEOqV1y4.js";import"./search-l1NECfxN.js";import"./Input-0Zox7t1W.js";import"./useControlled-DNAq-ux-.js";import"./isEqual-CgKCGaj5.js";import"./isObject-Oa6eWQo3.js";import"./Button-BZmN5Brq.js";import"./ActionButton-Csbt1rAg.js";import"./Checkbox-DAv4V2db.js";import"./useValueChanged-WBgfRasG.js";import"./CollapsiblePanel-CwGcW1pA.js";import"./MultiColumnSortDialog-DkFJZRiJ.js";import"./MenuTrigger-XSCB7Qf-.js";import"./CompositeItem-Ej9oQnQL.js";import"./ToolbarRootContext-1n5Nj85T.js";import"./getDisabledMountTransitionStyles-9ubOsA0f.js";import"./getPseudoElementBounds-eIHoREO7.js";import"./chevron-down-Dx0BgYzW.js";import"./index-DTSw3ggz.js";import"./error-ClI8SWaI.js";import"./BaseCbacBanner-BtJRxHFH.js";import"./makeExternalStore-D0f_pEt1.js";import"./Tooltip-DLrh6rvI.js";import"./PopoverPopup-C1mLTGSJ.js";import"./debounce-BYcEFv3c.js";import"./useOsdkClient-C-QBDUEZ.js";import"./tick-BLOKre96.js";import"./DropdownField-CjWAPAN4.js";import"./withOsdkMetrics-DehsSUGO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
