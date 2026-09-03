import{f as p,j as e}from"./iframe-BfGhSrhj.js";import{O as i}from"./object-table-D57w4M3x.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vxwuBi5M.js";import"./Table-Csc7HXTE.js";import"./index-BpzGyY_9.js";import"./Dialog-LUYl8QRA.js";import"./cross-Bn7q8aps.js";import"./svgIconContainer-B7iRS6fY.js";import"./useBaseUiId-Crf4zNct.js";import"./InternalBackdrop-CVI9nmOg.js";import"./composite-BgMCZbwS.js";import"./index-Bi5q9Arz.js";import"./index-DXdjOqiL.js";import"./index-BWg0FpKS.js";import"./useEventCallback-BZV3Iwak.js";import"./SkeletonBar-CEr1E5VO.js";import"./LoadingCell-CWnR_u7w.js";import"./ColumnConfigDialog-BNDdVe-W.js";import"./DraggableList-BoblDgWY.js";import"./search-ByYdnjPp.js";import"./Input-BfWLU8Yl.js";import"./useControlled-Cqj-8esb.js";import"./Button-CF2oqfBr.js";import"./small-cross-DZ73Q1fw.js";import"./ActionButton-_wE0oZ9W.js";import"./Checkbox-sV8w9OKW.js";import"./useValueChanged-Bpisl4CB.js";import"./CollapsiblePanel-BK0gVPbW.js";import"./MultiColumnSortDialog-DqEvvmTL.js";import"./MenuTrigger-3j5xhVQZ.js";import"./CompositeItem-6BwZmfcB.js";import"./ToolbarRootContext-CcKAs7gU.js";import"./getDisabledMountTransitionStyles-QeVB0pEF.js";import"./getPseudoElementBounds-BmPRbc2u.js";import"./chevron-down-CkhCniF6.js";import"./index-D5LJWRJq.js";import"./error-CBS_ohw_.js";import"./BaseCbacBanner-vIuQauGI.js";import"./makeExternalStore-s41uljGH.js";import"./Tooltip-BwJ3b4PV.js";import"./PopoverPopup-CWniRTA-.js";import"./debounce-DNM_Pm0s.js";import"./useOsdkClient-BXxAdvut.js";import"./tick-_Dn2hUgn.js";import"./DropdownField-D4BYnBW1.js";import"./isEqual-2U2BkhhQ.js";import"./withOsdkMetrics-DtIhmsVW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
