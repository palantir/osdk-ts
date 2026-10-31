import{f as p,j as e}from"./iframe-0Iz5vwcT.js";import{O as i}from"./object-table-DKWAT-Fj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPuYeI1F.js";import"./Table-DQnxVUz9.js";import"./index-CwqL2BSp.js";import"./Dialog-zoM-tL9f.js";import"./cross-zS2Wnz2V.js";import"./svgIconContainer--rVYZd1H.js";import"./useBaseUiId-BzcgVOgr.js";import"./InternalBackdrop-CIp9NUV4.js";import"./composite-N0Lz-u2v.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./index-BZki0KLB.js";import"./useEventCallback-OZngxyt9.js";import"./SkeletonBar-B5YslJhy.js";import"./LoadingCell-P7TCSaZN.js";import"./ColumnConfigDialog-4xk1CJcu.js";import"./DraggableList-DWCTZj5F.js";import"./search-C60pdPoy.js";import"./Input-CxV_aY0Y.js";import"./useControlled-BgJ32gqU.js";import"./Button-DmPkGrX2.js";import"./small-cross-CVGlFgTv.js";import"./ActionButton-C5FOmGzz.js";import"./Checkbox-DsJE1lPn.js";import"./useValueChanged-C8jXi1Db.js";import"./CollapsiblePanel-BCIeAMta.js";import"./MultiColumnSortDialog-DGCz0v4U.js";import"./MenuTrigger-DTlZrVLo.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./getDisabledMountTransitionStyles-Cx-ixMqU.js";import"./getPseudoElementBounds-BUv5HBAP.js";import"./chevron-down-BAJ5mZyN.js";import"./index-Cl9Abjho.js";import"./error-D9h6iLxx.js";import"./BaseCbacBanner-CQg0ZUIR.js";import"./makeExternalStore-CFnbMMz3.js";import"./Tooltip-BVWIJEtT.js";import"./PopoverPopup-CowTNg7A.js";import"./debounce-B18_zKUH.js";import"./useOsdkClient-BuNKTI6L.js";import"./tick-Jp1l8F3U.js";import"./DropdownField-DFrco9Qo.js";import"./isEqual-DzmNlRkK.js";import"./withOsdkMetrics-kzWOWE3o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
