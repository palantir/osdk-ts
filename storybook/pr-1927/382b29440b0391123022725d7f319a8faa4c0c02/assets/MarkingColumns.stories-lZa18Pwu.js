import{f as p,j as e}from"./iframe-_L5VjRrt.js";import{O as i}from"./object-table-vrHGfDA2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2Th1jMen.js";import"./Table-BgyDI0P0.js";import"./index-C21TqT6A.js";import"./Dialog-T3kPpvfF.js";import"./cross-CeGchC5k.js";import"./svgIconContainer-BHdOMCzo.js";import"./useBaseUiId-CLf0rG-Y.js";import"./InternalBackdrop-CVobSM-Y.js";import"./composite-BKH4xaR3.js";import"./index-C59OjD3A.js";import"./index-CAYM-DXb.js";import"./index-BWg3v_Cb.js";import"./useEventCallback-CCz9s_PD.js";import"./SkeletonBar-DCXS-4Lv.js";import"./LoadingCell-BPbHXBpz.js";import"./ColumnConfigDialog-qpdQOzBp.js";import"./DraggableList-DX1Q01Z2.js";import"./search-R2xVmJoP.js";import"./Input-CBdQ7CLm.js";import"./useControlled-BOvXcwwU.js";import"./Button-3S271LoP.js";import"./small-cross-DCVV53M4.js";import"./ActionButton-BNAbHBhx.js";import"./Checkbox-IuxkZPag.js";import"./useValueChanged-CT291c3y.js";import"./CollapsiblePanel-dyMCKZQz.js";import"./MultiColumnSortDialog-D3Dzmy9A.js";import"./MenuTrigger-Zqdvbqhh.js";import"./CompositeItem-CGUDnveH.js";import"./ToolbarRootContext-DgA7tKZV.js";import"./getDisabledMountTransitionStyles-B0LZucnd.js";import"./getPseudoElementBounds-dkD9ei8K.js";import"./chevron-down-C1AwO93k.js";import"./index-CgBjnwND.js";import"./error-CIgeHO6b.js";import"./BaseCbacBanner-qj0KxNTh.js";import"./makeExternalStore-T_eRZyL4.js";import"./Tooltip-B51qexXS.js";import"./PopoverPopup-ejbGtFr0.js";import"./debounce-Bph0YPdb.js";import"./useOsdkClient-Dngj-l1S.js";import"./tick-3efxYCqZ.js";import"./DropdownField-CSmhnhSy.js";import"./isEqual-CYCC0neJ.js";import"./withOsdkMetrics-Clckg0kN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
