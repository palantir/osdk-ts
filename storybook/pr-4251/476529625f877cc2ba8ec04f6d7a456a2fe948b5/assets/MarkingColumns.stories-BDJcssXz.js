import{f as p,j as e}from"./iframe-Cr8Hjkao.js";import{O as i}from"./object-table-DmaCWYaa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CeOoJBco.js";import"./Table-CtsjfS5d.js";import"./index-DRoLNVdY.js";import"./Dialog-Csp9oEdD.js";import"./cross-95TP_pkM.js";import"./svgIconContainer-F-4GL1p-.js";import"./useBaseUiId-BJlElnor.js";import"./InternalBackdrop-DTn82lWC.js";import"./composite-EK_Kp5ER.js";import"./index-ALPgotdH.js";import"./index-ByH-ncsi.js";import"./index-CBMMCh_Y.js";import"./useEventCallback-Cl1bqirj.js";import"./SkeletonBar-DcJRoyj-.js";import"./LoadingCell-CepCHFHB.js";import"./ColumnConfigDialog-xKdx9uqa.js";import"./DraggableList-Cr7CdgZe.js";import"./search-COCkrCII.js";import"./Input-DELuQIly.js";import"./useControlled-qAgRHhDO.js";import"./Button-C24gAlnE.js";import"./small-cross-b_1C3CxG.js";import"./ActionButton-CfImC9cJ.js";import"./Checkbox-Drwo2FPH.js";import"./useValueChanged-DMJhOgzX.js";import"./CollapsiblePanel-DYpC0oKE.js";import"./MultiColumnSortDialog-CBH9qJ7p.js";import"./MenuTrigger-G68osvp2.js";import"./CompositeItem-RD-StT-2.js";import"./ToolbarRootContext-C1DQaCtc.js";import"./getDisabledMountTransitionStyles-DzB4-odI.js";import"./getPseudoElementBounds-DwuMXUq1.js";import"./chevron-down-DyxXbZDq.js";import"./index-DMNMq9tJ.js";import"./error-DaMdq9UW.js";import"./BaseCbacBanner-BW46e1WM.js";import"./makeExternalStore-CCNrGOqq.js";import"./Tooltip-CEYl8ywn.js";import"./PopoverPopup-jx0tch27.js";import"./debounce-Dfpcq8HD.js";import"./useOsdkClient-BUR86U5t.js";import"./tick-CateFlg_.js";import"./DropdownField-Dw4F6h_u.js";import"./isEqual-D2Nu86By.js";import"./withOsdkMetrics-ChwR2mE5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
