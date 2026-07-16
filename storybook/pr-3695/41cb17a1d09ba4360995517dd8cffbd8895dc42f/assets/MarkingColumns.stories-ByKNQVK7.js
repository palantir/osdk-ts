import{f as p,j as e}from"./iframe-B3ON-Bh8.js";import{O as i}from"./object-table-T2u1cA-i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrAZwIhC.js";import"./Table-C-sbj_59.js";import"./index-eNh6hv_-.js";import"./Dialog-CJ_3isPS.js";import"./cross-Cdzhm16M.js";import"./svgIconContainer-vmYm-prF.js";import"./useBaseUiId-DK_xnagp.js";import"./InternalBackdrop-Dbhd26V8.js";import"./composite-BuMlRczj.js";import"./index-Bn0evHgr.js";import"./index-Cm9O8KIX.js";import"./index-CmBtbzcH.js";import"./useEventCallback-BehAxpTH.js";import"./SkeletonBar-C3lPZgvA.js";import"./LoadingCell-CNTrL3Uz.js";import"./ColumnConfigDialog-DgxvcyFZ.js";import"./DraggableList-9W54Vle2.js";import"./search-g9bviAUS.js";import"./Input-WA17603D.js";import"./useControlled-DmnnRIQ_.js";import"./Button-m63Z_so0.js";import"./small-cross-DJnWX1UG.js";import"./ActionButton-DnizniR2.js";import"./Checkbox-jkI4c9wz.js";import"./useValueChanged-BT9pgu5d.js";import"./CollapsiblePanel-BdGWC1CL.js";import"./MultiColumnSortDialog-BvuTGmVd.js";import"./MenuTrigger-BBJDtNlC.js";import"./CompositeItem-BVGkt4zB.js";import"./ToolbarRootContext-DCiCihYc.js";import"./getDisabledMountTransitionStyles-GHK2nkm7.js";import"./getPseudoElementBounds-CR263vpL.js";import"./chevron-down-CVq2PDOV.js";import"./index-CH_p88jr.js";import"./error-DcSOw756.js";import"./BaseCbacBanner-D6ktFaHk.js";import"./makeExternalStore-Cu-SjYrY.js";import"./Tooltip-Qoa9z_tJ.js";import"./PopoverPopup-BAqZ4-un.js";import"./toNumber-BiOQCIEc.js";import"./useOsdkClient-CTEIFvYL.js";import"./tick-BikCXQ_2.js";import"./DropdownField-B1ZRp1XB.js";import"./withOsdkMetrics-K_Pzkso4.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
