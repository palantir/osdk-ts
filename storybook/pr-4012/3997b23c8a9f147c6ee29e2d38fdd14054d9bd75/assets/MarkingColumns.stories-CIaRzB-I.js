import{f as p,j as e}from"./iframe-BFPzVvxY.js";import{O as i}from"./object-table-CHhCZndI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFSQ1G8J.js";import"./Table-B-Hb2ntx.js";import"./index-CCGax6tv.js";import"./Dialog-BonrkksJ.js";import"./cross-CB2SiIfn.js";import"./svgIconContainer-zvRTjm1U.js";import"./useBaseUiId-lA3GGoRZ.js";import"./InternalBackdrop-DCGl8xdy.js";import"./composite-ByiulZct.js";import"./index-CDsjmQfs.js";import"./index-CQTk_3Md.js";import"./index-D7KtHfV_.js";import"./useEventCallback-BSZKvIy_.js";import"./SkeletonBar-Wei8CvBD.js";import"./LoadingCell-DVS43WKx.js";import"./ColumnConfigDialog-CxikgimD.js";import"./DraggableList-CPRGtOd_.js";import"./search-B9sXG8EA.js";import"./Input-SASUrwvz.js";import"./useControlled-CS4AozJ9.js";import"./Button-DM9BYVFF.js";import"./small-cross-BqhrN3UV.js";import"./ActionButton-D-sFARx4.js";import"./Checkbox-WVx5Lfwa.js";import"./useValueChanged-CMkIGbNr.js";import"./CollapsiblePanel-B72c7sdX.js";import"./MultiColumnSortDialog-BCIJp_FY.js";import"./MenuTrigger-DM82LJ7Y.js";import"./CompositeItem-hoe_aJWZ.js";import"./ToolbarRootContext-Bn6OEZQ8.js";import"./getDisabledMountTransitionStyles-DVrl5q0D.js";import"./getPseudoElementBounds-D0xI4mdk.js";import"./chevron-down-Ui6vbKSY.js";import"./index-D76rkl6E.js";import"./error-C6XCbteP.js";import"./BaseCbacBanner-pMf8_PAt.js";import"./makeExternalStore-ke7w82mB.js";import"./Tooltip-C5Z1Ogwk.js";import"./PopoverPopup-BmVShL7M.js";import"./debounce-DaSP3gYA.js";import"./useOsdkClient-D0KfoQzg.js";import"./tick-COqQzl1O.js";import"./DropdownField-CKw_sIr2.js";import"./isEqual-nfganQgj.js";import"./withOsdkMetrics-BCHhaE-8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
