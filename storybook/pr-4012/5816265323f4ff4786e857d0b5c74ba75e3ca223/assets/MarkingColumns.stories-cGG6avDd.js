import{f as p,j as e}from"./iframe-zZuIx-c9.js";import{O as i}from"./object-table-DW_Vj8dz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XLtQClQl.js";import"./Table-DIOfekiY.js";import"./index-DGgNHuzV.js";import"./Dialog-CT-MsiOQ.js";import"./cross-CI4w4_Jo.js";import"./svgIconContainer-BVFcWySo.js";import"./useBaseUiId-QsYmwdFZ.js";import"./InternalBackdrop-B0ZUvn2o.js";import"./composite-Cx527Tyd.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./index-DSSfDUcI.js";import"./useEventCallback-DuyscJu3.js";import"./SkeletonBar-BpofndJ7.js";import"./LoadingCell-BBJkPVdt.js";import"./ColumnConfigDialog-BPIPUBx0.js";import"./DraggableList-D51EtEm_.js";import"./search-CNuN0o2o.js";import"./Input-BD19hUvi.js";import"./useControlled-B4CVwr3J.js";import"./Button-Cv2L8neg.js";import"./small-cross-Ce2qYYjw.js";import"./ActionButton-CTnMDA00.js";import"./Checkbox-OBFd4f6B.js";import"./useValueChanged-VVjI8tpd.js";import"./CollapsiblePanel-CDMZ6agG.js";import"./MultiColumnSortDialog-cmzLi8G7.js";import"./MenuTrigger-ynLmujTD.js";import"./CompositeItem-DKDVMcoh.js";import"./ToolbarRootContext-pNEiopTT.js";import"./getDisabledMountTransitionStyles-B0Omgaf7.js";import"./getPseudoElementBounds-Dw3d2TY6.js";import"./chevron-down-BRlfcJdA.js";import"./index-DaqIxsao.js";import"./error-C5gHLQAi.js";import"./BaseCbacBanner-_cQym-JM.js";import"./makeExternalStore-BcA2BzRz.js";import"./Tooltip-C-LiyBN2.js";import"./PopoverPopup-CVvRvgY6.js";import"./debounce-BGzgo4FS.js";import"./useOsdkClient-BmjkDG1y.js";import"./tick-mF_xRJKy.js";import"./DropdownField-DCyylpdR.js";import"./isEqual-CNzTfT1J.js";import"./withOsdkMetrics-Y5EbkS67.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
