import{f as p,j as e}from"./iframe-DP3WXvf2.js";import{O as i}from"./object-table-CmVY_AZz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BrwfpXMJ.js";import"./Table-BZMJkkfP.js";import"./index-tWkBFRv4.js";import"./Dialog-Bn0xrUiW.js";import"./cross-D7VOxDSd.js";import"./svgIconContainer-D5YO1S9t.js";import"./useBaseUiId-BOLy-sbk.js";import"./InternalBackdrop-kfOS6-6n.js";import"./composite-Bs_HXNR1.js";import"./index-4F4S8ihM.js";import"./index-dP7GtPgB.js";import"./index-D0i847yp.js";import"./useEventCallback-4WPVou47.js";import"./SkeletonBar-CQxkz69G.js";import"./LoadingCell-gmzsNyZZ.js";import"./ColumnConfigDialog-0wgW781K.js";import"./DraggableList-B5-sdrQx.js";import"./search-COU45aDA.js";import"./Input-C7i9bi6Y.js";import"./useControlled-DXyaPIDf.js";import"./isEqual-CxjDM9uY.js";import"./isObject-PPvT23lN.js";import"./Button-BlADiT-L.js";import"./ActionButton-CMlhPEAt.js";import"./Checkbox-BwX4PU9M.js";import"./useValueChanged-DQRuCOWP.js";import"./CollapsiblePanel-CPiAZkOy.js";import"./MultiColumnSortDialog-BQR6klSA.js";import"./MenuTrigger-B7KN4Klu.js";import"./CompositeItem-CAMOw487.js";import"./ToolbarRootContext-DomAOERZ.js";import"./getDisabledMountTransitionStyles-WVqhRiar.js";import"./getPseudoElementBounds-DyIib3FW.js";import"./chevron-down-DveMJf_3.js";import"./index-D_FYBlgp.js";import"./error-DEAaKdsx.js";import"./BaseCbacBanner-DHuOvfxS.js";import"./makeExternalStore-DqGepTDF.js";import"./Tooltip-CeGAKU6r.js";import"./PopoverPopup-BbWQWTj8.js";import"./toNumber-DgM7wa7_.js";import"./useOsdkClient-DHaYNoSF.js";import"./tick-CedZqE1V.js";import"./DropdownField-DLcwvT9B.js";import"./withOsdkMetrics-D03opsaL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
