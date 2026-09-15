import{f as p,j as e}from"./iframe-CMAdZ-tl.js";import{O as i}from"./object-table-Dx9xL36M.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCEvkaTh.js";import"./Table-D_DSDL0d.js";import"./index-uZXDV4-c.js";import"./Dialog-CW_CWxXG.js";import"./cross-TecNFToN.js";import"./svgIconContainer-BGo4Ffmi.js";import"./useBaseUiId-C6a-nIiQ.js";import"./InternalBackdrop-DDjtbvyl.js";import"./composite-hUzc6DpG.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./index-BVbV_G_W.js";import"./useEventCallback-1slYZiXe.js";import"./SkeletonBar-BrSrSU08.js";import"./LoadingCell-D4OTFGIY.js";import"./ColumnConfigDialog-BidNcYNA.js";import"./DraggableList-Bs_dkqHq.js";import"./search-Bbf0CQIG.js";import"./Input-EDICR5v8.js";import"./useControlled-BNZjX3EY.js";import"./Button-CMbZ2dfd.js";import"./small-cross-DSzexAdf.js";import"./ActionButton-B6tCqEcW.js";import"./Checkbox-D74xxvMN.js";import"./useValueChanged-6IX2onud.js";import"./CollapsiblePanel-Hpy333SY.js";import"./MultiColumnSortDialog-BxfQROOL.js";import"./MenuTrigger-DA2yGYW4.js";import"./CompositeItem-WbzOgrFX.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./getDisabledMountTransitionStyles-jvQsg8pP.js";import"./getPseudoElementBounds-k5Ib03Kp.js";import"./chevron-down--0eNTL5v.js";import"./index-BkytFj73.js";import"./error-CKKGLKp7.js";import"./BaseCbacBanner-DPtrzNX8.js";import"./makeExternalStore-Y97085jQ.js";import"./Tooltip-CzT_wPMb.js";import"./PopoverPopup-Dr43Tc4o.js";import"./debounce-jO5PmR1U.js";import"./useOsdkClient-DLfNvm6T.js";import"./tick-JhIa2r4T.js";import"./DropdownField-Vcml5_p5.js";import"./isEqual--xBYkPnr.js";import"./withOsdkMetrics-XprJI73J.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
