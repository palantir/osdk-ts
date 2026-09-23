import{f as p,j as e}from"./iframe-BGhobRtu.js";import{O as i}from"./object-table-COtS4Qnz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-pGzP1r6a.js";import"./Table-QJqNuUM-.js";import"./index-vtFPCgDX.js";import"./Dialog-BdhR34Gc.js";import"./cross-CuYz6VCw.js";import"./svgIconContainer-B7bAtHsS.js";import"./useBaseUiId-DQZ7iRRg.js";import"./InternalBackdrop-BuZZp4vX.js";import"./composite-N1fMxm4N.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./index-4ZAX8LQC.js";import"./useEventCallback-IjK4E44x.js";import"./SkeletonBar-is7FW6bL.js";import"./LoadingCell-CAE1DLa0.js";import"./ColumnConfigDialog-CWqi8rZq.js";import"./DraggableList-U86vXP5Q.js";import"./search-CD-rabLl.js";import"./Input-C3PEeUtQ.js";import"./useControlled-Dp1hI4GV.js";import"./Button-DAz_khhf.js";import"./small-cross-sN4wSsnF.js";import"./ActionButton-CGHRv_-b.js";import"./Checkbox-aid0nh5t.js";import"./useValueChanged-COn_Wnb4.js";import"./CollapsiblePanel-DLLULbui.js";import"./MultiColumnSortDialog-R3tQGeIC.js";import"./MenuTrigger-BoRN7fZ3.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./getDisabledMountTransitionStyles-DUpLtIxq.js";import"./getPseudoElementBounds-D0oEP3_T.js";import"./chevron-down-DAtIJVst.js";import"./index-EPx86zSw.js";import"./error-CFVPudD2.js";import"./BaseCbacBanner-CaTQcvxF.js";import"./makeExternalStore-Imo5q4ya.js";import"./Tooltip-DUd70Gw0.js";import"./PopoverPopup-uv4NdOtP.js";import"./debounce-ChAiSJEZ.js";import"./useOsdkClient-DzPyphix.js";import"./tick-CgJs5kuo.js";import"./DropdownField-DMnr6Z_R.js";import"./isEqual-JnfXh9I5.js";import"./withOsdkMetrics-qR-yFxPK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
