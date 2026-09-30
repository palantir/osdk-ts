import{f as p,j as e}from"./iframe-DcZIbII1.js";import{O as i}from"./object-table-DLeGe8ZQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CtJBcs4m.js";import"./Table-BWSDeoBK.js";import"./index-CknXFCuG.js";import"./Dialog-COig6MDV.js";import"./cross-B7rc_3vM.js";import"./svgIconContainer-CCPtMkY_.js";import"./useBaseUiId-Bwnxqilm.js";import"./InternalBackdrop-vtxyY5fQ.js";import"./composite-im6S2sQa.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./index-DPboZthR.js";import"./useEventCallback-DUdSVzSq.js";import"./SkeletonBar-CGLWA7k6.js";import"./LoadingCell-BOgRlDnX.js";import"./ColumnConfigDialog-BHw8jkAc.js";import"./DraggableList-PY47Xjpq.js";import"./search-ByPzgBRT.js";import"./Input-DgnbxA8W.js";import"./useControlled-CtuIn0tc.js";import"./Button-fbYfSW4g.js";import"./small-cross-BNLYCYQq.js";import"./ActionButton-Bt_c9QVn.js";import"./Checkbox-oOA2jJzU.js";import"./useValueChanged-BCgCGkWP.js";import"./CollapsiblePanel-CJKXn1Jt.js";import"./MultiColumnSortDialog-CExlz1v8.js";import"./MenuTrigger-DOR0ot29.js";import"./CompositeItem-0HlJZQq8.js";import"./ToolbarRootContext-DW70chtw.js";import"./getDisabledMountTransitionStyles-BRHOOZl_.js";import"./getPseudoElementBounds-CCVDhmIO.js";import"./chevron-down-CgbkcCiQ.js";import"./index-DSHI6oH0.js";import"./error-CfhtcL_7.js";import"./BaseCbacBanner-CY3PtWK0.js";import"./makeExternalStore-Dx5t4IsM.js";import"./Tooltip-Cs9p6XT8.js";import"./PopoverPopup-CwL3PPak.js";import"./debounce-BPpQpvYV.js";import"./useOsdkClient-BlHc1QH0.js";import"./tick-CLXIS-et.js";import"./DropdownField-9Vn4V-zp.js";import"./isEqual-ByvfUgin.js";import"./withOsdkMetrics-D2PqzxOJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
