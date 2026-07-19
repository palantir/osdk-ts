import{f as p,j as e}from"./iframe-CbsILOX1.js";import{O as i}from"./object-table-DftV7Wgn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KH2jXVqe.js";import"./Table-BX92vSe_.js";import"./index-mQCFUMVC.js";import"./Dialog-BYjOjZPm.js";import"./cross-WEN_kq-R.js";import"./svgIconContainer-CtABKPcK.js";import"./useBaseUiId-CkS0AEKj.js";import"./InternalBackdrop-DxN25aMt.js";import"./composite-CGEAG7vP.js";import"./index-CNGY0cN4.js";import"./index-BoeCby8s.js";import"./index-RCqGMEY5.js";import"./useEventCallback-BcH07WLK.js";import"./SkeletonBar-9qHOo_Vn.js";import"./LoadingCell-CtYGj7Cz.js";import"./ColumnConfigDialog-nTsPRzlq.js";import"./DraggableList-Ch2sFm4R.js";import"./search-rwF0nNiT.js";import"./Input-C5UdO1XA.js";import"./useControlled-CJ4srf6k.js";import"./isEqual-Dt0eqNdh.js";import"./isObject-BOLhYt4C.js";import"./Button-C5SAlHVZ.js";import"./ActionButton-jOH2gKcm.js";import"./Checkbox-Mlckpoab.js";import"./useValueChanged-1um15DdJ.js";import"./CollapsiblePanel-oU5O1RNe.js";import"./MultiColumnSortDialog-yUgV5pAe.js";import"./MenuTrigger-FIVRtQ4o.js";import"./CompositeItem-KKNWKktM.js";import"./ToolbarRootContext-JBI4exUW.js";import"./getDisabledMountTransitionStyles-DInEJNYv.js";import"./getPseudoElementBounds-YvMwYEaq.js";import"./chevron-down-CejGVoVr.js";import"./index-NMVopm4U.js";import"./error-BPCdK3mN.js";import"./BaseCbacBanner-B1EtMSYI.js";import"./makeExternalStore-BUQE3Sxe.js";import"./Tooltip-Dl10-d5v.js";import"./PopoverPopup-CTsruEAC.js";import"./toNumber-C5_gFke-.js";import"./useOsdkClient-DLA2_rEN.js";import"./tick-Cs_-qT1P.js";import"./DropdownField-Bq6CzzgJ.js";import"./withOsdkMetrics-BRd-n6f9.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
