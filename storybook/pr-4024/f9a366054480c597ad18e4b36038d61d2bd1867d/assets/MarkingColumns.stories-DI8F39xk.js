import{f as p,j as e}from"./iframe-jMwYipi7.js";import{O as i}from"./object-table-DqCE7m8Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DuATZxWQ.js";import"./Table-Bco2QWZU.js";import"./index-Dz_M8fMm.js";import"./Dialog-BvewtxLp.js";import"./cross-D4s078tN.js";import"./svgIconContainer-C67djf6q.js";import"./useBaseUiId-CowvthfG.js";import"./InternalBackdrop-DMfDH2vS.js";import"./composite-CY5glQip.js";import"./index-_q0G2ZtV.js";import"./index-DEfzi2BY.js";import"./index-B-GHK9XU.js";import"./useEventCallback-BWoB4Eoe.js";import"./SkeletonBar-B0rvX527.js";import"./LoadingCell-CcW0Hh0k.js";import"./ColumnConfigDialog-DSsDrkGF.js";import"./DraggableList-DWqWm6Gb.js";import"./search-CZYRjLGu.js";import"./Input-yW4xW1y2.js";import"./useControlled-CkNav0ZD.js";import"./Button-CQ-F38oG.js";import"./small-cross-fIpnPilt.js";import"./ActionButton-DoLv7Bc0.js";import"./Checkbox-COWIvfzP.js";import"./useValueChanged-DU8GXm_T.js";import"./CollapsiblePanel--Covd7Se.js";import"./MultiColumnSortDialog-CTtUUKI-.js";import"./MenuTrigger-DWDMzYwZ.js";import"./CompositeItem-BFcshnAb.js";import"./ToolbarRootContext-CyHNucoq.js";import"./getDisabledMountTransitionStyles-CkP6dO--.js";import"./getPseudoElementBounds-Iu6zkRHv.js";import"./chevron-down-DoTJVfbo.js";import"./index-CLIDYXaA.js";import"./error-D1FCJ2D3.js";import"./BaseCbacBanner-C24i1Y0t.js";import"./makeExternalStore-DpRr9t8b.js";import"./Tooltip-CSvM8AX_.js";import"./PopoverPopup-DiKkC9qL.js";import"./debounce-DcYvAVr6.js";import"./useOsdkClient-BdINNOYX.js";import"./tick-B4Iihx0z.js";import"./DropdownField-lNbdtwFm.js";import"./isEqual-1uMDO8x-.js";import"./withOsdkMetrics-CY_PsP6V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
