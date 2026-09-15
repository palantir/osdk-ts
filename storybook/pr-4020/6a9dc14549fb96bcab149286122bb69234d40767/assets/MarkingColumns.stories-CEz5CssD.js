import{f as p,j as e}from"./iframe-C-CLTpsP.js";import{O as i}from"./object-table-CIflc4pu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHm86PzE.js";import"./Table-C5nW_8ni.js";import"./index-C_yrN8nJ.js";import"./Dialog-qQ2KAtWK.js";import"./cross-Ku2F5rSb.js";import"./svgIconContainer-xNOrsz7C.js";import"./useBaseUiId-CzMe2Dnq.js";import"./InternalBackdrop-CO7iGp_c.js";import"./composite-DJh0mugt.js";import"./index-D40VRMQn.js";import"./index-Cfu6rkCW.js";import"./index-D_FrlNxB.js";import"./useEventCallback-oHg7GWTB.js";import"./SkeletonBar-1j_7hiTq.js";import"./LoadingCell-BS07IboC.js";import"./ColumnConfigDialog-Be6PE_QO.js";import"./DraggableList-B4M9FN93.js";import"./search-CpRfXCb8.js";import"./Input-D24KUx_z.js";import"./useControlled-BMK5_n_x.js";import"./Button-TBXiPdkd.js";import"./small-cross-CXyJ64HZ.js";import"./ActionButton-DHfHgPik.js";import"./Checkbox-DyWv80at.js";import"./useValueChanged-CKIgQS7f.js";import"./CollapsiblePanel-BUkEhtTj.js";import"./MultiColumnSortDialog-uod5evk5.js";import"./MenuTrigger-cy43jePb.js";import"./CompositeItem-DUPoB7w7.js";import"./ToolbarRootContext-BEcPVQJt.js";import"./getDisabledMountTransitionStyles-D9D7SyXr.js";import"./getPseudoElementBounds-CwZa5orc.js";import"./chevron-down-Cj7uY9HA.js";import"./index-D7xNirGy.js";import"./error-B9ihfIkN.js";import"./BaseCbacBanner-BPN3wtD_.js";import"./makeExternalStore-DOqfc4A2.js";import"./Tooltip-Uw4j1Mbj.js";import"./PopoverPopup-DLPr24Ac.js";import"./debounce-DnqzDTdJ.js";import"./useOsdkClient-ChzNHrxJ.js";import"./tick-UvYb-w0t.js";import"./DropdownField-BvX-rLeM.js";import"./isEqual-CicJFhR1.js";import"./withOsdkMetrics-ChVqngv_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
