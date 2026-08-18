import{f as p,j as e}from"./iframe-CNz8RlYl.js";import{O as i}from"./object-table-BFKZlesw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BIeB60q0.js";import"./Table-Dyr6DZ2y.js";import"./index-XxW0KRYf.js";import"./Dialog-yEMCC74c.js";import"./cross-CO8ceZUf.js";import"./svgIconContainer-B0JmWAlI.js";import"./useBaseUiId-D4vwSczU.js";import"./InternalBackdrop--VJLOWNr.js";import"./composite-CZy-mnNe.js";import"./index-DGRndsQB.js";import"./index-BlGd4sFh.js";import"./index-CPfBu2RL.js";import"./useEventCallback-DfP35NXy.js";import"./SkeletonBar-Sl0pLnzx.js";import"./LoadingCell-CsRc4-EC.js";import"./ColumnConfigDialog-RcbP0ZVL.js";import"./DraggableList-Bi4SEbSM.js";import"./search-ERRW7qI9.js";import"./Input-CpAPI-dP.js";import"./useControlled-DQvqj1ii.js";import"./Button-BoQYF-o_.js";import"./small-cross-PTH7Ve-P.js";import"./ActionButton-revmG3rY.js";import"./Checkbox-CdslJ3sm.js";import"./useValueChanged-C6ABxE1k.js";import"./CollapsiblePanel-DvAEYQfZ.js";import"./MultiColumnSortDialog-CovHMgzm.js";import"./MenuTrigger-BYzbxebb.js";import"./CompositeItem-rHSaquZY.js";import"./ToolbarRootContext-D4VXXO-L.js";import"./getDisabledMountTransitionStyles-B2i134Af.js";import"./getPseudoElementBounds-Der8dMUs.js";import"./chevron-down-DoirlpdZ.js";import"./index-9-SdAaB2.js";import"./error-DqoZ7f_W.js";import"./BaseCbacBanner-DHpPxvN7.js";import"./makeExternalStore-pBRszKy8.js";import"./Tooltip-CAngo_3k.js";import"./PopoverPopup-Dj7q3xHP.js";import"./debounce-DBQB4U5e.js";import"./useOsdkClient-il4guZPb.js";import"./tick-Bs481eBK.js";import"./DropdownField-DQKVOkv8.js";import"./isEqual-CofoEUjw.js";import"./withOsdkMetrics-CtoWR-rA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
