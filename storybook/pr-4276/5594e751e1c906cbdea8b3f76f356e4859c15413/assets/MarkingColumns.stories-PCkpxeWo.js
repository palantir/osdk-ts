import{f as p,j as e}from"./iframe-Cp-VmNqL.js";import{O as i}from"./object-table-fVHk6Y9j.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AzhWXDuQ.js";import"./Table-C10pEohY.js";import"./index-dpygWVpJ.js";import"./Dialog-mfRgTcvc.js";import"./cross-uOKlIsXG.js";import"./svgIconContainer-zkQ14032.js";import"./useBaseUiId-OdIul-yE.js";import"./InternalBackdrop-Bt0yPmbq.js";import"./composite-DlQhckwI.js";import"./index-tUkk1A8p.js";import"./index-yO_woVyq.js";import"./index-Dv_Pm10I.js";import"./useEventCallback-DQ3ev7p0.js";import"./SkeletonBar-CobUMKVq.js";import"./LoadingCell-BLSw_Usr.js";import"./ColumnConfigDialog-8CcQMjz1.js";import"./DraggableList-8e9q-xdO.js";import"./search-HIN2ZGpm.js";import"./Input-BEEKmunm.js";import"./useControlled-OYIwur-C.js";import"./Button-NTUIWe38.js";import"./small-cross-CK1o2en6.js";import"./ActionButton-BN3wr41o.js";import"./Checkbox-dZI16_ZG.js";import"./useValueChanged-PvBM_FRE.js";import"./CollapsiblePanel-DBGwpADH.js";import"./MultiColumnSortDialog-B7_4K9o8.js";import"./MenuTrigger-psdGvQmS.js";import"./CompositeItem-CzQ4Mwjm.js";import"./ToolbarRootContext-DNY7Xc1D.js";import"./getDisabledMountTransitionStyles-DUUZwERC.js";import"./getPseudoElementBounds-AmAefdLG.js";import"./chevron-down-Dk2LvJq7.js";import"./index-Jc-X2-Ds.js";import"./error-BJ-TznDH.js";import"./BaseCbacBanner-BgrbmI5X.js";import"./makeExternalStore-oKADq8a2.js";import"./Tooltip-BczU44S5.js";import"./isObject-HPrV1TH6.js";import"./debounce-DCaOx8Rx.js";import"./useOsdkClient-Dc4Jqd5m.js";import"./tick-Bfi0n5W9.js";import"./DropdownField-BVLbkf-i.js";import"./isEqual-B45AHlAy.js";import"./_baseIsEqual-ctM4qMgO.js";import"./withOsdkMetrics-CWuMV6f9.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
