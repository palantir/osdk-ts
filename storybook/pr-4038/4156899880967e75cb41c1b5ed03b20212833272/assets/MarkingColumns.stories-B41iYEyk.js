import{f as p,j as e}from"./iframe-WliM3Ewa.js";import{O as i}from"./object-table-DRO0-XsV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEyC4ekG.js";import"./Table-DoTOPMcE.js";import"./index-CnrTWWrO.js";import"./Dialog-C-9hMTPL.js";import"./cross-B523-3pv.js";import"./svgIconContainer-eh8pO9ol.js";import"./useBaseUiId-CUkyUtdd.js";import"./InternalBackdrop-C5-fjIik.js";import"./composite-ByE6f88x.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./index-CwjXC2Es.js";import"./useEventCallback-DwV1lBpW.js";import"./SkeletonBar-BlIjEe9R.js";import"./LoadingCell-BVlRdgDo.js";import"./ColumnConfigDialog-4uaAyz0M.js";import"./DraggableList-8FBKbtBf.js";import"./search-DOR9iHB9.js";import"./Input-CQ-UP_L4.js";import"./useControlled-DNr35Z2-.js";import"./Button-Bajbsf8L.js";import"./small-cross-DoL3gn1_.js";import"./ActionButton-B0Mz96Sd.js";import"./Checkbox-BwdGH573.js";import"./useValueChanged-CdN1D_N7.js";import"./CollapsiblePanel-DEqR4YPk.js";import"./MultiColumnSortDialog-BY_tdxDU.js";import"./MenuTrigger-taMZMeQ0.js";import"./CompositeItem-PZY5TD1e.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./getDisabledMountTransitionStyles-4NaqFyh-.js";import"./getPseudoElementBounds-FBUEgUOa.js";import"./chevron-down-D3GW0vbF.js";import"./index-DZuQrbeK.js";import"./error-CRmqFCAs.js";import"./BaseCbacBanner-B3tDHTYq.js";import"./makeExternalStore-y3QUXpj7.js";import"./Tooltip-9h8kIB5N.js";import"./PopoverPopup-BfSQYfPj.js";import"./debounce-BmlTPhI1.js";import"./useOsdkClient-Ds9WknxH.js";import"./tick-B5-KzR1n.js";import"./DropdownField-Dh8xBr1M.js";import"./isEqual-CqLdlydg.js";import"./withOsdkMetrics-BMKdbhzI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
