import{f as p,j as e}from"./iframe-BzqK-L3x.js";import{O as i}from"./object-table-OaquGUP5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKlEVweK.js";import"./Table-VZgD2rIs.js";import"./index-CAFk7Pq5.js";import"./Dialog-Cs_MSF_O.js";import"./cross-Dbky2_5e.js";import"./svgIconContainer-CSL2gIeC.js";import"./useBaseUiId-C-iu15of.js";import"./InternalBackdrop-Cxu2fNBT.js";import"./composite-C9E7l6t3.js";import"./index-BlWV0Ebq.js";import"./index-DncDRzcB.js";import"./index-iXJXK9FX.js";import"./useEventCallback-D-Sglxt5.js";import"./SkeletonBar-BpdDGpzK.js";import"./LoadingCell-CZoreGqQ.js";import"./ColumnConfigDialog-C_pwIUqS.js";import"./DraggableList-DIRMuv72.js";import"./search-D0Jcsyiy.js";import"./Input-Cpl2x-wp.js";import"./useControlled-C0lOLQQX.js";import"./Button-fL19aB2n.js";import"./small-cross-DSq1Ji79.js";import"./ActionButton-CBPhJdYI.js";import"./Checkbox-C4sxA_lV.js";import"./useValueChanged-DRI8i0U9.js";import"./CollapsiblePanel-C6mzDoEl.js";import"./MultiColumnSortDialog-vDHQUtRg.js";import"./MenuTrigger-DmNawmm-.js";import"./CompositeItem-BZg5qy-d.js";import"./ToolbarRootContext-k1NWQ1L0.js";import"./getDisabledMountTransitionStyles-J5Ooz9tY.js";import"./getPseudoElementBounds-DbK25kQg.js";import"./chevron-down-CaTsAVif.js";import"./index-Bn_5eQCw.js";import"./error-CPni5UMa.js";import"./BaseCbacBanner-DxMvHT91.js";import"./makeExternalStore-BlKOrYUq.js";import"./Tooltip-BLliu4sM.js";import"./PopoverPopup-C4o9R-HV.js";import"./debounce-DAbmYcqu.js";import"./useOsdkClient-BlZCOoSZ.js";import"./tick-fV4K9fjf.js";import"./DropdownField-ir124Bdv.js";import"./isEqual-CWLt9LFF.js";import"./withOsdkMetrics-o-hRBNLG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
