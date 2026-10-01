import{f as p,j as e}from"./iframe-CwfFVXYm.js";import{O as i}from"./object-table-3hjC1a4Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0i1Ccv8.js";import"./Table-CiqC9yT2.js";import"./index-12mUJC8n.js";import"./Dialog-BToK1dJZ.js";import"./cross-vHANk4GA.js";import"./svgIconContainer-CGFZMhJS.js";import"./useBaseUiId-D7i-0lUl.js";import"./InternalBackdrop-DOJpSrKf.js";import"./composite-B35ndqHm.js";import"./index-DNXZoFIr.js";import"./index-D2z71Qsm.js";import"./index-Crk-izdP.js";import"./useEventCallback-YTEY1SDl.js";import"./SkeletonBar-BTELcMSt.js";import"./LoadingCell-oWGhXH5n.js";import"./ColumnConfigDialog-_KnKOWel.js";import"./DraggableList-V2JUX2Gf.js";import"./search-CXyOr2KE.js";import"./Input-B3BLVjbw.js";import"./useControlled-CBv31JWZ.js";import"./Button-BEoayh3H.js";import"./small-cross-Kn0-K05A.js";import"./ActionButton-B9_iyqEc.js";import"./Checkbox-DUi2IRjx.js";import"./useValueChanged-DnLqpX89.js";import"./CollapsiblePanel-shOVr1N_.js";import"./MultiColumnSortDialog-OCs0OixQ.js";import"./MenuTrigger-CDYnPChJ.js";import"./CompositeItem-BPiFovJv.js";import"./ToolbarRootContext-mV67Z_2Q.js";import"./getDisabledMountTransitionStyles-C_Pdyoj5.js";import"./getPseudoElementBounds-nE2iYe28.js";import"./chevron-down-CYWunexi.js";import"./index-DTmUBa4U.js";import"./error-BbOajjO4.js";import"./BaseCbacBanner-CaF6WltH.js";import"./makeExternalStore-D75zw0dv.js";import"./Tooltip-ChZSMVBv.js";import"./PopoverPopup-C1H_pV3d.js";import"./debounce-T3lrOezK.js";import"./useOsdkClient-D4ODTHFx.js";import"./tick-CBvk4wqY.js";import"./DropdownField-B644qOm6.js";import"./isEqual-DxZ23_bo.js";import"./withOsdkMetrics-Ojccrccx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
