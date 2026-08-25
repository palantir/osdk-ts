import{f as p,j as e}from"./iframe-rlv3mUdt.js";import{O as i}from"./object-table-COoiKLv3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C8E9pHov.js";import"./Table-C05mHoNZ.js";import"./index-BwKgkhoJ.js";import"./Dialog-B2IC515a.js";import"./cross-cAPyHYLw.js";import"./svgIconContainer-BR20IK9W.js";import"./useBaseUiId-Dp7FKVfu.js";import"./InternalBackdrop-BVk7F7mw.js";import"./composite-cntM3euM.js";import"./index-DJ9-JExy.js";import"./index-BUfObnx_.js";import"./index-D6BXegGx.js";import"./useEventCallback-BFMrrB-m.js";import"./SkeletonBar-CBQRqDjl.js";import"./LoadingCell-vM5EQXcf.js";import"./ColumnConfigDialog-BKrlOu4J.js";import"./DraggableList-DaCSV-rj.js";import"./search-B6WH-E2J.js";import"./Input-DPtkjq4w.js";import"./useControlled-CsmgIjgz.js";import"./Button-DOX6KGuK.js";import"./small-cross-DtUNssPx.js";import"./ActionButton-fANDhFNh.js";import"./Checkbox-D4z1W9S5.js";import"./useValueChanged-BVFeiYrm.js";import"./CollapsiblePanel-DvRmCPuz.js";import"./MultiColumnSortDialog-DJAQcPH0.js";import"./MenuTrigger-zjnZIaoC.js";import"./CompositeItem-BwBfuGb4.js";import"./ToolbarRootContext-Dj6pA1B5.js";import"./getDisabledMountTransitionStyles-CKZngXvA.js";import"./getPseudoElementBounds-DBZ1MDoi.js";import"./chevron-down-ByAn-ifv.js";import"./index-Bj0ChkFd.js";import"./error-D3VLZxq_.js";import"./BaseCbacBanner-Cy5SHU8y.js";import"./makeExternalStore-B2qXKEyL.js";import"./Tooltip-DF5SsG7G.js";import"./PopoverPopup-CZ1Ki-Oj.js";import"./debounce-H1Lzwb9c.js";import"./useOsdkClient-2HxN2tp2.js";import"./tick-D7E73dGL.js";import"./DropdownField-pYTN63rb.js";import"./isEqual-ua0Q190L.js";import"./withOsdkMetrics-Bay5Qfh_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
