import{f as p,j as e}from"./iframe-D0BcpvbQ.js";import{O as i}from"./object-table-PqC7FE-O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-25-JBzXD.js";import"./Table-BEsaXFi1.js";import"./index-J-5LjNrj.js";import"./Dialog-vNOQWlw1.js";import"./cross-CjHwEj-1.js";import"./svgIconContainer-C3Yfvyd2.js";import"./useBaseUiId-DKDRPBwJ.js";import"./InternalBackdrop-DYHVppNb.js";import"./composite-oTuSysNj.js";import"./index-DnyQlPpk.js";import"./index-Boycosi1.js";import"./index-DZk3VDH-.js";import"./useEventCallback-CFJPyiwb.js";import"./SkeletonBar-By0yALek.js";import"./LoadingCell-Bax77anx.js";import"./ColumnConfigDialog-BHuWFt8t.js";import"./DraggableList-6e2N0cSH.js";import"./search-CSQzmj9y.js";import"./Input-CmqnqFxK.js";import"./useControlled-2QWb7bZB.js";import"./Button-X3pcCJxf.js";import"./small-cross-qu8LZoy6.js";import"./ActionButton-Do_ZLaI6.js";import"./Checkbox-DsaK4CC-.js";import"./useValueChanged-Da2WPzqs.js";import"./CollapsiblePanel-DUiPkmDM.js";import"./MultiColumnSortDialog-BKzxXvjt.js";import"./MenuTrigger-DmSEvktb.js";import"./CompositeItem-CKKkXKKr.js";import"./ToolbarRootContext-4_oBwQs6.js";import"./getDisabledMountTransitionStyles-BmtzZkd7.js";import"./getPseudoElementBounds-CLq8MpBn.js";import"./chevron-down-WrvVs3Y7.js";import"./index-Ujvos5Bu.js";import"./error-BGGXhU_S.js";import"./BaseCbacBanner-Bwe36--Z.js";import"./makeExternalStore-NS27kiyv.js";import"./Tooltip-h5iXzAIl.js";import"./PopoverPopup-BZJMElBM.js";import"./debounce-C4dGlWDp.js";import"./useOsdkClient-D3fIC1F8.js";import"./tick-DXX_EiYG.js";import"./DropdownField-CUMisXrx.js";import"./isEqual-DkQgEU8T.js";import"./withOsdkMetrics-DmAggtUS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
