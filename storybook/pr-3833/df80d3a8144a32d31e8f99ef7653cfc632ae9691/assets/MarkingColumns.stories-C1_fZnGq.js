import{f as p,j as e}from"./iframe-Ccflwbci.js";import{O as i}from"./object-table-1GBHejr9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wr7_iP2o.js";import"./Table-NaYHmXqg.js";import"./index-CpsvpGUe.js";import"./Dialog-02ZWIh_l.js";import"./cross-CMgZFgZF.js";import"./svgIconContainer-Cepk_4ly.js";import"./useBaseUiId-WPl9OK4D.js";import"./InternalBackdrop-BDdhHd1v.js";import"./composite-C9Rp5H4o.js";import"./index-DnQt8rFF.js";import"./index-Ch-qdtZV.js";import"./index-BpTZx_xG.js";import"./useEventCallback-H5sQEvRk.js";import"./SkeletonBar-DuIHYxXR.js";import"./LoadingCell-CM40Krc5.js";import"./ColumnConfigDialog-DDvxuMYz.js";import"./DraggableList-CrxjXnyI.js";import"./search-xzH4WAuR.js";import"./Input-DL3wG5cx.js";import"./useControlled-CPTTGrVV.js";import"./isEqual-Co-8GGGH.js";import"./isObject-C9un3BSS.js";import"./Button-CTcQr_p3.js";import"./ActionButton-CUUK9wbz.js";import"./Checkbox-Dkt7HrQ9.js";import"./useValueChanged-BrNvQ_6w.js";import"./CollapsiblePanel-By2OUVWo.js";import"./MultiColumnSortDialog-C6Z4oQR3.js";import"./MenuTrigger-BemlYMAx.js";import"./CompositeItem-cdsIBR5_.js";import"./ToolbarRootContext-D_-uFHqt.js";import"./getDisabledMountTransitionStyles-DsF9pAEs.js";import"./getPseudoElementBounds-CkiI2b_9.js";import"./chevron-down-DOhdBcS5.js";import"./index-qYGSMIpd.js";import"./error-F0UcLgfA.js";import"./BaseCbacBanner-fukVi_hJ.js";import"./makeExternalStore-B9YW9e1O.js";import"./Tooltip-CHeal-fF.js";import"./PopoverPopup-KX6urh2m.js";import"./toNumber-BVGNT-Nz.js";import"./useOsdkClient-DSEN7giB.js";import"./tick-2IsKUyMz.js";import"./DropdownField-pC7bQq9H.js";import"./withOsdkMetrics-gAWdhCc4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
