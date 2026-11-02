import{f as p,j as e}from"./iframe-B4_7uhV2.js";import{O as i}from"./object-table-UEYeUjSy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw77NyEA.js";import"./Table-Cb9nM9r8.js";import"./index-Mdm4Vdz6.js";import"./Dialog-e7-brm2e.js";import"./cross-rrtuBbZ-.js";import"./svgIconContainer-CfsWQbiM.js";import"./useBaseUiId-jcj23Jre.js";import"./InternalBackdrop-D-j65lhL.js";import"./composite-DzB4ymUk.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./index-C1Mq3mGJ.js";import"./useEventCallback-CyCSzUSB.js";import"./SkeletonBar-D706xdxV.js";import"./LoadingCell-M6mP6F3v.js";import"./ColumnConfigDialog-DQaZZWQt.js";import"./DraggableList-DXgJ1vEZ.js";import"./search-CkWTC5d3.js";import"./Input-D8cnvsnb.js";import"./useControlled-DuB2GZAM.js";import"./Button-Bp6QDAip.js";import"./small-cross-Bz0aCskk.js";import"./ActionButton-DjDw0tBC.js";import"./Checkbox-Dl3TjmaY.js";import"./useValueChanged-UlU1Gt2C.js";import"./CollapsiblePanel-B1l4B7kE.js";import"./MultiColumnSortDialog-C3IbAu0T.js";import"./MenuTrigger-gee-gl2y.js";import"./CompositeItem-CYgFQeQK.js";import"./ToolbarRootContext-By4aijuh.js";import"./getDisabledMountTransitionStyles-CGBLZLsV.js";import"./getPseudoElementBounds-D2XWYg3z.js";import"./chevron-down-DsD_ZS4y.js";import"./index-q1tL4Nc7.js";import"./error-CBs6A8KU.js";import"./BaseCbacBanner-B3k_08Ma.js";import"./makeExternalStore-D3O6kaQb.js";import"./Tooltip-Bvngz8iq.js";import"./PopoverPopup-DTvwoF1P.js";import"./debounce-X8d_TWmr.js";import"./useOsdkClient-GbTGK958.js";import"./tick-7a879WvW.js";import"./DropdownField-DTALq__z.js";import"./isEqual-ChU1peez.js";import"./withOsdkMetrics-DXLG4Ams.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
