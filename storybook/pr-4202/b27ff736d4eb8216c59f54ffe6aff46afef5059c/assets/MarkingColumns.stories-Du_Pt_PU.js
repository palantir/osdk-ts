import{f as p,j as e}from"./iframe-DpYBlUf6.js";import{O as i}from"./object-table-B4dQhKDm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-aJL6Jgcy.js";import"./Table-DnbhSzQH.js";import"./index-DG12qFyq.js";import"./Dialog-D_2RIDue.js";import"./cross-hvj-E3FQ.js";import"./svgIconContainer-BNnaw46F.js";import"./useBaseUiId-Cvpk5u0b.js";import"./InternalBackdrop-yAnNHODP.js";import"./composite-kZPGPCkC.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./index-iyK82M59.js";import"./useEventCallback-DbLrzPiT.js";import"./SkeletonBar-Bim1zKuG.js";import"./LoadingCell-DkQrHs-y.js";import"./ColumnConfigDialog-yNxOstzr.js";import"./DraggableList-DVXGvHZi.js";import"./search-B-2FwTug.js";import"./Input-BuqKJ0cI.js";import"./useControlled-BzCwoTTi.js";import"./Button-OjQdDHcR.js";import"./small-cross-CE66X8dX.js";import"./ActionButton-DWHTDIUq.js";import"./Checkbox-DIIlcsg1.js";import"./useValueChanged-DfSVAW7h.js";import"./CollapsiblePanel-BOO07fZk.js";import"./MultiColumnSortDialog-6-IDQkGN.js";import"./MenuTrigger-D3BrYWAo.js";import"./CompositeItem-3SIjESMP.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./getDisabledMountTransitionStyles-B2rY7D_M.js";import"./getPseudoElementBounds-BET_L97X.js";import"./chevron-down-DiWPSqGR.js";import"./index-DvRXLSHl.js";import"./error-_sVszbe4.js";import"./BaseCbacBanner-D67ftno0.js";import"./makeExternalStore-Dk5562or.js";import"./Tooltip-iXECaKde.js";import"./PopoverPopup-CjONQpR9.js";import"./debounce-D-UCwN4o.js";import"./useOsdkClient-BDUknGJW.js";import"./tick-DQwvbD-D.js";import"./DropdownField-C4CuM9xG.js";import"./isEqual-ByuLvGFi.js";import"./withOsdkMetrics-Db3uKV6F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
