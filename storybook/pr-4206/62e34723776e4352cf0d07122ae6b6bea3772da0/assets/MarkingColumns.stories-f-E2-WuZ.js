import{f as p,j as e}from"./iframe-kxdUQCve.js";import{O as i}from"./object-table-BAMrafAm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cuq4TkHU.js";import"./Table-ZCQwY607.js";import"./index-Dj-vHPb7.js";import"./Dialog-CzGO940J.js";import"./cross-BGuVVI58.js";import"./svgIconContainer-0muFsb9b.js";import"./useBaseUiId-DHH2yIbk.js";import"./InternalBackdrop-BZ9l1zrW.js";import"./composite-Bj70JY7P.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./index-ClZwirhD.js";import"./useEventCallback-Bq9ZgDOO.js";import"./SkeletonBar-tkvmB8An.js";import"./LoadingCell-QLYyy_ta.js";import"./ColumnConfigDialog-CmW0Mys6.js";import"./DraggableList-BoFiuN1_.js";import"./search-Dtrnv9od.js";import"./Input-DaXzRTeY.js";import"./useControlled-BW2k3psm.js";import"./Button-Ca-rtxgT.js";import"./small-cross-CNq41qjz.js";import"./ActionButton-DqspKp5t.js";import"./Checkbox-D-YxkcmG.js";import"./useValueChanged-DqoHHV3-.js";import"./CollapsiblePanel-MI7Qpoh1.js";import"./MultiColumnSortDialog-Q2AWLRsd.js";import"./MenuTrigger-CixaXCmF.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./getDisabledMountTransitionStyles-lcQ0Umsd.js";import"./getPseudoElementBounds-CPNZb4-2.js";import"./chevron-down-CKJ5Wwcf.js";import"./index-CAihI7G4.js";import"./error-Dc_ezcGJ.js";import"./BaseCbacBanner-xD1_g2fI.js";import"./makeExternalStore-CNzfft50.js";import"./Tooltip-BfGevlTY.js";import"./PopoverPopup-uby0I1CE.js";import"./debounce-BnMuliNi.js";import"./useOsdkClient-B1pTCJqX.js";import"./tick-Brv0cW5L.js";import"./DropdownField-ggEkgwUW.js";import"./isEqual-C16UXMCJ.js";import"./withOsdkMetrics-BsNzoRp3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
