import{f as p,j as e}from"./iframe-BtV5Bfbi.js";import{O as i}from"./object-table-ZYe7tm6I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BaD02CxS.js";import"./Table-CBQvxOK4.js";import"./index-DAzHyxws.js";import"./Dialog-Um1GHs-x.js";import"./cross-BHH5GCet.js";import"./svgIconContainer-CFzNfVqM.js";import"./useBaseUiId-BC3a2pkv.js";import"./InternalBackdrop-B_jFUajW.js";import"./composite-C3xTmSSO.js";import"./index-D79nVaz6.js";import"./index-CDtXf1D5.js";import"./index-C0jKnzN3.js";import"./useEventCallback-ebp9vHiV.js";import"./SkeletonBar-B4vnzvdw.js";import"./LoadingCell-De2MP1wZ.js";import"./ColumnConfigDialog-BThrS80a.js";import"./DraggableList-CrCzHpXA.js";import"./search-mBeXzQE2.js";import"./Input-C3DTMAEb.js";import"./useControlled-DlTCUtzh.js";import"./Button-CysZ3JPI.js";import"./small-cross-DPjobAyw.js";import"./ActionButton-BlgkxXyS.js";import"./Checkbox-B-UqzIJw.js";import"./useValueChanged-CHWZQbm_.js";import"./CollapsiblePanel-CD3W91SM.js";import"./MultiColumnSortDialog-BF442a6X.js";import"./MenuTrigger-Bfyh-Slq.js";import"./CompositeItem-Byxrj2vM.js";import"./ToolbarRootContext-BUFM8kOj.js";import"./getDisabledMountTransitionStyles-BU2CuFg5.js";import"./getPseudoElementBounds-UM2c8Uko.js";import"./chevron-down-CdxAFrGc.js";import"./index-C-hRh0T_.js";import"./error-h7XYysQz.js";import"./BaseCbacBanner-5I7wRngd.js";import"./makeExternalStore-1ZTuUud2.js";import"./Tooltip-D8NuVw6n.js";import"./PopoverPopup-BWHAgMN7.js";import"./debounce-BqJT0k2X.js";import"./useOsdkClient-CpnotctQ.js";import"./tick-DOCZRs2u.js";import"./DropdownField-BC7NVBoz.js";import"./isEqual-BSakDJRq.js";import"./withOsdkMetrics-jSZ_Ki0a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
