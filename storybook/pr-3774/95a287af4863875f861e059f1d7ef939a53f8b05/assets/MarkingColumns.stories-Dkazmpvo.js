import{f as p,j as e}from"./iframe-BpLfy_7x.js";import{O as i}from"./object-table-CL0RxuLw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hhne1Nkw.js";import"./Table-BwK3TnxG.js";import"./index-CI-PQox6.js";import"./Dialog-DMcE_XRG.js";import"./cross-PuYX_-t_.js";import"./svgIconContainer-BJcxFCQJ.js";import"./useBaseUiId-DLhvCT2w.js";import"./InternalBackdrop-Cg_--_dl.js";import"./composite-D6MrKr0W.js";import"./index-CqzGtbz4.js";import"./index-CS2EtUA3.js";import"./index-DwBmIhXs.js";import"./useEventCallback-BV_slrjv.js";import"./SkeletonBar-BzHVnwiO.js";import"./LoadingCell-Bk1UD4jE.js";import"./ColumnConfigDialog-BoVBRbX8.js";import"./DraggableList-zk1lRqcV.js";import"./search-CWqxR7My.js";import"./Input-B6V3A2xO.js";import"./useControlled-DQnuFJYA.js";import"./isEqual-BKD4Aek-.js";import"./isObject-CsyTGM2I.js";import"./Button-ByGcR2jl.js";import"./ActionButton-tsCNhUs0.js";import"./Checkbox-NjQGrJij.js";import"./useValueChanged-Bpm4XFJy.js";import"./CollapsiblePanel-nl4mApkG.js";import"./MultiColumnSortDialog-DjwA5Ul2.js";import"./MenuTrigger-CUguWp68.js";import"./CompositeItem-Dh49dnMe.js";import"./ToolbarRootContext-CZ4baxUR.js";import"./getDisabledMountTransitionStyles-BDsUR9tp.js";import"./getPseudoElementBounds-Cd9zz7lc.js";import"./chevron-down-BWdhcgKJ.js";import"./index-DsR_IMSl.js";import"./error-gXA04YBk.js";import"./BaseCbacBanner-2LazQZjv.js";import"./makeExternalStore-GYdWhjGR.js";import"./Tooltip-CvFV6amD.js";import"./PopoverPopup-C83W7I3e.js";import"./toNumber-DnkrpAWO.js";import"./useOsdkClient-m5GobuOi.js";import"./tick-Pu-HkBZn.js";import"./DropdownField-CZQQBYxn.js";import"./withOsdkMetrics-C4NgfUdQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
