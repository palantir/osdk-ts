import{f as p,j as e}from"./iframe-Dg2rP9Po.js";import{O as i}from"./object-table-D0DMCmzF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C62MX-HV.js";import"./Table-DOz1Ura5.js";import"./index-Bk_L59vo.js";import"./Dialog-CKxIsWON.js";import"./cross-ByHx960q.js";import"./svgIconContainer-CrwUJVFh.js";import"./useBaseUiId-BrByyFcr.js";import"./InternalBackdrop-BhWyWYDG.js";import"./composite-DwarrJ_d.js";import"./index-D51t4EhI.js";import"./index-BTK-QJaX.js";import"./index-BuWg-_ox.js";import"./useEventCallback-y6eWXZb0.js";import"./SkeletonBar-Dyoh3Oqn.js";import"./LoadingCell-Du-JRye8.js";import"./ColumnConfigDialog-DCoEngsL.js";import"./DraggableList-Dt8o8fPU.js";import"./search-7S2iycUI.js";import"./Input-CLdANV8F.js";import"./useControlled-CPVhNzyr.js";import"./Button-3owJgmEd.js";import"./small-cross-DW-MJuWV.js";import"./ActionButton-vxF6e2oH.js";import"./Checkbox-BB_EHT7U.js";import"./useValueChanged-BFNbOulV.js";import"./CollapsiblePanel-Cdh4aus9.js";import"./MultiColumnSortDialog-BzJiY7K7.js";import"./MenuTrigger-DG7QOV05.js";import"./CompositeItem-Iitq3-0I.js";import"./ToolbarRootContext-DWEMgL85.js";import"./getDisabledMountTransitionStyles-BVaUCF8Y.js";import"./getPseudoElementBounds-B2mLNmmG.js";import"./chevron-down-DghOfrxO.js";import"./index-eL-YB9kv.js";import"./error-CpY5WHNo.js";import"./BaseCbacBanner-BcDeBoVZ.js";import"./makeExternalStore-CyhjwBot.js";import"./Tooltip-BYn5P6nw.js";import"./PopoverPopup-BUDSqNW1.js";import"./debounce-C5ixXv23.js";import"./useOsdkClient-ecHM5SMR.js";import"./tick-D-NdcMXs.js";import"./DropdownField-B07IQ1gj.js";import"./isEqual-BMQjVVox.js";import"./withOsdkMetrics-DWMO9N5k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
