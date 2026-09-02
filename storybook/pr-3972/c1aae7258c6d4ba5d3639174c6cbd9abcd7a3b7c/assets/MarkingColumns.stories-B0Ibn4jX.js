import{f as p,j as e}from"./iframe-D-YVkBdv.js";import{O as i}from"./object-table-DSMedtq1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_q1ENjXx.js";import"./Table-2Tri_Ec9.js";import"./index-D0bxYvtz.js";import"./Dialog-DFvYaONf.js";import"./cross-ClH0_H4w.js";import"./svgIconContainer-DDMXlF2M.js";import"./useBaseUiId-3VW8EFPd.js";import"./InternalBackdrop-C4LAnxkW.js";import"./composite-OshwPNjT.js";import"./index-DL0aWY-I.js";import"./index-Dv4gaO6G.js";import"./index-C_-WA-Do.js";import"./useEventCallback-BomJVgJ2.js";import"./SkeletonBar-CMCSIcnX.js";import"./LoadingCell-DwNUad0k.js";import"./ColumnConfigDialog-BlOPtPiA.js";import"./DraggableList-BpPgPeVp.js";import"./search-C5Mg5i_j.js";import"./Input-BQVgTzKu.js";import"./useControlled-C6k-yuxA.js";import"./Button-BmynEVTb.js";import"./small-cross-DoIYebHc.js";import"./ActionButton-mqL3sp89.js";import"./Checkbox-kwE5hH_y.js";import"./useValueChanged-1g9c2CbG.js";import"./CollapsiblePanel-Bjyt7xeM.js";import"./MultiColumnSortDialog-4055pRUc.js";import"./MenuTrigger-DLMiKJEj.js";import"./CompositeItem-B9XOzr5r.js";import"./ToolbarRootContext-C0Zkd7BN.js";import"./getDisabledMountTransitionStyles-BQmzDkGp.js";import"./getPseudoElementBounds-DJfyOCz1.js";import"./chevron-down-DJW-OO5g.js";import"./index-hHcESr47.js";import"./error-DLaKvyDO.js";import"./BaseCbacBanner-2-wgiHpz.js";import"./makeExternalStore-CCIciaKQ.js";import"./Tooltip-iWwEcmz_.js";import"./PopoverPopup-C8ygOczV.js";import"./debounce-BmbcUYOw.js";import"./useOsdkClient-yhwhd92y.js";import"./tick-DQ2Owbrw.js";import"./DropdownField-nhbLlfgI.js";import"./isEqual-FOvNndLt.js";import"./withOsdkMetrics-BbwSxYIO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
