import{f as p,j as e}from"./iframe-S84xAba9.js";import{O as i}from"./object-table-D7dqDn5I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJNCezcd.js";import"./Table-BLwbniGI.js";import"./index-8j0T478k.js";import"./Dialog-H7IS3eOk.js";import"./cross-D931JdRi.js";import"./svgIconContainer-BlYa3pTV.js";import"./useBaseUiId-YpbERV6F.js";import"./InternalBackdrop-BIkzYyEP.js";import"./composite-BPZV-Yhr.js";import"./index-DUM3Z7TI.js";import"./index-DafAAkcf.js";import"./index-Wol--mzF.js";import"./useEventCallback-CvUbQ2M2.js";import"./SkeletonBar-T2RkLi5-.js";import"./LoadingCell-CQbw9zdB.js";import"./ColumnConfigDialog-DpxbPXfs.js";import"./DraggableList-CgdQnFi4.js";import"./search-DhFsI6Pf.js";import"./Input-Cif3XMX5.js";import"./useControlled-BfYdfQhZ.js";import"./Button-BASBXCLw.js";import"./small-cross-ClUWXpO2.js";import"./ActionButton-CWjWbtqS.js";import"./Checkbox-DevWlODG.js";import"./useValueChanged-Dr5883-C.js";import"./CollapsiblePanel-CxmwbUpy.js";import"./MultiColumnSortDialog-DVuF13K8.js";import"./MenuTrigger-DCnDZv66.js";import"./CompositeItem-D1oKuNmK.js";import"./ToolbarRootContext-Dx--qbfa.js";import"./getDisabledMountTransitionStyles-BSS3-xui.js";import"./getPseudoElementBounds-B4-e1zAI.js";import"./chevron-down-B21hEOy9.js";import"./index-7bPdWCKR.js";import"./error-CTVY3lwb.js";import"./BaseCbacBanner-CfO_PDbj.js";import"./makeExternalStore-CaEUyt0v.js";import"./Tooltip-C6MYNiME.js";import"./PopoverPopup-DT5g8jR4.js";import"./debounce-CR__6nn4.js";import"./useOsdkClient-CZfvkz-K.js";import"./tick-CGcvAYvI.js";import"./DropdownField-BpqWh6Kr.js";import"./isEqual-iyEPvtnE.js";import"./withOsdkMetrics-3ZtUgCqV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
