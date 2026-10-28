import{f as p,j as e}from"./iframe-B5ExBQzJ.js";import{O as i}from"./object-table-B0k_xkOT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BKpiLxff.js";import"./Table-BWgsx_0G.js";import"./index-CitCcLFV.js";import"./Dialog-U68Mf7uS.js";import"./cross-DAA3CpVw.js";import"./svgIconContainer-BLHh5YtK.js";import"./useBaseUiId-DRK3uSj0.js";import"./InternalBackdrop-CXeFT0x7.js";import"./composite-DB1LtyAr.js";import"./index-BTZGq7CS.js";import"./index-Kx0JXijT.js";import"./index-BlZrfUUz.js";import"./useEventCallback-CC_Hvq0-.js";import"./SkeletonBar-lTk1X37B.js";import"./LoadingCell-D_kXDilO.js";import"./ColumnConfigDialog-DpeJ6_jU.js";import"./DraggableList-BeEiQJY7.js";import"./search-l8XKRmqF.js";import"./Input-CsmEMiLS.js";import"./useControlled-CcsA4hDD.js";import"./Button-Dzl2Qrvs.js";import"./small-cross-DS1fUEUb.js";import"./ActionButton-c7S57ORf.js";import"./Checkbox-DT0cSq--.js";import"./useValueChanged-DuMoPshe.js";import"./CollapsiblePanel-DJbTbmJG.js";import"./MultiColumnSortDialog-C0uzlXkV.js";import"./MenuTrigger-BmLiWDTm.js";import"./CompositeItem-BnzcVROn.js";import"./ToolbarRootContext-Cs8zUWV2.js";import"./getDisabledMountTransitionStyles-Cah6dQkJ.js";import"./getPseudoElementBounds-BKrQcy0D.js";import"./chevron-down-DY2jF6xe.js";import"./index-DaOoM8bo.js";import"./error-HO3Aksfc.js";import"./BaseCbacBanner-BCxrm39X.js";import"./makeExternalStore-B8gDjOBd.js";import"./Tooltip-C7hu51fY.js";import"./PopoverPopup-BAey6XRt.js";import"./debounce-nCAvZ_Bc.js";import"./useOsdkClient-B7gokOKi.js";import"./tick-Cr4ru6YE.js";import"./DropdownField-CuMiPFGz.js";import"./isEqual-CwzWnB9G.js";import"./withOsdkMetrics-CwxP9zXD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
