import{f as p,j as e}from"./iframe-DIsuQOn3.js";import{O as i}from"./object-table-Cd6Ezhoj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4-DY1XA.js";import"./Table-DNWr-Ufu.js";import"./index-DDUWefxd.js";import"./Dialog-DXYkahwp.js";import"./cross-tvYPvXsb.js";import"./svgIconContainer-Dc19E04o.js";import"./useBaseUiId-KXmclwOQ.js";import"./InternalBackdrop-Z3WNzKgy.js";import"./composite-Cieee4Ac.js";import"./index-yKKDsrZW.js";import"./index-CHAIk4qd.js";import"./index-4qujKuhJ.js";import"./useEventCallback-BReMLTyY.js";import"./SkeletonBar-CCfy-2Fl.js";import"./LoadingCell-DXc0SvPJ.js";import"./ColumnConfigDialog-CqUIXDcK.js";import"./DraggableList-BHLN-Zz7.js";import"./search-BXyxqXsb.js";import"./Input-ChZNHuDE.js";import"./useControlled-CNU4MnWQ.js";import"./Button-SgvkStmW.js";import"./small-cross-CTvIFdJF.js";import"./ActionButton-CEEeCIPZ.js";import"./Checkbox-B2-VCIqp.js";import"./useValueChanged--eVggWgx.js";import"./CollapsiblePanel-D1ePGiZR.js";import"./MultiColumnSortDialog-B-lrD4XC.js";import"./MenuTrigger-BNmYz1FI.js";import"./CompositeItem-Dk6CpBJD.js";import"./ToolbarRootContext-DPQZSAuV.js";import"./getDisabledMountTransitionStyles-Bveqp3mS.js";import"./getPseudoElementBounds-DTH4TDRK.js";import"./chevron-down-C_9riItt.js";import"./index-DkWi2KH1.js";import"./error-DpfjWw-I.js";import"./BaseCbacBanner-muCdKLCl.js";import"./makeExternalStore-2cK-X4a7.js";import"./Tooltip-B5gVs8IO.js";import"./PopoverPopup-drv0vkbG.js";import"./debounce--qe2URPh.js";import"./useOsdkClient-B5UtOc8b.js";import"./tick-CM6bqr7p.js";import"./DropdownField-CPMOgCNE.js";import"./isEqual-6EwGBAda.js";import"./withOsdkMetrics-DC7VgxYE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
