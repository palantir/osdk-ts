import{f as p,j as e}from"./iframe-IYYJd2m9.js";import{O as i}from"./object-table-xPMVFcHm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFRTU8XL.js";import"./Table-iuVojU_1.js";import"./index-Db-eG3LN.js";import"./Dialog-FSl23wJV.js";import"./cross-KJA2o58Q.js";import"./svgIconContainer-B0Zw0e2B.js";import"./useBaseUiId-gMGlPD7U.js";import"./InternalBackdrop-6rPcc_n0.js";import"./composite-CvcKSveb.js";import"./index-DKHKGVOU.js";import"./index-DAnfA0in.js";import"./index-cmlbejKx.js";import"./useEventCallback-BRAtMScW.js";import"./SkeletonBar-C63LV7Rk.js";import"./LoadingCell-B9W9paLZ.js";import"./ColumnConfigDialog-DNEiA0Ox.js";import"./DraggableList-Cv_dcLbc.js";import"./search-CUDcYcS5.js";import"./Input-0frZHORa.js";import"./useControlled-2w2YfNvU.js";import"./Button-DQEdYpKK.js";import"./small-cross-D1iJnykI.js";import"./ActionButton-HX3-dAro.js";import"./Checkbox-DWaJq7Yp.js";import"./useValueChanged-BOlMICo1.js";import"./CollapsiblePanel-aw6L5bfc.js";import"./MultiColumnSortDialog-CV8aTgYk.js";import"./MenuTrigger-DR9Fwge5.js";import"./CompositeItem-B-bfj5TP.js";import"./ToolbarRootContext-CFnhaKDy.js";import"./getDisabledMountTransitionStyles-58Y24a1v.js";import"./getPseudoElementBounds-CCefMmxm.js";import"./chevron-down-B1MpC4Hz.js";import"./index-DsFI9coQ.js";import"./error-B-Yx8VFp.js";import"./BaseCbacBanner-DkONxgZ5.js";import"./makeExternalStore-DEaKK2Sx.js";import"./Tooltip-CGjryGi2.js";import"./PopoverPopup-J11dr7bo.js";import"./debounce-lUqXN7vV.js";import"./useOsdkClient-BfouKB8F.js";import"./tick-ChhTG65X.js";import"./DropdownField-Cb58jruB.js";import"./isEqual-BFMVJJkC.js";import"./withOsdkMetrics-DxXSp5TR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
