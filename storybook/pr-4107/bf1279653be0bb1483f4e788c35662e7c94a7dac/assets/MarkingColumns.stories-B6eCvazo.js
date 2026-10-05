import{f as p,j as e}from"./iframe-BBbz1AL9.js";import{O as i}from"./object-table-CnZxylfN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-LktJP5uP.js";import"./Table-BEK0Bl35.js";import"./index-BOgOZGVm.js";import"./Dialog-Bka1mwMg.js";import"./cross-D2ow8c2-.js";import"./svgIconContainer-DFesH5dO.js";import"./useBaseUiId-D4UJyJ9J.js";import"./InternalBackdrop-CJ0Y8Kog.js";import"./composite-MiODqQmu.js";import"./index-CA8g9ho5.js";import"./index-Db4moevd.js";import"./index-D3NdQmE7.js";import"./useEventCallback-H5LWbmVP.js";import"./SkeletonBar-EV7-VIf-.js";import"./LoadingCell-Bs3kbv_6.js";import"./ColumnConfigDialog-udmBc1UO.js";import"./DraggableList-DOKJgB3l.js";import"./search-DnvQFbf5.js";import"./Input-DMWAeir1.js";import"./useControlled-BAncaeLN.js";import"./Button-DI71fvab.js";import"./small-cross-JgZQe-XJ.js";import"./ActionButton-eGdQnCQC.js";import"./Checkbox-Cw_WX90u.js";import"./useValueChanged-CwyCbx99.js";import"./CollapsiblePanel-Dr5UHTv0.js";import"./MultiColumnSortDialog-CSl4ZM_a.js";import"./MenuTrigger-Bycf4s8k.js";import"./CompositeItem-DV0DAQDv.js";import"./ToolbarRootContext-CDIUf1p8.js";import"./getDisabledMountTransitionStyles-Md2PJyBx.js";import"./getPseudoElementBounds-OF4rLga5.js";import"./chevron-down-DxqKQR7L.js";import"./index-DXllweDc.js";import"./error-BG3KjKN_.js";import"./BaseCbacBanner-bnHVqfrz.js";import"./makeExternalStore-D3rO5u3I.js";import"./Tooltip-VoV22dJs.js";import"./PopoverPopup-dMiMS_iS.js";import"./debounce-BrRPn5q2.js";import"./useOsdkClient-CWYpxt6E.js";import"./tick-DzipYJGn.js";import"./DropdownField-ye8n36Ni.js";import"./isEqual-DUuKJX2r.js";import"./withOsdkMetrics-tTo2SGpZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
