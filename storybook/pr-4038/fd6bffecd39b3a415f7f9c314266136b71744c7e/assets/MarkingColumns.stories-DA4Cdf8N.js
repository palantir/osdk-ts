import{f as p,j as e}from"./iframe-voMwDu9I.js";import{O as i}from"./object-table-OMRvFpLe.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YavkZJGd.js";import"./Table-HID_wtcK.js";import"./index-C1wISBvp.js";import"./Dialog-DGl--fRl.js";import"./cross-Dtmq2APj.js";import"./svgIconContainer-BNVNdA9N.js";import"./useBaseUiId-h_zaYehG.js";import"./InternalBackdrop-Bg2Pn1be.js";import"./composite-DmYT7ddW.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./index-FmnW_XGx.js";import"./useEventCallback-Bimyknxr.js";import"./SkeletonBar-BfD5j53C.js";import"./LoadingCell-nTTc6Rbq.js";import"./ColumnConfigDialog-DTW2qmKN.js";import"./DraggableList-47qY9eDY.js";import"./search-C1v65Y4n.js";import"./Input-fxz47iVN.js";import"./useControlled-DQz2j8QF.js";import"./Button-BuGgzmKH.js";import"./small-cross-CkCJfZA3.js";import"./ActionButton-h7gq_W3b.js";import"./Checkbox-DIaxw-mP.js";import"./useValueChanged-B51ZhceZ.js";import"./CollapsiblePanel-DTchAleF.js";import"./MultiColumnSortDialog-CFkANgFh.js";import"./MenuTrigger-BFiK90mT.js";import"./CompositeItem-DkKn9mJ-.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./getDisabledMountTransitionStyles-O0gDbVYL.js";import"./getPseudoElementBounds-BGhK9mLg.js";import"./chevron-down-C58xTrh7.js";import"./index-BRox0REU.js";import"./error-Dh0kRUzk.js";import"./BaseCbacBanner-jRpkz4dK.js";import"./makeExternalStore-D4KyXXBP.js";import"./Tooltip-DdvT815d.js";import"./PopoverPopup-B7NNXEVs.js";import"./debounce-CLoU_st_.js";import"./useOsdkClient-DI51Lvg2.js";import"./tick-CQYdHD5k.js";import"./DropdownField-HtDR-_bI.js";import"./isEqual-DCso8IO6.js";import"./withOsdkMetrics-DiALcgCI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
