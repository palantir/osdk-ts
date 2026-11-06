import{f as p,j as e}from"./iframe-V97s0gAW.js";import{O as i}from"./object-table-BhMqDpxN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3HSTeFHP.js";import"./Table-CP1pcPri.js";import"./index-DpgCkzdC.js";import"./Dialog-DDTOxf51.js";import"./cross-D1lQCJW7.js";import"./svgIconContainer-DcsfwCI6.js";import"./useBaseUiId-Bab3TUT0.js";import"./InternalBackdrop-DON14_Jh.js";import"./composite-CbcGiMzv.js";import"./index-mHMhPLDN.js";import"./index-D4Dl5EM_.js";import"./index-DiDYqxft.js";import"./useEventCallback-CdaXvWI6.js";import"./SkeletonBar-BJfs4zM-.js";import"./LoadingCell-DGMorCmc.js";import"./ColumnConfigDialog-CK7aMFL8.js";import"./DraggableList-DWoD67oE.js";import"./search-B7TbVw6W.js";import"./Input-C6RT56dE.js";import"./useControlled-CturneKY.js";import"./Button-BO5_Znwd.js";import"./small-cross-xW5wyF61.js";import"./ActionButton-B4eNZhjq.js";import"./Checkbox-DTzO9krD.js";import"./useValueChanged-7VQbrE2E.js";import"./CollapsiblePanel-DzQCvcLA.js";import"./MultiColumnSortDialog-5NywVi3s.js";import"./MenuTrigger-COgQ6_1D.js";import"./CompositeItem-Dp8TKMUS.js";import"./ToolbarRootContext-Cm4dkNA7.js";import"./getDisabledMountTransitionStyles-C0GpbwGk.js";import"./getPseudoElementBounds-BZTN0a4u.js";import"./chevron-down-D6e3j0_s.js";import"./index-DF7F2J8l.js";import"./error-3rN_CcIw.js";import"./BaseCbacBanner-JWXSeG4M.js";import"./makeExternalStore-CCWCHpFp.js";import"./Tooltip-pzXiOa2u.js";import"./PopoverPopup-DT3NfX8h.js";import"./debounce-BepasE64.js";import"./useOsdkClient-8pQnCGJ8.js";import"./tick-DuScy4TP.js";import"./DropdownField-Beas9bGg.js";import"./isEqual-Bi3Ylt0j.js";import"./withOsdkMetrics-OMK47pZ9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
