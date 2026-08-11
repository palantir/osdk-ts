import{f as p,j as e}from"./iframe-MD_hxJ5J.js";import{O as i}from"./object-table-BysSjEUR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CxmPmWZ8.js";import"./Table-C0PNNGWc.js";import"./index-64-1SNr_.js";import"./Dialog-D69y0_7h.js";import"./cross-D46twNIG.js";import"./svgIconContainer-BvauezIc.js";import"./useBaseUiId-ChxOhtPS.js";import"./InternalBackdrop-Cqjgz7i6.js";import"./composite-C2KSVEv8.js";import"./index-BZUy6kD9.js";import"./index-Cg6AvCFD.js";import"./index-D4y1rNQs.js";import"./useEventCallback-C5sJ9WEe.js";import"./SkeletonBar-Hr-KZlfW.js";import"./LoadingCell-CsGyK1hi.js";import"./ColumnConfigDialog-BYmJzKVj.js";import"./DraggableList-CPFfWHpr.js";import"./search-7pK9Rle0.js";import"./Input-0PB2eg3D.js";import"./useControlled-C8cjmXAr.js";import"./isEqual-tprnv5r8.js";import"./isObject-DUcirasF.js";import"./Button-DTHIbyog.js";import"./ActionButton-B6Tvr6s_.js";import"./Checkbox-Gr2j_OCE.js";import"./useValueChanged-BooVG2Ea.js";import"./CollapsiblePanel-B36qfma4.js";import"./MultiColumnSortDialog-CsWcyhKj.js";import"./MenuTrigger-DRuvgmkE.js";import"./CompositeItem-CADo38Yn.js";import"./ToolbarRootContext-BSmt9IfE.js";import"./getDisabledMountTransitionStyles-CtRo1WPu.js";import"./getPseudoElementBounds-XHz08wL-.js";import"./chevron-down-BLw2RaDz.js";import"./index-Bke-1tqH.js";import"./error-BL4ywDu6.js";import"./BaseCbacBanner-C8xLY8Qd.js";import"./makeExternalStore-CQNZO13J.js";import"./Tooltip-CEMJXePV.js";import"./PopoverPopup-BiefuPNN.js";import"./toNumber-CZGYHYtn.js";import"./useOsdkClient-DKSwjyPJ.js";import"./tick-5aivGE4p.js";import"./DropdownField-TiPjHrlF.js";import"./withOsdkMetrics-DoESnEyg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
