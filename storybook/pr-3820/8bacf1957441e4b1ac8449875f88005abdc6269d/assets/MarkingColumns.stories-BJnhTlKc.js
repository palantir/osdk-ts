import{f as p,j as e}from"./iframe-MJCO4tWq.js";import{O as i}from"./object-table-D-GlTyjO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D59pX6Bk.js";import"./Table-C8_ftk3i.js";import"./index-DAbYsEZg.js";import"./Dialog-BWPDmK8c.js";import"./cross-DEhoIyVp.js";import"./svgIconContainer-B8wHNsBx.js";import"./useBaseUiId-BXP8AFv-.js";import"./InternalBackdrop-MR6IfjGm.js";import"./composite-hTc6teuV.js";import"./index-BsqhAQGv.js";import"./index-Cnl5b3P-.js";import"./index-BnwFJuQc.js";import"./useEventCallback-BPzMo7TT.js";import"./SkeletonBar-CX75rHhD.js";import"./LoadingCell-BGN9J0ek.js";import"./ColumnConfigDialog-DBSEwEtO.js";import"./DraggableList-CmJxYjz-.js";import"./search-BVQldDSv.js";import"./Input-MHB43ASx.js";import"./useControlled-Dk0yJJ1t.js";import"./isEqual-n6GizMeC.js";import"./isObject-DFPZ6jAe.js";import"./Button-1rEr2cfV.js";import"./ActionButton-D4tfAY4w.js";import"./Checkbox-CAwtHkMP.js";import"./useValueChanged-Cn8wgOUs.js";import"./CollapsiblePanel-DYoXGj66.js";import"./MultiColumnSortDialog-DzIjxMRI.js";import"./MenuTrigger-s8lBQKu_.js";import"./CompositeItem-DcPjr0YJ.js";import"./ToolbarRootContext-CPLLt6Rz.js";import"./getDisabledMountTransitionStyles-eHgkv2fX.js";import"./getPseudoElementBounds-khLPTJUT.js";import"./chevron-down-Cf4wAAwN.js";import"./index-BvLOcFYh.js";import"./error-PCzB-peL.js";import"./BaseCbacBanner-Dg9T5QMO.js";import"./makeExternalStore-__RES5Ho.js";import"./Tooltip-n6NFq6Kx.js";import"./PopoverPopup-CdSwPRLB.js";import"./toNumber-Dckp5_Ne.js";import"./useOsdkClient-Dw0UV9QQ.js";import"./tick-B6M1Y5e_.js";import"./DropdownField-DFmcqvd7.js";import"./withOsdkMetrics-D9xBIQld.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
