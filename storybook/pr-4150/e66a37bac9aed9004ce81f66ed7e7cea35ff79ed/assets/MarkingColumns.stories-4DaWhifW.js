import{f as p,j as e}from"./iframe-BZeHWWBM.js";import{O as i}from"./object-table-BhOtAktk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMO_GDYl.js";import"./Table-CtpnQnFR.js";import"./index-BghiDG-K.js";import"./Dialog-uPbNDu_k.js";import"./cross-DAs0FyHT.js";import"./svgIconContainer-P70a1ca6.js";import"./useBaseUiId-DiD1p4wn.js";import"./InternalBackdrop-7kOTzaTU.js";import"./composite-BY8Pgpco.js";import"./index-ssl2u5fL.js";import"./index-Demepb3A.js";import"./index-CDPIdeSA.js";import"./useEventCallback-CaF-XjRW.js";import"./SkeletonBar-O3cIgH1_.js";import"./LoadingCell-CX4SJ0pd.js";import"./ColumnConfigDialog-TDJ6XF0y.js";import"./DraggableList-D2VIARNN.js";import"./search-MR2i21ku.js";import"./Input-d8OQBydu.js";import"./useControlled-BuZ3yaTV.js";import"./Button-SYhaaomn.js";import"./small-cross-dSt8HMXx.js";import"./ActionButton-D2_3iW1e.js";import"./Checkbox-Iu5XV1tF.js";import"./useValueChanged-DSSRu0uz.js";import"./CollapsiblePanel-CXOTz_Ao.js";import"./MultiColumnSortDialog-Cl10cEik.js";import"./MenuTrigger-CiQc6kqu.js";import"./CompositeItem-DFk3jTw_.js";import"./ToolbarRootContext-Uoj_ihh4.js";import"./getDisabledMountTransitionStyles-CzV6u0eN.js";import"./getPseudoElementBounds-BoNdsgY-.js";import"./chevron-down-C-j3k1fh.js";import"./index-DA_WNnQg.js";import"./error-Bpqu1oQt.js";import"./BaseCbacBanner-BguiVkKO.js";import"./makeExternalStore-COW8GNP_.js";import"./Tooltip-gQ7xzq_d.js";import"./PopoverPopup-DUzxW_R3.js";import"./debounce-cOw_HdqP.js";import"./useOsdkClient-GuN9YFRq.js";import"./tick-DpfMUnCE.js";import"./DropdownField-D8jUrmhI.js";import"./isEqual-DF9bsTAI.js";import"./withOsdkMetrics-BwLrqkyr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
