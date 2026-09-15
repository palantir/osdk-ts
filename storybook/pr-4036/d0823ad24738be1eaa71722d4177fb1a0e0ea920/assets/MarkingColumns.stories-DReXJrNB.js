import{f as p,j as e}from"./iframe-yBf-ojhu.js";import{O as i}from"./object-table-BOMqJs_O.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CGYiisRB.js";import"./Table-wxABhy6h.js";import"./index-CdRKjNXW.js";import"./Dialog-fHOO5fq8.js";import"./cross-CpqgxsIm.js";import"./svgIconContainer-DzKsK3pp.js";import"./useBaseUiId-CZtNEuC3.js";import"./InternalBackdrop-CSsFLgHu.js";import"./composite-BhJud1YY.js";import"./index-BHACjACD.js";import"./index-CsTimawz.js";import"./index-Dzg0FXju.js";import"./useEventCallback-BnKVbXQ1.js";import"./SkeletonBar-CgzkWc0c.js";import"./LoadingCell-Dql00YBl.js";import"./ColumnConfigDialog-qA8wMTWY.js";import"./DraggableList-DK0Kd-EX.js";import"./search-BZ0OOikS.js";import"./Input-IJnkzHlh.js";import"./useControlled-DEWrsH1j.js";import"./Button-CqafgKxL.js";import"./small-cross-Kn8vx_NT.js";import"./ActionButton-C7HMH6t8.js";import"./Checkbox-CaAT9v9q.js";import"./useValueChanged-gQZ0oDOl.js";import"./CollapsiblePanel-Dv1dlGER.js";import"./MultiColumnSortDialog-CjusWDNY.js";import"./MenuTrigger-DORfdr2z.js";import"./CompositeItem-BMY8zStj.js";import"./ToolbarRootContext-CnGnSWc3.js";import"./getDisabledMountTransitionStyles-CSwVJeOc.js";import"./getPseudoElementBounds-D2L7paF4.js";import"./chevron-down-C0-Ffhm_.js";import"./index-DXSY2W-l.js";import"./error-C4tONck9.js";import"./BaseCbacBanner-BrmvnQoe.js";import"./makeExternalStore-BJgD01DS.js";import"./Tooltip-Clch_Qe4.js";import"./PopoverPopup-wI-K4VZI.js";import"./debounce-B2jafETK.js";import"./useOsdkClient-Bw9VJD_N.js";import"./tick-BXpIlGo8.js";import"./DropdownField-CBnk-NYj.js";import"./isEqual-Bj0FLhJj.js";import"./withOsdkMetrics-CxM1E0kE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
