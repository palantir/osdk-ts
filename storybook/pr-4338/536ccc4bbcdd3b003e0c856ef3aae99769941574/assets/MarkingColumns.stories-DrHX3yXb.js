import{f as p,j as e}from"./iframe-B89B5CWM.js";import{O as i}from"./object-table-TjXxeS7e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BQ99I6nt.js";import"./Table-aohPUUE9.js";import"./index-D9SW0Yle.js";import"./Dialog-CMpT43wb.js";import"./cross-BbpWCkxQ.js";import"./svgIconContainer-ChPhhCD3.js";import"./useBaseUiId-DtDRBSq4.js";import"./InternalBackdrop-COfUIr0S.js";import"./composite-B50sO1rH.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./index-DbCSIb3h.js";import"./useEventCallback-HaOgpImO.js";import"./SkeletonBar-pSM_YdGu.js";import"./LoadingCell-DduVSPo-.js";import"./ColumnConfigDialog-fER75DAD.js";import"./DraggableList-DbtN4p1h.js";import"./search-BIvcGDFg.js";import"./Input-BTItB3zo.js";import"./useControlled-oTZtcuwA.js";import"./Button-Y1tATrz0.js";import"./small-cross-C8bFb-MH.js";import"./ActionButton-6QvyZFZ4.js";import"./Checkbox-BFETg0bp.js";import"./useValueChanged-DITF5IQQ.js";import"./CollapsiblePanel-CfrpUeu3.js";import"./MultiColumnSortDialog-Cg_KezFK.js";import"./MenuTrigger-B-fi0xS8.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./getDisabledMountTransitionStyles-CtMZVl1t.js";import"./getPseudoElementBounds-CKOvD078.js";import"./chevron-down-C8YyWC3O.js";import"./index-B5gePnV1.js";import"./error-yAZoJobu.js";import"./BaseCbacBanner-lKvwV7ea.js";import"./makeExternalStore-Dng9Dmlv.js";import"./Tooltip-DCjqoaml.js";import"./PopoverPopup-DefmT2bE.js";import"./debounce-Dl_IbEsP.js";import"./useOsdkClient-uulAZQLf.js";import"./tick-D72Jsudk.js";import"./DropdownField-Cq54mmNu.js";import"./isEqual-DhYcQb9B.js";import"./withOsdkMetrics-Cct9f3WN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
