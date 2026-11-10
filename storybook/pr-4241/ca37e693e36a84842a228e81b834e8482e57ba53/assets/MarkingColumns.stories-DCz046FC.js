import{f as p,j as e}from"./iframe-A4y6o7Ie.js";import{O as i}from"./object-table-BoO0elNM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzztgknT.js";import"./Table-BjqeXaVf.js";import"./index-u7v7sD8l.js";import"./Dialog-KCxjFTm-.js";import"./cross-BiOP9WPq.js";import"./svgIconContainer-hodslvqS.js";import"./useBaseUiId-DE1tY3Ft.js";import"./InternalBackdrop-CFKIYKn-.js";import"./composite-Cae9SV4u.js";import"./index-C8GSd3VQ.js";import"./index-Coz2by3h.js";import"./index-2Ob0EkkI.js";import"./useEventCallback-jK9BYgZA.js";import"./SkeletonBar-DGU8QXrV.js";import"./LoadingCell-B0YAlYY-.js";import"./ColumnConfigDialog-BBObW5dm.js";import"./DraggableList-Bg5EEBkU.js";import"./search-BJw96kDe.js";import"./Input-8Z1nJkFY.js";import"./useControlled-C-FlvKxX.js";import"./Button-CpcDAbH0.js";import"./small-cross-9cmVXTN9.js";import"./ActionButton-D8kAp191.js";import"./Checkbox-KGoh-z4o.js";import"./useValueChanged-GBBSiWne.js";import"./CollapsiblePanel-5jZaWXpI.js";import"./MultiColumnSortDialog-BtOW583w.js";import"./MenuTrigger-CVg7cQJz.js";import"./CompositeItem-1bj7m8dY.js";import"./ToolbarRootContext-BQWxRNLz.js";import"./getDisabledMountTransitionStyles-Yf-KGouk.js";import"./getPseudoElementBounds-WLqzanIA.js";import"./chevron-down-DaeYHOS7.js";import"./index-CVD25b_z.js";import"./error-D67R2Dnx.js";import"./BaseCbacBanner-BWE-0JdB.js";import"./makeExternalStore-i5MDKYGm.js";import"./Tooltip-BAM2O2Bl.js";import"./isObject-CFZ51c-t.js";import"./debounce-k7ATts_Q.js";import"./useOsdkClient-eRrz4tDs.js";import"./tick-BY6ZJkTy.js";import"./DropdownField-CmRhweZ6.js";import"./isEqual-CGvBDAE8.js";import"./_baseIsEqual-B3DtqFtF.js";import"./withOsdkMetrics-DS1Us_TM.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
