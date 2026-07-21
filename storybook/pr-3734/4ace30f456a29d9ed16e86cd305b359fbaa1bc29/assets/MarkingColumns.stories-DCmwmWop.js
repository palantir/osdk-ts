import{f as p,j as e}from"./iframe-CpwJPeyh.js";import{O as i}from"./object-table-BnrqyQF6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GrGVcR2a.js";import"./Table-DzfjySjW.js";import"./index-DJkA5721.js";import"./Dialog-H-mKm1_Q.js";import"./cross-BJntrg2g.js";import"./svgIconContainer-CqkgEI8-.js";import"./useBaseUiId-DihNpFQ5.js";import"./InternalBackdrop-BIy4rB2g.js";import"./composite-C-Beuk3S.js";import"./index-tzu8SvT9.js";import"./index-B6xsto9n.js";import"./index-Bq9Ipd8V.js";import"./useEventCallback-Lg50Z1uB.js";import"./SkeletonBar-B7n7GM6J.js";import"./LoadingCell-UnqXRjOb.js";import"./ColumnConfigDialog-BXnck7ri.js";import"./DraggableList-BT6VmVR4.js";import"./search-rn4tl3gn.js";import"./Input-YvJt1O2i.js";import"./useControlled-DZ9apck0.js";import"./isEqual--gKKWI32.js";import"./isObject-CDJPgJy4.js";import"./Button-Bb-o9PCs.js";import"./ActionButton-BlyZTbqV.js";import"./Checkbox-Bq31nRAU.js";import"./useValueChanged-mSswcGvK.js";import"./CollapsiblePanel-fMkxFo_n.js";import"./MultiColumnSortDialog-L0sTM-wy.js";import"./MenuTrigger-l7mCAK2w.js";import"./CompositeItem-BnN8NUKf.js";import"./ToolbarRootContext-C-Uwte3Q.js";import"./getDisabledMountTransitionStyles-mgrrECha.js";import"./getPseudoElementBounds-BaQr93H7.js";import"./chevron-down-DUHALcBs.js";import"./index-_j5MOVdN.js";import"./error-D2J8vF0B.js";import"./BaseCbacBanner-Box_ntxc.js";import"./makeExternalStore-CC5gBc3G.js";import"./Tooltip-DvYwRJYL.js";import"./PopoverPopup-BNWXsbi8.js";import"./toNumber-DPTXrdYx.js";import"./useOsdkClient-B-FT6pj5.js";import"./tick-DqEVx7Lv.js";import"./DropdownField-CWfgf_Ao.js";import"./withOsdkMetrics-CbwW1UHo.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
