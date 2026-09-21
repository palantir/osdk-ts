import{f as p,j as e}from"./iframe-ErFjiRdR.js";import{O as i}from"./object-table-QyogTFES.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QXATeijz.js";import"./Table-DJVVBOBS.js";import"./index-CprRWtZ0.js";import"./Dialog-ckZVKOH3.js";import"./cross-DA1xIqSH.js";import"./svgIconContainer-DwCJmDQ6.js";import"./useBaseUiId-q1R-2ocn.js";import"./InternalBackdrop-BVX_h7aO.js";import"./composite-BNsKQKoz.js";import"./index-DyME0HO3.js";import"./index-R776mpCr.js";import"./index-CioP4s9H.js";import"./useEventCallback-CsjBQJGO.js";import"./SkeletonBar-9G0HH7I4.js";import"./LoadingCell-DvDzoNzg.js";import"./ColumnConfigDialog-WsY2GTDy.js";import"./DraggableList-R0EEiGI7.js";import"./search-D70lAymL.js";import"./Input-5vpb7ex0.js";import"./useControlled-y5HTd1hS.js";import"./Button-Bkuli5yv.js";import"./small-cross-W7MFHZ4g.js";import"./ActionButton-BmfgSZLa.js";import"./Checkbox-DAHD9CoB.js";import"./useValueChanged-sN946PV6.js";import"./CollapsiblePanel-Cb17J6r_.js";import"./MultiColumnSortDialog-Chshm_fF.js";import"./MenuTrigger-DfZeTdKg.js";import"./CompositeItem-CXu476SC.js";import"./ToolbarRootContext-DKYtYCzN.js";import"./getDisabledMountTransitionStyles-CudQAnha.js";import"./getPseudoElementBounds-BWDQXgDF.js";import"./chevron-down-8N5DEpE8.js";import"./index-B68TyCJi.js";import"./error-D-xAMd6a.js";import"./BaseCbacBanner-8yr2Itnn.js";import"./makeExternalStore-BmDH-BLi.js";import"./Tooltip-DVQuoGJ7.js";import"./PopoverPopup-CBq8CNSA.js";import"./debounce-DAbWe4HY.js";import"./useOsdkClient-B2bg1Zbb.js";import"./tick-CsfDOtgs.js";import"./DropdownField-CxUf6e52.js";import"./isEqual-Bsn6PwYT.js";import"./withOsdkMetrics-LLxyWREg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
