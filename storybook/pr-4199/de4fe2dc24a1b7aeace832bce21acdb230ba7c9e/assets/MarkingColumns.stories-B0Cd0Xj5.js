import{f as p,j as e}from"./iframe-gl1D0cYu.js";import{O as i}from"./object-table-DWlqOrB0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqgH6sT8.js";import"./Table-05mb1aST.js";import"./index-D5PLyZrU.js";import"./Dialog-YNb8BJSN.js";import"./cross-nvwlJ43b.js";import"./svgIconContainer-D2ylg-hx.js";import"./useBaseUiId-DaNXLH9o.js";import"./InternalBackdrop-B2oQrtyL.js";import"./composite-mmowW-5S.js";import"./index-DZJG8XPS.js";import"./index-DYOboT0w.js";import"./index-DpfgomRZ.js";import"./useEventCallback-BMDTzt3U.js";import"./SkeletonBar-Djy6KVIi.js";import"./LoadingCell-BahYtaDB.js";import"./ColumnConfigDialog-Da-NI91w.js";import"./DraggableList-BT0QdQr8.js";import"./search-DuJOx_mq.js";import"./Input-DikxtY8U.js";import"./useControlled-D-vu1Iu-.js";import"./Button-Dyc2i6Ov.js";import"./small-cross-BShBRTCB.js";import"./ActionButton-CTRf1gwO.js";import"./Checkbox-1LqBOyyG.js";import"./useValueChanged-B5BKkZsH.js";import"./CollapsiblePanel-BQtLzhJx.js";import"./MultiColumnSortDialog-BlgyqvG6.js";import"./MenuTrigger-DaW5jwCf.js";import"./CompositeItem-hGM9YKcr.js";import"./ToolbarRootContext-DUK6v5QM.js";import"./getDisabledMountTransitionStyles-CEC9IPnY.js";import"./getPseudoElementBounds-1Yev2lnF.js";import"./chevron-down-B--bqcM3.js";import"./index-Cevn-2DA.js";import"./error-CF31ifZ8.js";import"./BaseCbacBanner-Bp4FPOAe.js";import"./makeExternalStore-mCeZ-qAv.js";import"./Tooltip-TuG8zUYZ.js";import"./PopoverPopup-OUHi2kGW.js";import"./debounce-C5VfxwkA.js";import"./useOsdkClient-BBR-XdUj.js";import"./tick-CMBEryyP.js";import"./DropdownField-CUCj8DNZ.js";import"./isEqual-VJmxrJq2.js";import"./withOsdkMetrics-qXzvdtsT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
