import{f as p,j as e}from"./iframe-Eth4DscF.js";import{O as i}from"./object-table-Cbv16qZw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5DT8Gvv.js";import"./Table-BsZxvL7o.js";import"./index-CaJ3mqr2.js";import"./Dialog-BnNgj-DK.js";import"./cross-BwB0DXiU.js";import"./svgIconContainer-CoGRC72I.js";import"./useBaseUiId-B7RIhr15.js";import"./InternalBackdrop-CLNMJjbi.js";import"./composite-qIMfmfrB.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./index-DxmuItap.js";import"./useEventCallback-CCdM5L8S.js";import"./SkeletonBar-DiGFHRwx.js";import"./LoadingCell-DzayPawF.js";import"./ColumnConfigDialog-DtmA5b3f.js";import"./DraggableList-DSB2Ts9s.js";import"./search-CJHLYodH.js";import"./Input-4EN0R4Wx.js";import"./useControlled-E-2hYUgD.js";import"./Button-DxVY95w9.js";import"./small-cross-CJlA-_gF.js";import"./ActionButton-C6R1Vics.js";import"./Checkbox-nUwQbfWm.js";import"./useValueChanged-BesFItDX.js";import"./CollapsiblePanel-yBgFB804.js";import"./MultiColumnSortDialog-S4UpD3Tj.js";import"./MenuTrigger-CizIxwTs.js";import"./CompositeItem-DlxbA5eX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./getDisabledMountTransitionStyles-B5ZEbLKX.js";import"./getPseudoElementBounds-BtlXh7MV.js";import"./chevron-down-CqqSfn04.js";import"./index-Daf7mDrl.js";import"./error-BXTM1REk.js";import"./BaseCbacBanner-Dz7j698m.js";import"./makeExternalStore-2rYtWHIa.js";import"./Tooltip-drCTzUWh.js";import"./PopoverPopup-C3fOznkb.js";import"./debounce-Cu_1wwlT.js";import"./useOsdkClient--sVmWpOM.js";import"./tick-BmqhilVd.js";import"./DropdownField-BY08YoHL.js";import"./isEqual-DOeG1NN5.js";import"./withOsdkMetrics-HAEG8t0o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
