import{f as p,j as e}from"./iframe-BOmrqFPc.js";import{O as i}from"./object-table-CgTZhKfv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHdkCmlX.js";import"./Table-BJpB3MpQ.js";import"./index-CsuBd3Ct.js";import"./Dialog-KCVIqPJc.js";import"./cross-C3JW1YVW.js";import"./svgIconContainer-BIv09OFd.js";import"./useBaseUiId-BbxoKReU.js";import"./InternalBackdrop-Bi_UxEim.js";import"./composite-DD_Mh2Hz.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./index-OMceiRFh.js";import"./useEventCallback-BCbidy2u.js";import"./SkeletonBar-CCtYn663.js";import"./LoadingCell-D20rDd7b.js";import"./ColumnConfigDialog-CMwN6Z58.js";import"./DraggableList-CvUF4ah5.js";import"./search-BDQnen_f.js";import"./Input-DztT7-KE.js";import"./useControlled-fJQSQ2l_.js";import"./Button-CzVdVKcN.js";import"./small-cross-DJnfj9QP.js";import"./ActionButton-BDtYk-kf.js";import"./Checkbox-zixLd25m.js";import"./useValueChanged-Dhmmb8Eg.js";import"./CollapsiblePanel-gIOqhaYB.js";import"./MultiColumnSortDialog-mZBPlG9r.js";import"./MenuTrigger-tX7EZ8Yt.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./getDisabledMountTransitionStyles-BpRjKf3X.js";import"./getPseudoElementBounds-BxchgAnl.js";import"./chevron-down-CjR8Mc2-.js";import"./index-7ewfs4s5.js";import"./error-lpzYnACL.js";import"./BaseCbacBanner-CKztZQf-.js";import"./makeExternalStore-CIMBrNRu.js";import"./Tooltip-Cf3Cg01o.js";import"./PopoverPopup-CvmU8NRY.js";import"./debounce-CRQ5iXC9.js";import"./useOsdkClient-BKdn_EkF.js";import"./tick-DWpFBI3S.js";import"./DropdownField-Dbo12qhB.js";import"./isEqual-DZa_3meK.js";import"./withOsdkMetrics-CHgAtXdu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
