import{f as p,j as e}from"./iframe-HbxVHZeS.js";import{O as i}from"./object-table-CWaV2LZ7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DKTEKqDP.js";import"./Table-CT7vgj8m.js";import"./index-_HuXWBMo.js";import"./Dialog-CcJYPdWy.js";import"./cross-Bbtec1AH.js";import"./svgIconContainer-DB1CdLm7.js";import"./useBaseUiId-CeUDsPHA.js";import"./InternalBackdrop-Bp2koLwT.js";import"./composite-0yZaiGel.js";import"./index-DMqlf5ki.js";import"./index-Cd-PRAMm.js";import"./index-BneZaifa.js";import"./useEventCallback-DKAOz3g2.js";import"./SkeletonBar-CZC-qmq0.js";import"./LoadingCell-CZYj7tK-.js";import"./ColumnConfigDialog-C25ouUTD.js";import"./DraggableList-J7E_9wyv.js";import"./search-DEtheuwO.js";import"./Input-V8GsltIX.js";import"./useControlled-0_Lx4vTT.js";import"./isEqual-CPkuV9kT.js";import"./isObject-Bk8QKs7M.js";import"./Button-hh7S8JbN.js";import"./ActionButton-DkaChMpJ.js";import"./Checkbox-C-42zxVd.js";import"./useValueChanged-ZO3to8uj.js";import"./CollapsiblePanel-DBh4BJ4h.js";import"./MultiColumnSortDialog-Cy_w-Zl-.js";import"./MenuTrigger-B8bcIin6.js";import"./CompositeItem-DlRQsEAc.js";import"./ToolbarRootContext-Bfx00Fpp.js";import"./getDisabledMountTransitionStyles-ChNDk6oM.js";import"./getPseudoElementBounds-B2F2Kv0M.js";import"./chevron-down-CsImW_M5.js";import"./index-clvcww1x.js";import"./error-_Ix0v8YA.js";import"./BaseCbacBanner-CbscbDa5.js";import"./makeExternalStore-CeeZV4L3.js";import"./Tooltip-DS_9ZYJ6.js";import"./PopoverPopup-BVyWIjI8.js";import"./toNumber-SyMlmTqK.js";import"./useOsdkClient-LkxmiGDs.js";import"./tick-ByIrFSAp.js";import"./DropdownField-DdueSsuv.js";import"./withOsdkMetrics-B9ZHRpAC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
