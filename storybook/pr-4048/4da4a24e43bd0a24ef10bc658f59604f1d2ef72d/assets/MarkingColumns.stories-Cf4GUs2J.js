import{f as p,j as e}from"./iframe-DjbWNQ0f.js";import{O as i}from"./object-table-BLFRI_j0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZqHfMjf.js";import"./Table-D-DNjlJ6.js";import"./index-DRSVy1id.js";import"./Dialog-C__zk8w2.js";import"./cross-Cqp-lwuB.js";import"./svgIconContainer-DpceGvSJ.js";import"./useBaseUiId-CQ0aFnKR.js";import"./InternalBackdrop-CooNNSHH.js";import"./composite-ChJITrYk.js";import"./index-B_S3CqUO.js";import"./index-CT8ZI4c8.js";import"./index-DfXwDEaE.js";import"./useEventCallback-BSzqPBzd.js";import"./SkeletonBar-Biacx3N_.js";import"./LoadingCell-MOiVHXCy.js";import"./ColumnConfigDialog-CDHUXiAV.js";import"./DraggableList-BJMM2TUa.js";import"./search-Cp6KPEc7.js";import"./Input-qPpH6qdj.js";import"./useControlled-CdWNY0zK.js";import"./Button-DMt4PyPT.js";import"./small-cross-Drrz11Vc.js";import"./ActionButton-DNL1JaTx.js";import"./Checkbox-gSuuoLi1.js";import"./useValueChanged-_VLUSyOj.js";import"./CollapsiblePanel-1MDyh-8L.js";import"./MultiColumnSortDialog-DDlQXzaN.js";import"./MenuTrigger-pODNQNtv.js";import"./CompositeItem-BSe1aJMv.js";import"./ToolbarRootContext-DHwz-r64.js";import"./getDisabledMountTransitionStyles-S-y8QJJa.js";import"./getPseudoElementBounds-B8z3ndYd.js";import"./chevron-down-Dn4fSYZt.js";import"./index-C8Z34pPC.js";import"./error-DBRIaq9T.js";import"./BaseCbacBanner-BLRwhIfO.js";import"./makeExternalStore-BTX3xjPy.js";import"./Tooltip-Bg_Tux9e.js";import"./PopoverPopup-HGqWpJmj.js";import"./debounce-CbTVWiuR.js";import"./useOsdkClient-Bc0GWDgg.js";import"./tick-gtzlN82s.js";import"./DropdownField-DPS-yQWq.js";import"./isEqual-DNABgG-o.js";import"./withOsdkMetrics-DMIQgg40.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
