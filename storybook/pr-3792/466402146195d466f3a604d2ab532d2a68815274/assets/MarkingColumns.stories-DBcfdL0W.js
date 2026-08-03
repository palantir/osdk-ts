import{f as p,j as e}from"./iframe-rqdpvzga.js";import{O as i}from"./object-table-BNCtyvoy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAuA-mTQ.js";import"./Table-CwI65LxP.js";import"./index-BUC_fDrj.js";import"./Dialog-N8lH9woN.js";import"./cross-CfosNt4b.js";import"./svgIconContainer-Bqq5IfTn.js";import"./useBaseUiId-DuTjnFCh.js";import"./InternalBackdrop-D13qOvQs.js";import"./composite-ccFUBUPp.js";import"./index-Cehal3kO.js";import"./index-CJWlNCvv.js";import"./index-CKSQPIZd.js";import"./useEventCallback-W4TpxVKD.js";import"./SkeletonBar-CFpFT4II.js";import"./LoadingCell-BgMCyBoq.js";import"./ColumnConfigDialog-hnZhU6Rq.js";import"./DraggableList-BLHsww-b.js";import"./search-C4ANGgTZ.js";import"./Input-C9VwIK8Z.js";import"./useControlled-BuMCf3Vd.js";import"./isEqual-DEg00wvo.js";import"./isObject-DQhWxrGR.js";import"./Button-BKVkRu72.js";import"./ActionButton-HHbEDF8p.js";import"./Checkbox-BjkRYtp6.js";import"./useValueChanged-DUFwtMjl.js";import"./CollapsiblePanel-CJc3SpYG.js";import"./MultiColumnSortDialog-DqWkkLs0.js";import"./MenuTrigger-CxxInSLp.js";import"./CompositeItem-V9zqfIF2.js";import"./ToolbarRootContext-BMRRgW4c.js";import"./getDisabledMountTransitionStyles-Ca47Gktb.js";import"./getPseudoElementBounds-C8iem-un.js";import"./chevron-down-d7yaCezV.js";import"./index-BvFYeZoL.js";import"./error-3D7_fXdm.js";import"./BaseCbacBanner-DoUsSeDI.js";import"./makeExternalStore-CszC-1tM.js";import"./Tooltip-COfWRuA_.js";import"./PopoverPopup-Cvgc4b4_.js";import"./toNumber-TWPbk2io.js";import"./useOsdkClient-DnpeN7vH.js";import"./tick-7-B_JYev.js";import"./DropdownField-DtNNkOb_.js";import"./withOsdkMetrics-CdR4X2BK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
