import{f as p,j as e}from"./iframe-Cg6ASuCP.js";import{O as i}from"./object-table-Bjcz7bbV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DfTsClZx.js";import"./index-V7Glt-8h.js";import"./Dialog-mMmJOESS.js";import"./cross-SbgvyX3H.js";import"./svgIconContainer-DcmQCQdV.js";import"./useBaseUiId-B89yFkvR.js";import"./InternalBackdrop-mi8ZWe1N.js";import"./composite-bA2XaVwF.js";import"./index-B5FPzhRE.js";import"./index-BIztXxky.js";import"./index-CkTqgvGy.js";import"./useEventCallback-BucIXtc8.js";import"./SkeletonBar-CK58xaGD.js";import"./LoadingCell-CRmF0eo7.js";import"./ColumnConfigDialog-Cq6rALBK.js";import"./DraggableList-B-rXfia1.js";import"./search-WAfjvqtM.js";import"./Input-CWI7iTNo.js";import"./useControlled-CnGpIwtD.js";import"./isEqual-CXkZB2pT.js";import"./isObject-B2DRC6w3.js";import"./Button-KGRl-1x_.js";import"./ActionButton-CGl6msdG.js";import"./Checkbox-IOTuwp8F.js";import"./useValueChanged-2Khr2vsL.js";import"./CollapsiblePanel-Cza2zXbU.js";import"./MultiColumnSortDialog-CiuR-z3s.js";import"./MenuTrigger-BfUVXqr2.js";import"./CompositeItem-UIqmeTDm.js";import"./ToolbarRootContext-CkyWDlNb.js";import"./getDisabledMountTransitionStyles-CpoZCCtH.js";import"./getPseudoElementBounds-BUFIRwYb.js";import"./chevron-down-CS-4kcLV.js";import"./index-BifWs9Kg.js";import"./error-C4_u6BdE.js";import"./BaseCbacBanner-COg9wZkT.js";import"./makeExternalStore-CqKKW2oa.js";import"./Tooltip-Ch0Baty8.js";import"./PopoverPopup-CBNXtRDD.js";import"./toNumber-BPwhhvms.js";import"./useOsdkClient-fJTfa-DY.js";import"./tick-Bi_LeeaD.js";import"./DropdownField-ky6IQ2yo.js";import"./withOsdkMetrics-B9NdYHre.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
