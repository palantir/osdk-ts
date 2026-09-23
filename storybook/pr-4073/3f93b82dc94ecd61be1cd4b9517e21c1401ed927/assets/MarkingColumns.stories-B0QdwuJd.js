import{f as p,j as e}from"./iframe-C-vShDHk.js";import{O as i}from"./object-table-ChrRlk4s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B2rWRkvC.js";import"./Table-B-E2plp_.js";import"./index-Cx2OgQ-2.js";import"./Dialog-c6L8ABWv.js";import"./cross-CPOUhrWH.js";import"./svgIconContainer-BXOzj86j.js";import"./useBaseUiId-CVgLKRhh.js";import"./InternalBackdrop-XSBRP9bo.js";import"./composite-BHa_u3nf.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./index-qTup-brw.js";import"./useEventCallback-CQwRrFQE.js";import"./SkeletonBar-CHZBGodV.js";import"./LoadingCell-ZDStc1Dy.js";import"./ColumnConfigDialog-BiTzBvDJ.js";import"./DraggableList-DOWz5RYu.js";import"./search-D9klcMPO.js";import"./Input-ChQ78XH9.js";import"./useControlled-TStxGFbD.js";import"./Button-LZsipjsn.js";import"./small-cross-BX5QWifh.js";import"./ActionButton-DSWfmCy7.js";import"./Checkbox-9FOAFIbY.js";import"./useValueChanged-CG5ViM36.js";import"./CollapsiblePanel-CaYYpdck.js";import"./MultiColumnSortDialog-Cu9UF0CN.js";import"./MenuTrigger-DVSsQF8F.js";import"./CompositeItem-DCzVtAix.js";import"./ToolbarRootContext-JfRNTAAS.js";import"./getDisabledMountTransitionStyles-C4qD4WmU.js";import"./getPseudoElementBounds-BF0_fsUP.js";import"./chevron-down-BslLGd1l.js";import"./index-B5-Rp7Tt.js";import"./error-Dym_fJRU.js";import"./BaseCbacBanner-BLl3LiWg.js";import"./makeExternalStore-ChsmDhDe.js";import"./Tooltip-BVcNQFLP.js";import"./PopoverPopup-OKdPLocf.js";import"./debounce-Bbzc0_G8.js";import"./useOsdkClient-DoM56k-f.js";import"./tick-DHJZpSr9.js";import"./DropdownField-8AdR6NdB.js";import"./isEqual-DMj38Apr.js";import"./withOsdkMetrics-195aR8r9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
