import{f as p,j as e}from"./iframe-DY5oFFGp.js";import{O as i}from"./object-table-BzZQIJps.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BXi2a6I0.js";import"./Table-TJd2tkZN.js";import"./index-oMhfC8Kw.js";import"./Dialog-CBajenF5.js";import"./cross-CrLmq7i6.js";import"./svgIconContainer-FemtaYki.js";import"./useBaseUiId-BY-XTexC.js";import"./InternalBackdrop-CGBqK3GB.js";import"./composite-DcO2MQSU.js";import"./index-CgbXm8hK.js";import"./index-BKhB25n7.js";import"./index-DfdK9p_z.js";import"./useEventCallback-DMWfU_RW.js";import"./SkeletonBar-BujnrZlh.js";import"./LoadingCell-CYSwsJAw.js";import"./ColumnConfigDialog-CXuIBguu.js";import"./DraggableList-DuVo9fyY.js";import"./search-fXpFyeuf.js";import"./Input-nNrj-1aN.js";import"./useControlled-Dzg4K4oI.js";import"./isEqual-BsqP0w72.js";import"./isObject-CH_C7Tpz.js";import"./Button-3kT2y51o.js";import"./ActionButton-CARaLbew.js";import"./Checkbox-BHclowAu.js";import"./useValueChanged-BhrMLCu8.js";import"./CollapsiblePanel-D_javXPT.js";import"./MultiColumnSortDialog-CuX6PlQZ.js";import"./MenuTrigger-WQlSInls.js";import"./CompositeItem-mas1MCsD.js";import"./ToolbarRootContext-Dt5uDgd5.js";import"./getDisabledMountTransitionStyles-DT47_0Y1.js";import"./getPseudoElementBounds-DjDSW00Z.js";import"./chevron-down-ClPPaZyK.js";import"./index-D67MIB25.js";import"./error-TrJIu1GL.js";import"./BaseCbacBanner-DCDS0E4U.js";import"./makeExternalStore-BILayTtp.js";import"./Tooltip-Dk4L6ju7.js";import"./PopoverPopup-BlPqN4M8.js";import"./toNumber-ndB2Z0w9.js";import"./useOsdkClient-SMvNaXFe.js";import"./tick-BIyw1OVe.js";import"./DropdownField-zJdovfER.js";import"./withOsdkMetrics-C7WGUV66.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
