import{f as p,j as e}from"./iframe-DAHj67mi.js";import{O as i}from"./object-table-CF1_mpNc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C5TxACGe.js";import"./index-jtr0hjnV.js";import"./Dialog-DLC6pff3.js";import"./cross-BvmJ2kUU.js";import"./svgIconContainer-R6fLsDAI.js";import"./useBaseUiId-C8n2JbgI.js";import"./InternalBackdrop-BZgwOFWU.js";import"./composite-BjTY1dgM.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./index-BoBv6Oh5.js";import"./useEventCallback-B1gHHm4j.js";import"./SkeletonBar-DhFCtk-U.js";import"./LoadingCell-B2AiaHPg.js";import"./ColumnConfigDialog-BJ25K1mH.js";import"./DraggableList-MixG4jS2.js";import"./search-DlMMVas5.js";import"./Input-BqNeXUfN.js";import"./useControlled-wTpIHr1L.js";import"./Button-D3ukGqLV.js";import"./small-cross-DGpFJ7WA.js";import"./ActionButton-bdH5SZoM.js";import"./Checkbox-Cc1-PZPa.js";import"./useValueChanged-K_Rdj1zl.js";import"./CollapsiblePanel-rgTr9UFW.js";import"./MultiColumnSortDialog-DocotWMb.js";import"./MenuTrigger-Bc_s6vOl.js";import"./CompositeItem-ylUTChcd.js";import"./ToolbarRootContext-D0N5miEu.js";import"./getDisabledMountTransitionStyles-DLcvNa0d.js";import"./getPseudoElementBounds-DVEYMREJ.js";import"./chevron-down-CDzCov52.js";import"./index-B0icYv8E.js";import"./error-kGSlj1sb.js";import"./BaseCbacBanner-Dn4fA3fP.js";import"./makeExternalStore-CclpbdPf.js";import"./Tooltip-DigvRnDG.js";import"./PopoverPopup-UX8-cCYh.js";import"./Select-D2Soavwn.js";import"./useOsdkClient-DSpnlmuA.js";import"./tick-tJ7_3KbK.js";import"./DropdownField-FJYu2uWa.js";import"./useDebouncedCallback-C7UP5udY.js";import"./isEqual-B_3QYyrr.js";import"./_baseIsEqual-1hDRXEi_.js";import"./stableSerialize-BlYl1Cik.js";import"./withOsdkMetrics-DRVx42Qf.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
