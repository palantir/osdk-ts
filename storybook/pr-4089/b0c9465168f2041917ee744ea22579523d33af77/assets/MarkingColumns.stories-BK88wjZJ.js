import{f as p,j as e}from"./iframe-DD6NR-qI.js";import{O as i}from"./object-table-DznG4301.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BhGDsbwZ.js";import"./Table-D-1i9MSI.js";import"./index-BtwIbT4Z.js";import"./Dialog-DisWgziA.js";import"./cross-CLF7AClR.js";import"./svgIconContainer-DsJ3_wfj.js";import"./useBaseUiId-CEPmW6Nu.js";import"./InternalBackdrop-BIHQ6bnZ.js";import"./composite-DjgEQHpT.js";import"./index--itJRcDL.js";import"./index-Bmje4swP.js";import"./index-Dl1GTjEV.js";import"./useEventCallback-DyKovpbC.js";import"./SkeletonBar-BEg-pQ3F.js";import"./LoadingCell-BAH65k4-.js";import"./ColumnConfigDialog-DWu_2tEl.js";import"./DraggableList-B_KSOXJ-.js";import"./search-DLBTsCln.js";import"./Input-B4mWWySb.js";import"./useControlled-DC0uCH14.js";import"./Button-C_-ilsri.js";import"./small-cross-BvQxV8Bl.js";import"./ActionButton-BYk1HVK3.js";import"./Checkbox-BkOv0Hz_.js";import"./useValueChanged-CeUE21rU.js";import"./CollapsiblePanel-BVS5L9rq.js";import"./MultiColumnSortDialog-BH4prHwb.js";import"./MenuTrigger-Bxh4-y44.js";import"./CompositeItem-CNTLKPeP.js";import"./ToolbarRootContext-BShu1aKH.js";import"./getDisabledMountTransitionStyles-CnHaSZHM.js";import"./getPseudoElementBounds-DWTs3Yu-.js";import"./chevron-down-IfIl88XA.js";import"./index-BXR8oj5v.js";import"./error-DRCC_cDq.js";import"./BaseCbacBanner-CjP1Gp2R.js";import"./makeExternalStore-opb-uo7f.js";import"./Tooltip-BCP2fXUZ.js";import"./PopoverPopup-BSa4WLOz.js";import"./debounce-BJkEGDvv.js";import"./useOsdkClient-1ZwklRfn.js";import"./tick-C4mma9FJ.js";import"./DropdownField-B7GAXqTH.js";import"./isEqual-CoS-PPQL.js";import"./withOsdkMetrics-C5Oq6SEB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
