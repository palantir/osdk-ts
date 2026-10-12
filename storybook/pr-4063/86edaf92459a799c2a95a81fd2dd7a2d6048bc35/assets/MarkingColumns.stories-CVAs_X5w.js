import{f as p,j as e}from"./iframe-3pBmeYFT.js";import{O as i}from"./object-table-CHJks8jw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vBjj0fkZ.js";import"./Table-vdKFS0Yg.js";import"./index-HXkjhg6z.js";import"./Dialog-bohs-JHl.js";import"./cross-Cw8SpRPo.js";import"./svgIconContainer-oYexr0c7.js";import"./useBaseUiId-BX_7JiSc.js";import"./InternalBackdrop-Bf5bS0-N.js";import"./composite-D407pmHd.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./index-CNtaAiKb.js";import"./useEventCallback-QikBKoT3.js";import"./SkeletonBar-DcraF9ed.js";import"./LoadingCell-CS2lLg3a.js";import"./ColumnConfigDialog-OA7WNg3J.js";import"./DraggableList-Dxq5-d78.js";import"./search-CQOti8kz.js";import"./Input-BQ6oicvc.js";import"./useControlled-MqJ_-6UI.js";import"./Button-DVJw32Da.js";import"./small-cross-4xzNgjst.js";import"./ActionButton-CSRC1G7d.js";import"./Checkbox-4IlBbgeN.js";import"./useValueChanged-Dv4NLcIJ.js";import"./CollapsiblePanel-DN3NPDIL.js";import"./MultiColumnSortDialog-BZTLQdea.js";import"./MenuTrigger-DEPOBuIh.js";import"./CompositeItem-BAzi-4_X.js";import"./ToolbarRootContext-BROspXHg.js";import"./getDisabledMountTransitionStyles-BzXEt7kT.js";import"./getPseudoElementBounds-VW5wliGx.js";import"./chevron-down-CPXZLq0t.js";import"./index-C-EOv5jG.js";import"./error-oFoemtYn.js";import"./BaseCbacBanner-BDE7gmhL.js";import"./makeExternalStore-B9tQcCLS.js";import"./Tooltip-DFKKdGeu.js";import"./PopoverPopup-DWqfD9XE.js";import"./debounce-BUj2tWGy.js";import"./useOsdkClient-DBkdWm96.js";import"./tick-BvsLxO6_.js";import"./DropdownField-vPiacE-M.js";import"./isEqual-DikiAgWF.js";import"./withOsdkMetrics-CZjqmY54.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
