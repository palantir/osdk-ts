import{f as p,j as e}from"./iframe-CcC1m7dm.js";import{O as i}from"./object-table-z-o8Y4iJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DeCk53aw.js";import"./Table-XdRQ7Pf5.js";import"./index-0gvTVOTK.js";import"./Dialog-DPbZCooR.js";import"./cross-DV51ECIz.js";import"./svgIconContainer-yjiCwwqK.js";import"./useBaseUiId-CzCqcGop.js";import"./InternalBackdrop-9qsE-EbY.js";import"./composite-tUxKNezP.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./index-BxRkQYGY.js";import"./useEventCallback-Blu-LJRb.js";import"./SkeletonBar-DnFTb433.js";import"./LoadingCell-n5L8BfX4.js";import"./ColumnConfigDialog-CmQYy65e.js";import"./DraggableList-BWAET7wQ.js";import"./search-BXFqiFKZ.js";import"./Input-CPQRmcYd.js";import"./useControlled-SAzSAZAO.js";import"./Button-D0RNeWLg.js";import"./small-cross-DS174T3T.js";import"./ActionButton-BhdUY9pE.js";import"./Checkbox-C12Dz3AB.js";import"./useValueChanged-BstO879O.js";import"./CollapsiblePanel-vSa8PNib.js";import"./MultiColumnSortDialog-BoKeQuHw.js";import"./MenuTrigger-CxgA7hxA.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./getDisabledMountTransitionStyles-1Tab1F_A.js";import"./getPseudoElementBounds-DJdribUH.js";import"./chevron-down-C2TUiN-F.js";import"./index-CNWy2Wzu.js";import"./error-hsPgizh-.js";import"./BaseCbacBanner-Cx9EGDV_.js";import"./makeExternalStore-cat_cA42.js";import"./Tooltip-B0OqTl9G.js";import"./PopoverPopup-C7-o66fe.js";import"./debounce-C2vAZ4aB.js";import"./useOsdkClient-DUcNDZWw.js";import"./tick-BhUO318A.js";import"./DropdownField-BHSw1oU1.js";import"./isEqual-vdF0S_a3.js";import"./withOsdkMetrics-Cqfc_v3H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
