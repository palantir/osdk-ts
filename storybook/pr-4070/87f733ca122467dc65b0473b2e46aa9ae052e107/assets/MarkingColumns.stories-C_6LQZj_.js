import{f as p,j as e}from"./iframe-BlDiaW1h.js";import{O as i}from"./object-table-Ce-hqaoS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PtL6Kd_x.js";import"./Table-Ca7ofY9H.js";import"./index-DfWhxneD.js";import"./Dialog-C0LenXNZ.js";import"./cross-e0aRrlM-.js";import"./svgIconContainer-kniEZwHz.js";import"./useBaseUiId-CNzKZZyr.js";import"./InternalBackdrop-CknQDtg2.js";import"./composite-RC4cbmpt.js";import"./index-CaosaIAK.js";import"./index-ClB2daRU.js";import"./index-C44_u6Fw.js";import"./useEventCallback-DsUQ3PVF.js";import"./SkeletonBar-CPfB3dvv.js";import"./LoadingCell-4skw1OEJ.js";import"./ColumnConfigDialog-DrvuPspn.js";import"./DraggableList-BbYQHNIJ.js";import"./search-BTwweTf6.js";import"./Input-Bii20VeK.js";import"./useControlled-DBQ0gE6b.js";import"./Button-BcWNCj5I.js";import"./small-cross-1dCALZ0r.js";import"./ActionButton-DCdCIlKP.js";import"./Checkbox-BFzsHOZs.js";import"./useValueChanged-Ig3qxvFS.js";import"./CollapsiblePanel-BeO6_bQ6.js";import"./MultiColumnSortDialog-DY1R-uWF.js";import"./MenuTrigger-CAVJV5J3.js";import"./CompositeItem-OhI6t6UV.js";import"./ToolbarRootContext-B0Ir569T.js";import"./getDisabledMountTransitionStyles-Oq1-yxTZ.js";import"./getPseudoElementBounds-IJPs3uLW.js";import"./chevron-down-CQlGXejk.js";import"./index-DIgLDkvV.js";import"./error-DI0bgW6O.js";import"./BaseCbacBanner-Bp7AuwxH.js";import"./makeExternalStore-BGsi_gFr.js";import"./Tooltip-Cay9QyIc.js";import"./PopoverPopup-CQXuiQcH.js";import"./debounce-Byq2NX1_.js";import"./useOsdkClient-0OHPk9sh.js";import"./tick-a-bDbPLS.js";import"./DropdownField-RavzYQu_.js";import"./isEqual-B5seZJ2p.js";import"./withOsdkMetrics-BxS0W9JC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
