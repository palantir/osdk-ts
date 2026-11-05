import{f as p,j as e}from"./iframe-BYejxj2b.js";import{O as i}from"./object-table-DeEAqfUC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C0rDQy5D.js";import"./Table-Ck2donfE.js";import"./index-iipsf35Q.js";import"./Dialog-_5OGUo-t.js";import"./cross-C58IIDJt.js";import"./svgIconContainer-BpdSUco1.js";import"./useBaseUiId-C9Oeigog.js";import"./InternalBackdrop-CpB9FOQ-.js";import"./composite-E5tzecJv.js";import"./index-CXPcvEZE.js";import"./index-CPmCN5n5.js";import"./index-mOzIY_Cu.js";import"./useEventCallback-Bqw3GNAH.js";import"./SkeletonBar-Br2yrjJj.js";import"./LoadingCell-CI4BrKiD.js";import"./ColumnConfigDialog-CU3B-UjG.js";import"./DraggableList-B1HdKVrR.js";import"./search-DoJ4TrKJ.js";import"./Input-iw0NWTaR.js";import"./useControlled-C0V-KMju.js";import"./Button-CuqI5477.js";import"./small-cross-Cu684_cF.js";import"./ActionButton-oGSx-SKD.js";import"./Checkbox-yIlqtiqn.js";import"./useValueChanged-CzPX0usT.js";import"./CollapsiblePanel-CMFkfvwx.js";import"./MultiColumnSortDialog-BdsAjARw.js";import"./MenuTrigger-CP1yKMgK.js";import"./CompositeItem-Ze_igsRp.js";import"./ToolbarRootContext-BhZB42YH.js";import"./getDisabledMountTransitionStyles-CEv9PYlI.js";import"./getPseudoElementBounds-Ch3KvVo0.js";import"./chevron-down-CRHNnKNO.js";import"./index-CZoFsv0k.js";import"./error-D3cs_59E.js";import"./BaseCbacBanner-De0tLRQx.js";import"./makeExternalStore-BiJsDtWq.js";import"./Tooltip-Cz_WgPBn.js";import"./PopoverPopup-DPn5xYgL.js";import"./debounce-B4fjUaL7.js";import"./useOsdkClient-v91fIKBr.js";import"./tick-xiLoJvOV.js";import"./DropdownField-B9F8HYeP.js";import"./isEqual-B5NKSLiF.js";import"./withOsdkMetrics-BsRlr_Wc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
