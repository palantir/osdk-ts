import{f as p,j as e}from"./iframe-BOWU70X1.js";import{O as i}from"./object-table-cgavINgx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsrGzdLY.js";import"./Table-DOvh1xsn.js";import"./index-Dqy6Gfe7.js";import"./Dialog-B3WyzR5G.js";import"./cross-CVkoRI6N.js";import"./svgIconContainer-B9QIza-c.js";import"./useBaseUiId-8tGgV_0l.js";import"./InternalBackdrop-D2-B01xw.js";import"./composite-CSfG6ZaY.js";import"./index-BfjmLFxg.js";import"./index-DAEdDj8Q.js";import"./index-BSYQw0Uy.js";import"./useEventCallback-CoK8fJ8c.js";import"./SkeletonBar-xXHQ0iAC.js";import"./LoadingCell-CeE69STT.js";import"./ColumnConfigDialog-D3gFq4wl.js";import"./DraggableList-Dp5fZ28N.js";import"./search-Bm_8-FpL.js";import"./Input-Ba0NW75w.js";import"./useControlled-BdeVhzxt.js";import"./Button-BvbX1UI9.js";import"./small-cross-DKR3JJry.js";import"./ActionButton-CK7KXvFI.js";import"./Checkbox-pIrtE80l.js";import"./useValueChanged-Cko8QSI4.js";import"./CollapsiblePanel-IZqS99Hx.js";import"./MultiColumnSortDialog-C_pNjzkQ.js";import"./MenuTrigger-B1Guhxs6.js";import"./CompositeItem-CIAYfkGT.js";import"./ToolbarRootContext-CaVCFQJS.js";import"./getDisabledMountTransitionStyles-DisM1mEX.js";import"./getPseudoElementBounds-Beh_f-hj.js";import"./chevron-down-B1Z7ByUI.js";import"./index-utUHJIrZ.js";import"./error-BjTP1vhZ.js";import"./BaseCbacBanner-C_PYpr4S.js";import"./makeExternalStore-BS5Bz3Hp.js";import"./Tooltip-CWU8oDpl.js";import"./PopoverPopup-CZm5dGxt.js";import"./debounce-C0cDACkJ.js";import"./useOsdkClient-D5uHxQat.js";import"./tick-ByRVlpzT.js";import"./DropdownField-DmaOVCkJ.js";import"./isEqual-DMW34l0I.js";import"./withOsdkMetrics-Bjyc-H5X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
