import{f as p,j as e}from"./iframe-DJFzVHUY.js";import{O as i}from"./object-table-DZ1ElxZ0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2WGoxQfc.js";import"./Table-DLA0ay-U.js";import"./index-C8WJuqok.js";import"./Dialog-CAHAZJON.js";import"./cross-DNlGV5O4.js";import"./svgIconContainer-DHr-sOOW.js";import"./useBaseUiId-CGrSWTyF.js";import"./InternalBackdrop-B8XgOXJ8.js";import"./composite-CnhtXZjf.js";import"./index-DTSqGPNo.js";import"./index-DWlt5OtE.js";import"./index-Dq8k5apt.js";import"./useEventCallback-Ci1tWv_-.js";import"./SkeletonBar-46sSVcFY.js";import"./LoadingCell-BfoJJmHR.js";import"./ColumnConfigDialog-DWa2QIa2.js";import"./DraggableList-BatBu2Wo.js";import"./search-CWhFAg8g.js";import"./Input-D3nPOBMY.js";import"./useControlled-B01s-9H8.js";import"./isEqual-BsgyJ2f-.js";import"./isObject-9ANvhOR1.js";import"./Button-BDBMJl_t.js";import"./ActionButton-BY6r5N3V.js";import"./Checkbox-EiJFw0o_.js";import"./useValueChanged-Pst2Fxoc.js";import"./CollapsiblePanel-D5sFaQ_2.js";import"./MultiColumnSortDialog-D79W9Fza.js";import"./MenuTrigger-BManj4QB.js";import"./CompositeItem-tYIQGoUN.js";import"./ToolbarRootContext-ZgWiotCD.js";import"./getDisabledMountTransitionStyles-DeI9-n_T.js";import"./getPseudoElementBounds-Cx-1Ks2h.js";import"./chevron-down-boODY68H.js";import"./index-dZ139dm-.js";import"./error-DIyK6hbL.js";import"./BaseCbacBanner-BkuCMRW4.js";import"./makeExternalStore-Dlph1PzJ.js";import"./Tooltip-DKt55s1B.js";import"./PopoverPopup-vJBslg_h.js";import"./toNumber-BuE48Tud.js";import"./useOsdkClient-MqvBzpue.js";import"./tick-B68tua9r.js";import"./DropdownField-DeThirSU.js";import"./withOsdkMetrics-sbsVHgwY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
