import{f as p,j as e}from"./iframe-BNBZBstC.js";import{O as i}from"./object-table-BYwjMuX-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnYrZllf.js";import"./Table-CXBfrNrR.js";import"./index-Cnm8VChd.js";import"./Dialog-RuUnz3l_.js";import"./cross-BBwfk0Yp.js";import"./svgIconContainer-Dn93O-Mo.js";import"./useBaseUiId-DT3QZnc6.js";import"./InternalBackdrop-DtBSnFoc.js";import"./composite-HrpU287b.js";import"./index-BH-plJ59.js";import"./index-CjrOmp5t.js";import"./index-CkDpN7v3.js";import"./useEventCallback-CxEm-vEP.js";import"./SkeletonBar-FnJRED2m.js";import"./LoadingCell-DdhnfFp4.js";import"./ColumnConfigDialog-C6WiL4IG.js";import"./DraggableList-DsRvbsQQ.js";import"./search-DByY8x3h.js";import"./Input-CHUFXkF3.js";import"./useControlled-hyr-Ee75.js";import"./Button-Dadxr29r.js";import"./small-cross-rhx74hoP.js";import"./ActionButton-Bdd2VFqy.js";import"./Checkbox-gAFJ0O_f.js";import"./useValueChanged-a5BaAUtx.js";import"./CollapsiblePanel-x-PqwnJ-.js";import"./MultiColumnSortDialog-B9BvTXjK.js";import"./MenuTrigger-Ch2CkAIa.js";import"./CompositeItem-CfUbW9s0.js";import"./ToolbarRootContext-DAKa1svD.js";import"./getDisabledMountTransitionStyles-CnacvZJ_.js";import"./getPseudoElementBounds-CboReYEL.js";import"./chevron-down-BqKYZ2w5.js";import"./index-s_lknIcx.js";import"./error-HeD-UTCd.js";import"./BaseCbacBanner-Xyw-G0Km.js";import"./makeExternalStore-Ba0UZiRg.js";import"./Tooltip-DPMltsX0.js";import"./isObject-C42gTfZZ.js";import"./debounce-yCFfzmLO.js";import"./useOsdkClient-BWShqPoN.js";import"./tick-Bqx6qZZ9.js";import"./DropdownField-Dt-RrUgw.js";import"./isEqual-DKe9hHKP.js";import"./_baseIsEqual-CmMkSghX.js";import"./withOsdkMetrics-Db562hlY.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
