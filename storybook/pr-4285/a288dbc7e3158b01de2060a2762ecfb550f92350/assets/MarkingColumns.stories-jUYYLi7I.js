import{f as p,j as e}from"./iframe-CTMkKkzw.js";import{O as i}from"./object-table-BoI1Twv3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DG8pwmv3.js";import"./Table-BbZEYEYW.js";import"./index-BL_iYgDS.js";import"./Dialog-DQWTaCay.js";import"./cross-B-D9SFl0.js";import"./svgIconContainer-BUps9CL-.js";import"./useBaseUiId-Nc3myLqM.js";import"./InternalBackdrop-svBxXw7w.js";import"./composite-np7yuSJU.js";import"./index-B9bA0pQd.js";import"./index-KMN5SPjN.js";import"./index-BJk5b2Mi.js";import"./useEventCallback-f_5J5lhm.js";import"./SkeletonBar-Cam1cO27.js";import"./LoadingCell-nmJ0UveC.js";import"./ColumnConfigDialog-CpB6YrKO.js";import"./DraggableList-BqU_NHOS.js";import"./search-8dNzS2xV.js";import"./Input-SxG8NTwK.js";import"./useControlled-Dmn8OKSb.js";import"./Button-u7wDd7Jy.js";import"./small-cross-reWYho1p.js";import"./ActionButton-DwFZ69ro.js";import"./Checkbox-DsqG9F4o.js";import"./useValueChanged-DAzMvShK.js";import"./CollapsiblePanel-q_Q68xut.js";import"./MultiColumnSortDialog-BYp7xfWY.js";import"./MenuTrigger-3EqQfhmD.js";import"./CompositeItem-CSULberz.js";import"./ToolbarRootContext-CIGDW9Ar.js";import"./getDisabledMountTransitionStyles-DWNlrkIU.js";import"./getPseudoElementBounds-CcioB7ar.js";import"./chevron-down-BCsUFncR.js";import"./index-C4YYp6_d.js";import"./error-BFPACif0.js";import"./BaseCbacBanner-CNBD9coo.js";import"./makeExternalStore-CLmOAONC.js";import"./Tooltip-DQT__ibc.js";import"./PopoverPopup-CqAzZfVr.js";import"./debounce-ByrkZFkK.js";import"./useOsdkClient-DH7pH4yQ.js";import"./tick-ZXxKzXjV.js";import"./DropdownField-Cg1kzpH9.js";import"./isEqual-CCbd-MC2.js";import"./withOsdkMetrics-BkagLhYt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
