import{f as p,j as e}from"./iframe-BIBiDLzG.js";import{O as i}from"./object-table-DO2-4StQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-M-hMOyfR.js";import"./Table-CqMv3F_I.js";import"./index-DVl0wepy.js";import"./Dialog-BeJ4utiY.js";import"./cross-Bct1nQA0.js";import"./svgIconContainer-CoQwsTQZ.js";import"./useBaseUiId-uizV67he.js";import"./InternalBackdrop-D5m4v8WT.js";import"./composite-WJpwW_h1.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./index-BpFwk2gn.js";import"./useEventCallback-BAwy8rT_.js";import"./SkeletonBar-BwxLZXkl.js";import"./LoadingCell-vKzjE125.js";import"./ColumnConfigDialog-DsX6HxUn.js";import"./DraggableList-DlSB-TLa.js";import"./search-Dp0L04CB.js";import"./Input-DjyK0ZMe.js";import"./useControlled-C1UaCMGh.js";import"./Button-C3sxjNx0.js";import"./small-cross-DhGfP6H8.js";import"./ActionButton-BNlBdLC6.js";import"./Checkbox-wdV7A-ZT.js";import"./useValueChanged-CzF2vCV8.js";import"./CollapsiblePanel-CZiuD1Hf.js";import"./MultiColumnSortDialog-mMx323K3.js";import"./MenuTrigger-BDmXfceM.js";import"./CompositeItem-DcFVDvs6.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./getDisabledMountTransitionStyles-CwoXuUOt.js";import"./getPseudoElementBounds-CNxmiBte.js";import"./chevron-down-D9WTAz47.js";import"./index-CgV98ypJ.js";import"./error-VYeOdSiM.js";import"./BaseCbacBanner-BF3HYUIs.js";import"./makeExternalStore-CpzPkJRH.js";import"./Tooltip-uJ9PHc8e.js";import"./PopoverPopup-BWEg_lAC.js";import"./debounce-C6GUNjet.js";import"./useOsdkClient-L3-wMMON.js";import"./tick-KoHgs3il.js";import"./DropdownField-Dc7oRDG2.js";import"./isEqual-BO52wWTb.js";import"./withOsdkMetrics-BODaHo4W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
