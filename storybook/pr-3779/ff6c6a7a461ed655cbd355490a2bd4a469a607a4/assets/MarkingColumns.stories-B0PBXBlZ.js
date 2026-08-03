import{f as p,j as e}from"./iframe-BDk1IBq0.js";import{O as i}from"./object-table-DjkcdMg4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BTKlFRVT.js";import"./Table-DE3ljT2V.js";import"./index-D7NXbx8O.js";import"./Dialog-cZAFZTwe.js";import"./cross-Yxj_6q4K.js";import"./svgIconContainer-DLmZ_O8B.js";import"./useBaseUiId-DMGSqHE1.js";import"./InternalBackdrop-C03lckkn.js";import"./composite-DMaSIPCu.js";import"./index-Cp3LCsCN.js";import"./index-Ck8z4N77.js";import"./index-DA9cjqaH.js";import"./useEventCallback-BEMfQixj.js";import"./SkeletonBar-Dw7U1fP3.js";import"./LoadingCell-CxrasSrx.js";import"./ColumnConfigDialog-Fs6CZohf.js";import"./DraggableList-BFFHsIkL.js";import"./search-T09tFGVD.js";import"./Input-PeixbVvf.js";import"./useControlled-DBk8iBgn.js";import"./isEqual-C9Q3zzlP.js";import"./isObject-w7NVVWuX.js";import"./Button-D-40IJBp.js";import"./ActionButton-DLjH0OdS.js";import"./Checkbox-CvcVswea.js";import"./useValueChanged-DaOmXYwX.js";import"./CollapsiblePanel-BF9AllQ8.js";import"./MultiColumnSortDialog-Bxdps7Tw.js";import"./MenuTrigger-FvGzwaZM.js";import"./CompositeItem-DqtdQCsE.js";import"./ToolbarRootContext-DIhUV_VV.js";import"./getDisabledMountTransitionStyles-C2C8eikI.js";import"./getPseudoElementBounds-B7o_2H9U.js";import"./chevron-down-ewV3babK.js";import"./index-DBlapOjg.js";import"./error-B4CqJvC_.js";import"./BaseCbacBanner-BSZQ4RtC.js";import"./makeExternalStore-1Ey3n_is.js";import"./Tooltip-B_ggEf85.js";import"./PopoverPopup-DOdenRZd.js";import"./toNumber-CNNoyzkY.js";import"./useOsdkClient-B4kJdbyd.js";import"./tick-CMR_boep.js";import"./DropdownField-59d9SWFp.js";import"./withOsdkMetrics-CfKSz8RV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
