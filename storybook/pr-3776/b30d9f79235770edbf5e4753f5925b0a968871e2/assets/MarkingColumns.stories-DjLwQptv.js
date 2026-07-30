import{f as p,j as e}from"./iframe--zC_rNSE.js";import{O as i}from"./object-table-BOe9lA2v.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DYnZD4Bp.js";import"./Table-CTrKgZzE.js";import"./index-C7vK7TKT.js";import"./Dialog-pyccm_Sl.js";import"./cross-psL1fqiM.js";import"./svgIconContainer-BSLGGDPy.js";import"./useBaseUiId-Du6_ka1U.js";import"./InternalBackdrop-BENyzdBi.js";import"./composite-D6i-F4zZ.js";import"./index-BzW3EPJ0.js";import"./index-C2WM2yYl.js";import"./index-BfXmFMou.js";import"./useEventCallback-XVofj3Q3.js";import"./SkeletonBar-YNg-qpBa.js";import"./LoadingCell-PYrIJpcx.js";import"./ColumnConfigDialog-BuMqvrVq.js";import"./DraggableList-CKyNAhn0.js";import"./search-9tv9kX9R.js";import"./Input-D1rn4ByC.js";import"./useControlled-DosfrPgq.js";import"./isEqual-Cb3ycsU3.js";import"./isObject-ByfmM9yJ.js";import"./Button-9EpLya_p.js";import"./ActionButton-DKUYSo_8.js";import"./Checkbox-D3v20XFe.js";import"./useValueChanged-mNtMEyK1.js";import"./CollapsiblePanel-DZjfEAb-.js";import"./MultiColumnSortDialog-k17NjXzm.js";import"./MenuTrigger-D1QoqV1b.js";import"./CompositeItem-CFehnZQL.js";import"./ToolbarRootContext-D5d-Ayel.js";import"./getDisabledMountTransitionStyles-PGxk2u3W.js";import"./getPseudoElementBounds-BeiAjeWH.js";import"./chevron-down-nViOd0cr.js";import"./index-D27uMw8-.js";import"./error-d8Uq0Jbt.js";import"./BaseCbacBanner-BgjAsq5O.js";import"./makeExternalStore-CC4dIOh5.js";import"./Tooltip-OnHOWk1D.js";import"./PopoverPopup-CeUgEchc.js";import"./toNumber-CkdIolk1.js";import"./useOsdkClient-Dz2X6s2_.js";import"./tick-DSSIsItL.js";import"./DropdownField-wdLac42K.js";import"./withOsdkMetrics-CljqM64x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
