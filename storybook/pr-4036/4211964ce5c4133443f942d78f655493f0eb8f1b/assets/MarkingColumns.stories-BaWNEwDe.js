import{f as p,j as e}from"./iframe-BtGRzxci.js";import{O as i}from"./object-table-DvJWCPho.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CyrDjGUQ.js";import"./Table-hzixPhpe.js";import"./index-tVIozFN1.js";import"./Dialog-UXl6_OEU.js";import"./cross-7jkwYPrY.js";import"./svgIconContainer-CN6dxZIp.js";import"./useBaseUiId-XRf534_a.js";import"./InternalBackdrop-BfGRu2JH.js";import"./composite-Btju52rS.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./index-Nbrbbk2B.js";import"./useEventCallback-BiNkxLXV.js";import"./SkeletonBar-DUe5rZ6s.js";import"./LoadingCell-C0-SnIgS.js";import"./ColumnConfigDialog-Iho4vn5M.js";import"./DraggableList-DnLFn3Lu.js";import"./search-BPr2MDER.js";import"./Input-DGQhm6BR.js";import"./useControlled-rccl1Nao.js";import"./Button-CmbUXSv3.js";import"./small-cross-CkeumqgW.js";import"./ActionButton-5xGca2at.js";import"./Checkbox-D--Pvna1.js";import"./useValueChanged-CjbtTYfl.js";import"./CollapsiblePanel-BaiGGDJy.js";import"./MultiColumnSortDialog-DYusjWQp.js";import"./MenuTrigger-IMl7rvKJ.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./getDisabledMountTransitionStyles-CJvQQmV9.js";import"./getPseudoElementBounds-Wk9KfacK.js";import"./chevron-down-C1HWTq_e.js";import"./index-DLTZ7l6I.js";import"./error-swCJC4aW.js";import"./BaseCbacBanner-BFDB5_A0.js";import"./makeExternalStore-DP55EZzE.js";import"./Tooltip-vzjWcP7C.js";import"./PopoverPopup-Ckm-Ve__.js";import"./debounce-YXq4O7nI.js";import"./useOsdkClient-DvX2DAiH.js";import"./tick-ac30L8P3.js";import"./DropdownField-DhAab1KW.js";import"./isEqual-DiCfN5tv.js";import"./withOsdkMetrics-7PiZwI5Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
