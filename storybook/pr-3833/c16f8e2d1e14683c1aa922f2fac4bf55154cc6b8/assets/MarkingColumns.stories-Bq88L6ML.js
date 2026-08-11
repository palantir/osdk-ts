import{f as p,j as e}from"./iframe-acbxn-f7.js";import{O as i}from"./object-table-CN5yha45.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fbPQYzet.js";import"./Table-BBFk4ims.js";import"./index-CVPAqU1b.js";import"./Dialog-CwejTPwi.js";import"./cross-BW0HBlIL.js";import"./svgIconContainer-DRdEcW3D.js";import"./useBaseUiId-CdtAIfTS.js";import"./InternalBackdrop-CiYWkt9x.js";import"./composite-CPBbATn-.js";import"./index-D440U2lf.js";import"./index-DqqbpueN.js";import"./index-DywtUTxm.js";import"./useEventCallback-C4hxqqtx.js";import"./SkeletonBar-DfTJMEGe.js";import"./LoadingCell-Cxki7mau.js";import"./ColumnConfigDialog-D5_Oyh5j.js";import"./DraggableList-L1L_4TYq.js";import"./search-DiYKFhHE.js";import"./Input-BjbaQoWk.js";import"./useControlled-GOo3Sud3.js";import"./isEqual-z9pnKAG9.js";import"./isObject-DSXN-3i3.js";import"./Button-1BzMXgMp.js";import"./ActionButton-D0AUONzO.js";import"./Checkbox-CAXj-zpQ.js";import"./useValueChanged-UVEJ5iFP.js";import"./CollapsiblePanel-DaXd5Eta.js";import"./MultiColumnSortDialog-DWFARLg5.js";import"./MenuTrigger-2GuiCSnN.js";import"./CompositeItem-C-TpVr46.js";import"./ToolbarRootContext-DhAyKrZU.js";import"./getDisabledMountTransitionStyles-CoXTLwP5.js";import"./getPseudoElementBounds-n0j8dayn.js";import"./chevron-down-fLJV3lSr.js";import"./index-7FxVYwUR.js";import"./error-RYjU87Ko.js";import"./BaseCbacBanner-DZaR4XFw.js";import"./makeExternalStore-B4WBQrGe.js";import"./Tooltip-Bielf6rk.js";import"./PopoverPopup-A73qwNSF.js";import"./toNumber-hUwX4eVc.js";import"./useOsdkClient-CqDg3tJw.js";import"./tick-BS44LqM1.js";import"./DropdownField-BsQvaeWW.js";import"./withOsdkMetrics-DopriMje.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
