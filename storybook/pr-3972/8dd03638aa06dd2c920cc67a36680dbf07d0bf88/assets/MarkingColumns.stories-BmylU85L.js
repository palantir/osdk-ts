import{f as p,j as e}from"./iframe-8UpnOuPx.js";import{O as i}from"./object-table-47NTCnrV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9D_7nkx.js";import"./Table-C-OX5Mmy.js";import"./index-De8YaqE2.js";import"./Dialog-C_aXCr_n.js";import"./cross-CNviQWqx.js";import"./svgIconContainer-Dv8gj-hz.js";import"./useBaseUiId-CBuqVLxg.js";import"./InternalBackdrop-Cv2tFHev.js";import"./composite-2992q4P-.js";import"./index-BjHFI_ak.js";import"./index-4j-jzydQ.js";import"./index-C0LjKbrF.js";import"./useEventCallback-DahdGvFR.js";import"./SkeletonBar-DGlriSfZ.js";import"./LoadingCell-COBeQmHE.js";import"./ColumnConfigDialog-Bd8DMLkI.js";import"./DraggableList-Da1_VcAA.js";import"./search-CGAlUSeA.js";import"./Input-Ce_IFTco.js";import"./useControlled-BGItKX1D.js";import"./Button-D9_pkmYb.js";import"./small-cross-QHw-SLde.js";import"./ActionButton-Cut8o54T.js";import"./Checkbox-DShr4uRv.js";import"./useValueChanged-BCpzUsKM.js";import"./CollapsiblePanel-DfoKT48S.js";import"./MultiColumnSortDialog-DywAATGA.js";import"./MenuTrigger-CR-NhJqN.js";import"./CompositeItem-Bt6ccxDB.js";import"./ToolbarRootContext-fX_rXRRK.js";import"./getDisabledMountTransitionStyles-C_DFfRTC.js";import"./getPseudoElementBounds-DzzTS3aG.js";import"./chevron-down-DYX07tej.js";import"./index-B_eZJaHx.js";import"./error-COIsH0tw.js";import"./BaseCbacBanner-nK67On6a.js";import"./makeExternalStore-CEpF0fDK.js";import"./Tooltip-H_PuzLmD.js";import"./PopoverPopup-CiQt-IJa.js";import"./debounce-CqOQQWws.js";import"./useOsdkClient-BPuOXI3X.js";import"./tick-CSfWbNPB.js";import"./DropdownField-BdD-65We.js";import"./isEqual-B0qlerf1.js";import"./withOsdkMetrics-Br_JaF2q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
