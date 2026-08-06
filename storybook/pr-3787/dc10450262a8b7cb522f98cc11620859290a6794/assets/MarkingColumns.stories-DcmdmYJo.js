import{f as p,j as e}from"./iframe-BG7t1Vmm.js";import{O as i}from"./object-table-DFpXDM8M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CP3oW2I4.js";import"./Table--GLSXPLI.js";import"./index-DNP-skbR.js";import"./Dialog-DTrAedIt.js";import"./cross-BgA3bxZe.js";import"./svgIconContainer-DoguVSwu.js";import"./useBaseUiId-wOo7_51r.js";import"./InternalBackdrop-BiHDr4V5.js";import"./composite-DjXoYun8.js";import"./index-D5aAagqo.js";import"./index-LP8SaJdm.js";import"./index-A9LJMqxv.js";import"./useEventCallback-Ch6qzy9f.js";import"./SkeletonBar-D0Pxt7og.js";import"./LoadingCell-Bbt2qYmw.js";import"./ColumnConfigDialog-Cv66BDCK.js";import"./DraggableList-BjjXT586.js";import"./search-DYV4c-c-.js";import"./Input-BtDQA_93.js";import"./useControlled-cqUbBSR9.js";import"./isEqual-wNmYYaDL.js";import"./isObject-CJDIddOi.js";import"./Button-BpJLAHN7.js";import"./ActionButton-Dw8p_eY5.js";import"./Checkbox-CNimbRhQ.js";import"./useValueChanged-C_YCjO-X.js";import"./CollapsiblePanel-FNzStr2Q.js";import"./MultiColumnSortDialog--I9uRdb-.js";import"./MenuTrigger-DfrtwaAO.js";import"./CompositeItem-BOvhxDt7.js";import"./ToolbarRootContext-DHIMXwmc.js";import"./getDisabledMountTransitionStyles-BTLZi8_p.js";import"./getPseudoElementBounds-Dut9ouvk.js";import"./chevron-down-Dlge6__9.js";import"./index-QQ1acmH5.js";import"./error-CU6tir3a.js";import"./BaseCbacBanner-CWaSrEh7.js";import"./makeExternalStore-DKKDnTU0.js";import"./Tooltip-Blfk8emT.js";import"./PopoverPopup-GnZ1840G.js";import"./toNumber-CAT65hVE.js";import"./useOsdkClient-B_eLt-9e.js";import"./tick-By8u8Fyi.js";import"./DropdownField-Bj1ah8mC.js";import"./withOsdkMetrics-DPDNp8Fq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
