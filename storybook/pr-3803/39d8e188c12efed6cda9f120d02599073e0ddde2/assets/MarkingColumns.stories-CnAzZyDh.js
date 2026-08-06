import{f as p,j as e}from"./iframe-DiX2626k.js";import{O as i}from"./object-table-D3gr3Mpc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CgOT8OGd.js";import"./Table-DtbOZWAd.js";import"./index-C_a3B7P8.js";import"./Dialog-D_br3pPB.js";import"./cross-ChthWFmt.js";import"./svgIconContainer-BHXjiRCE.js";import"./useBaseUiId-Dw9BhH-r.js";import"./InternalBackdrop-cTMtjssL.js";import"./composite-BiL7kwGo.js";import"./index-BU1sDqZl.js";import"./index-BN-4XXfM.js";import"./index-DPWlnP4D.js";import"./useEventCallback-CA_JVHJ1.js";import"./SkeletonBar-DSeMrJwC.js";import"./LoadingCell-Bh3S_WfL.js";import"./ColumnConfigDialog-CJtUG27g.js";import"./DraggableList-CZ1MIVA8.js";import"./search-Ch6GmwTu.js";import"./Input-0BqYVGVX.js";import"./useControlled-CxjPKzUJ.js";import"./isEqual-DEKGYxXe.js";import"./isObject-CXcvN3kl.js";import"./Button-DcxIJd10.js";import"./ActionButton-zWukBAep.js";import"./Checkbox-BXFMQuBS.js";import"./useValueChanged-BN-eh1-G.js";import"./CollapsiblePanel-CfY2wZ25.js";import"./MultiColumnSortDialog-CGkw4JOQ.js";import"./MenuTrigger-th41DMhC.js";import"./CompositeItem-ZBpRCkxX.js";import"./ToolbarRootContext-DHdMmgSm.js";import"./getDisabledMountTransitionStyles-DLljnWq6.js";import"./getPseudoElementBounds-BnlTiciN.js";import"./chevron-down-BU7zIy-t.js";import"./index-q-Uvoyav.js";import"./error-BCYvkDQZ.js";import"./BaseCbacBanner-BjACYSVj.js";import"./makeExternalStore-BnR4KHg7.js";import"./Tooltip-BiefMEZh.js";import"./PopoverPopup-B1Yhtsuj.js";import"./toNumber-iY1WLnn2.js";import"./useOsdkClient-5SwITSvW.js";import"./tick-BXKWEd6P.js";import"./DropdownField-7lSUVTV7.js";import"./withOsdkMetrics-D26ty9CF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
