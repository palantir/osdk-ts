import{f as p,j as e}from"./iframe-B6oWV_cO.js";import{O as i}from"./object-table-CtI5yV6e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CvT5iRxj.js";import"./Table-H8JAnekO.js";import"./index-jWi9en1s.js";import"./Dialog-IjdgcDCq.js";import"./cross-CMQlEfgT.js";import"./svgIconContainer-CyQYn__Q.js";import"./useBaseUiId-Lqu0Q_Vu.js";import"./InternalBackdrop-aNkEhke3.js";import"./composite-Dp6W2S9Q.js";import"./index-CuLm7S4g.js";import"./index-BRc86hmI.js";import"./index-Cmd-ZYJY.js";import"./useEventCallback-68igZ2om.js";import"./SkeletonBar-C3bqiAvB.js";import"./LoadingCell-VRUwWdFr.js";import"./ColumnConfigDialog-C1nqKPCR.js";import"./DraggableList-kEK9wOKw.js";import"./search-elVCr7Zu.js";import"./Input-Czst-Pu5.js";import"./useControlled-BYVF8v0w.js";import"./Button-COxF9se3.js";import"./small-cross-BKVLOId_.js";import"./ActionButton-CQNeinOl.js";import"./Checkbox-CBoPesiE.js";import"./useValueChanged-Bs_2NC3q.js";import"./CollapsiblePanel-DURqSvpg.js";import"./MultiColumnSortDialog-wTn3d_9K.js";import"./MenuTrigger-D7Vb2yT_.js";import"./CompositeItem-Bt81vcwk.js";import"./ToolbarRootContext-BPjzZzdt.js";import"./getDisabledMountTransitionStyles-FhoKevdq.js";import"./getPseudoElementBounds-pDes9EyY.js";import"./chevron-down-DRI3eY5G.js";import"./index-DgJyY4kw.js";import"./error-BpLqO6z6.js";import"./BaseCbacBanner-4hzGHeqg.js";import"./makeExternalStore-DOLupiTS.js";import"./Tooltip-BJYJHQiG.js";import"./PopoverPopup-BPYLCmXN.js";import"./debounce-C2vXJMuX.js";import"./useOsdkClient-aPMJxZ2d.js";import"./tick-zJx6D1Yi.js";import"./DropdownField-SuxaAE8e.js";import"./isEqual-D36OJjKK.js";import"./withOsdkMetrics-U9jYKXmV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
