import{f as p,j as e}from"./iframe-dUh8zyts.js";import{O as i}from"./object-table-h6uZIDX8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXymFDmG.js";import"./Table-DeI48HrA.js";import"./index-CJwC7SLj.js";import"./Dialog-BAqQTIU0.js";import"./cross-v5mQEa5y.js";import"./svgIconContainer-DPzpipae.js";import"./useBaseUiId-DxJUnLpO.js";import"./InternalBackdrop-CWW-WkKK.js";import"./composite-DxnDX5iy.js";import"./index-KzBmUVTE.js";import"./index-JHVUTeks.js";import"./index-CQjzSTkR.js";import"./useEventCallback-DyVi0gM7.js";import"./SkeletonBar-B4d9mbjS.js";import"./LoadingCell-CYWP9Nnk.js";import"./ColumnConfigDialog-CTYZhuGD.js";import"./DraggableList-BBdgSxBn.js";import"./search-CWKr1ylo.js";import"./Input-DaNsYN7f.js";import"./useControlled-Buwyj981.js";import"./isEqual-CpoLP9vt.js";import"./isObject-CVlNV3JH.js";import"./Button-1AIBoBve.js";import"./ActionButton-HZveGBx3.js";import"./Checkbox-DAXF_oU2.js";import"./useValueChanged-C9SsLJ2V.js";import"./CollapsiblePanel-uTsFkh66.js";import"./MultiColumnSortDialog-oTUQOLnP.js";import"./MenuTrigger-Cq3Awx9E.js";import"./CompositeItem-BT68WWE1.js";import"./ToolbarRootContext-DkfpkdTH.js";import"./getDisabledMountTransitionStyles-xVfndiNH.js";import"./getPseudoElementBounds-BhdrgAhY.js";import"./chevron-down-B7jyoN5P.js";import"./index-JxUIMAws.js";import"./error-CfTpnqLQ.js";import"./BaseCbacBanner-z8y6g9KL.js";import"./makeExternalStore-D8wmXuZm.js";import"./Tooltip-BtZMYdIX.js";import"./PopoverPopup-C74uJ0i4.js";import"./toNumber-BcZWTPFC.js";import"./useOsdkClient-wiEyyrMf.js";import"./tick-CBTFlChJ.js";import"./DropdownField-BQlVEKwT.js";import"./withOsdkMetrics-B-vQVve6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
