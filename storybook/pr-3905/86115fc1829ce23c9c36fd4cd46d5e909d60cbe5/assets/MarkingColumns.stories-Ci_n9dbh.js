import{f as p,j as e}from"./iframe-ziUSJnwy.js";import{O as i}from"./object-table-DIN7uWyp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuN24SoO.js";import"./Table-Dgfcqnfg.js";import"./index-CofRb435.js";import"./Dialog-HvMzrP78.js";import"./cross-qr7W_6_t.js";import"./svgIconContainer-CVAk4TRf.js";import"./useBaseUiId-CfgyXuT7.js";import"./InternalBackdrop-BFNKUBx6.js";import"./composite-B-iJfWjd.js";import"./index-BeBWWYC4.js";import"./index-GXn-EEA0.js";import"./index-Dw3f6soD.js";import"./useEventCallback-Ci-2alAV.js";import"./SkeletonBar-CVuKWZbV.js";import"./LoadingCell-Ca5rfC2C.js";import"./ColumnConfigDialog-zTJ2_YbE.js";import"./DraggableList-BJkalH0x.js";import"./search-Bq-nYqiG.js";import"./Input-CdoGUrWH.js";import"./useControlled-DAbqRBrS.js";import"./Button-Dz5QTyfP.js";import"./small-cross-BdTVcWFk.js";import"./ActionButton-DmhmAAWy.js";import"./Checkbox-e0bj7BRR.js";import"./useValueChanged-DmnUfFBq.js";import"./CollapsiblePanel-CjYKtB9S.js";import"./MultiColumnSortDialog-CHKsjqSY.js";import"./MenuTrigger-DFdmP4ss.js";import"./CompositeItem-DJZZYhWP.js";import"./ToolbarRootContext-CLVK9GrX.js";import"./getDisabledMountTransitionStyles-B8iM4Qj3.js";import"./getPseudoElementBounds-DSOY-nc_.js";import"./chevron-down-DRwdNHrM.js";import"./index-VK3LiRtU.js";import"./error-CoOP9LKe.js";import"./BaseCbacBanner-BbtvZTks.js";import"./makeExternalStore-3WvhH1w0.js";import"./Tooltip-BsAin3uT.js";import"./PopoverPopup-CZ2P9khY.js";import"./debounce-CxnNLLFT.js";import"./useOsdkClient-z2aBN953.js";import"./tick-1XWTW8zZ.js";import"./DropdownField-6Fq2zGY2.js";import"./isEqual-CHTlQ9Xo.js";import"./withOsdkMetrics-CpHsbthC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
