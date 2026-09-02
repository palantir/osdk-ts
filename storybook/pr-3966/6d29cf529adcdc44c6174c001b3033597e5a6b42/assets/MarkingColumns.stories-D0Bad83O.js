import{f as p,j as e}from"./iframe-DIE0F-FJ.js";import{O as i}from"./object-table-cof2d8kI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdCw_D6s.js";import"./Table-BZJjvyRp.js";import"./index-BXhLRBiI.js";import"./Dialog-Bnkkq5ka.js";import"./cross-B--tnJuh.js";import"./svgIconContainer-BGsheyOK.js";import"./useBaseUiId-BGN3IKJR.js";import"./InternalBackdrop-79eMq3pC.js";import"./composite-RzFWQe2R.js";import"./index-PVYT1aqJ.js";import"./index-BkvxGWCD.js";import"./index-FrQW-LFi.js";import"./useEventCallback-Bo0Eo9Z-.js";import"./SkeletonBar-DqHGhi1E.js";import"./LoadingCell-lh6hOK48.js";import"./ColumnConfigDialog-eGaKwVDF.js";import"./DraggableList-CXKoEXmO.js";import"./search-DuYiMzJM.js";import"./Input-BprksExu.js";import"./useControlled-BuhNUpGX.js";import"./Button-CczGpO78.js";import"./small-cross-BJcg7TMk.js";import"./ActionButton-fl2F2QSy.js";import"./Checkbox-DJyftdqh.js";import"./useValueChanged-CHqOLEmB.js";import"./CollapsiblePanel-iUwAaxXA.js";import"./MultiColumnSortDialog-DViRMDVg.js";import"./MenuTrigger-BH__6KDZ.js";import"./CompositeItem-Cu0VA6bk.js";import"./ToolbarRootContext-CovMsxmO.js";import"./getDisabledMountTransitionStyles-BGeDrQBn.js";import"./getPseudoElementBounds-CbYyKTV-.js";import"./chevron-down-Dw6bDKjP.js";import"./index-Bd5DnQxC.js";import"./error-BVPuSvQJ.js";import"./BaseCbacBanner-DF2r3SKx.js";import"./makeExternalStore-7uZMc2Bx.js";import"./Tooltip-BfeDHBZ_.js";import"./PopoverPopup-DdihVGuh.js";import"./debounce-CXfaftQK.js";import"./useOsdkClient-T1fMghRS.js";import"./tick-71oNJlSZ.js";import"./DropdownField-BDFhFm-I.js";import"./isEqual-CFz0TlTP.js";import"./withOsdkMetrics-g9qSGbZX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
