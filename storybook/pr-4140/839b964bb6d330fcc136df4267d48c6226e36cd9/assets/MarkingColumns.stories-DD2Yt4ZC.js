import{f as p,j as e}from"./iframe-CjvYcpTc.js";import{O as i}from"./object-table-Cr4f5Dyz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwAZ_RFp.js";import"./Table-OGDc2Vu9.js";import"./index-DuZ19wcn.js";import"./Dialog-AmWXXXAn.js";import"./cross-C7lWgdj2.js";import"./svgIconContainer-B4kwPvVG.js";import"./useBaseUiId-CZUJXt98.js";import"./InternalBackdrop-Cvpmom_D.js";import"./composite-Dv8ZzttY.js";import"./index-CEXd5f6A.js";import"./index-DNoEMSLE.js";import"./index-CMgAql6Y.js";import"./useEventCallback-ByweALPq.js";import"./SkeletonBar-CEUKT4EZ.js";import"./LoadingCell-BHA_MaqJ.js";import"./ColumnConfigDialog-k2ALTpny.js";import"./DraggableList-b_HqS-PO.js";import"./search-C9XpCEsC.js";import"./Input-B4ChrBJV.js";import"./useControlled-BgiktbGb.js";import"./Button-x48_kffx.js";import"./small-cross-DrNdp9td.js";import"./ActionButton-CNilsdeF.js";import"./Checkbox-C7J_efzv.js";import"./useValueChanged-jVldrQSp.js";import"./CollapsiblePanel-BOX1nR00.js";import"./MultiColumnSortDialog-RIUXj6qp.js";import"./MenuTrigger-C7JnYkRW.js";import"./CompositeItem-CrZyp1SA.js";import"./ToolbarRootContext-H5FrOgLL.js";import"./getDisabledMountTransitionStyles-D8pKVFxg.js";import"./getPseudoElementBounds-zCP0_jeb.js";import"./chevron-down-B6AkEAGC.js";import"./index-BaiLSRkn.js";import"./error-DdgUBnOy.js";import"./BaseCbacBanner-fTPjPnTf.js";import"./makeExternalStore-CTMnuTK_.js";import"./Tooltip-B-fFKI94.js";import"./PopoverPopup-DhrzdhL9.js";import"./debounce-d3qhgy8J.js";import"./useOsdkClient-DyGGfFqC.js";import"./tick-DHMwXqUI.js";import"./DropdownField-CSAcVewx.js";import"./isEqual-Bh14zo85.js";import"./withOsdkMetrics-c8up4Ye7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
