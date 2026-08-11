import{f as p,j as e}from"./iframe-BmMBMHjI.js";import{O as i}from"./object-table-CwFkNJIZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wzQkPQkq.js";import"./Table-C0pMP8sT.js";import"./index-B599Nl-W.js";import"./Dialog-BrDE5tk2.js";import"./cross-B9gM567t.js";import"./svgIconContainer-BQffYzRd.js";import"./useBaseUiId-BHpwAgpt.js";import"./InternalBackdrop-Rey_LVZ5.js";import"./composite-DSlcQFOp.js";import"./index-Ebkov8ab.js";import"./index-DG25GMXZ.js";import"./index-CZomj7go.js";import"./useEventCallback-sI5dVxlB.js";import"./SkeletonBar-LCe0Qgj0.js";import"./LoadingCell-BVWrLxF3.js";import"./ColumnConfigDialog-B35KuuxY.js";import"./DraggableList-5I1ixPpy.js";import"./search-D8XOPKVg.js";import"./Input-C23cy_6N.js";import"./useControlled-DfCV0PJg.js";import"./isEqual-3N5baw8B.js";import"./isObject-DbwYW1di.js";import"./Button-B9Rc1kKc.js";import"./ActionButton-Coa8HnK-.js";import"./Checkbox-snF-j8bO.js";import"./useValueChanged-CD5svSbs.js";import"./CollapsiblePanel-NYsMCJls.js";import"./MultiColumnSortDialog-mbkcwnyG.js";import"./MenuTrigger-Ba203MiR.js";import"./CompositeItem-DqqLZlu_.js";import"./ToolbarRootContext-DGVWKOqx.js";import"./getDisabledMountTransitionStyles-B5NkpSNb.js";import"./getPseudoElementBounds-WnDsJbwn.js";import"./chevron-down-D3dzWqXW.js";import"./index-C-Jg4LdO.js";import"./error-Dmt4lvM1.js";import"./BaseCbacBanner-Cpy5qmDf.js";import"./makeExternalStore-CAgM2Mvg.js";import"./Tooltip-Qnk5LM6P.js";import"./PopoverPopup-Biha7jk9.js";import"./toNumber-B6PNWjcS.js";import"./useOsdkClient-B74PkpGl.js";import"./tick-O0hT94BT.js";import"./DropdownField-GaW_KRF2.js";import"./withOsdkMetrics-CY55LUs5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
