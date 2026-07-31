import{f as p,j as e}from"./iframe-CIS7R8S0.js";import{O as i}from"./object-table-BRD1LaCv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CC0KEkYJ.js";import"./Table-vPXnTHDL.js";import"./index-BB05R3oj.js";import"./Dialog-jYt7TAkd.js";import"./cross-CypSL_mg.js";import"./svgIconContainer-DOCbxMNh.js";import"./useBaseUiId-Dx4TGSeb.js";import"./InternalBackdrop-B3HiLuVl.js";import"./composite-CQ8jq4un.js";import"./index-DM_wVMTu.js";import"./index-BKg_5Wuy.js";import"./index-Qbb5HOpD.js";import"./useEventCallback-DaJcuQ4l.js";import"./SkeletonBar-BdzAGyaZ.js";import"./LoadingCell-CGJ1Ce-Y.js";import"./ColumnConfigDialog-C15oeIig.js";import"./DraggableList-CySBtFi9.js";import"./search-CrRqmjmd.js";import"./Input-BbMczDPo.js";import"./useControlled-LRidnfkr.js";import"./isEqual-EKJAET8s.js";import"./isObject-CFesdK53.js";import"./Button-TVnROWVX.js";import"./ActionButton-CcVczjK6.js";import"./Checkbox-Wl3wBnfs.js";import"./useValueChanged-QRf8gN2r.js";import"./CollapsiblePanel-B5HdsVrp.js";import"./MultiColumnSortDialog-BWxk4_FC.js";import"./MenuTrigger-Bq45j4AP.js";import"./CompositeItem-DDPMwQ0l.js";import"./ToolbarRootContext-DAJLxMfM.js";import"./getDisabledMountTransitionStyles-hIgbxFBq.js";import"./getPseudoElementBounds-CmW25CrH.js";import"./chevron-down-BSAXsWfp.js";import"./index-DWJWtSQK.js";import"./error-dhKwelIe.js";import"./BaseCbacBanner-oSNgv8Qw.js";import"./makeExternalStore-RXScgX-m.js";import"./Tooltip-BJuu_c-9.js";import"./PopoverPopup-B7149Gul.js";import"./toNumber-OTthO2wW.js";import"./useOsdkClient-DkCUuQgu.js";import"./tick-BCb19KZc.js";import"./DropdownField-9gKqheEJ.js";import"./withOsdkMetrics-BwKjYpjZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
