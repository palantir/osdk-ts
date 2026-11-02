import{f as p,j as e}from"./iframe-p7D6sarL.js";import{O as i}from"./object-table-d7k0MilF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fTfJHf6r.js";import"./Table-D2RCLefX.js";import"./index-BdE6iQIl.js";import"./Dialog-DH2LknnD.js";import"./cross-BIlvkmku.js";import"./svgIconContainer-4FKWJ0K3.js";import"./useBaseUiId-Dpj_J2PZ.js";import"./InternalBackdrop-CUea6RLj.js";import"./composite-C6-iGtUX.js";import"./index-nQDHUjnH.js";import"./index-CZrsf4r_.js";import"./index-BVmNSvna.js";import"./useEventCallback-TGDvplRl.js";import"./SkeletonBar-tX2D-Wzp.js";import"./LoadingCell-DMgLGSWB.js";import"./ColumnConfigDialog-D83GblJe.js";import"./DraggableList-CkIJ9B56.js";import"./search-0vpab4Qy.js";import"./Input-LdPdzdTD.js";import"./useControlled-D8RNaOKh.js";import"./Button-DTuYEipm.js";import"./small-cross-kvaYMftR.js";import"./ActionButton-bSAEuYzP.js";import"./Checkbox-d2mlHgHd.js";import"./useValueChanged-RektJa3Q.js";import"./CollapsiblePanel-BrMihlLp.js";import"./MultiColumnSortDialog-YKsbHBrQ.js";import"./MenuTrigger-BYCOUBBT.js";import"./CompositeItem-DPnrDtg_.js";import"./ToolbarRootContext-DHC1R4PN.js";import"./getDisabledMountTransitionStyles-BFunDdeZ.js";import"./getPseudoElementBounds-DnyF4quT.js";import"./chevron-down-CW12YW7p.js";import"./index-DrFK8Y9T.js";import"./error-orkHl4EN.js";import"./BaseCbacBanner-CClRbfi-.js";import"./makeExternalStore-DDdf7AUk.js";import"./Tooltip-B-bvds49.js";import"./PopoverPopup-yOM8q7VT.js";import"./debounce-BTn7u_ux.js";import"./useOsdkClient-C4rR5Xc2.js";import"./tick--ApORUGf.js";import"./DropdownField-BbI_YIBj.js";import"./isEqual-BmyB5nx7.js";import"./withOsdkMetrics-DMV3eX8V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
