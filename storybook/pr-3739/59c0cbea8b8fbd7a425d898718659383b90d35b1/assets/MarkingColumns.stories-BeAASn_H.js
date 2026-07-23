import{f as p,j as e}from"./iframe-D_9TmTWV.js";import{O as i}from"./object-table-BH56hF0K.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJH2govB.js";import"./Table-B68MTNrC.js";import"./index-CZmlMw1G.js";import"./Dialog-ovUcxfde.js";import"./cross-LTJbD_sI.js";import"./svgIconContainer-e2zn3xKA.js";import"./useBaseUiId-BDKr1Znm.js";import"./InternalBackdrop-CXbB8HCu.js";import"./composite-DvHiPVn1.js";import"./index-ilaZ_cq1.js";import"./index-Z3aTWHLe.js";import"./index-XIDOmxkt.js";import"./useEventCallback-CA02TTP5.js";import"./SkeletonBar-Kv4R8Wuu.js";import"./LoadingCell-C5sCVBRd.js";import"./ColumnConfigDialog-DU8PisTj.js";import"./DraggableList-dh32i-E0.js";import"./search-BiwpNc5U.js";import"./Input-BAv6Vl12.js";import"./useControlled-DS9eNVze.js";import"./isEqual-AkuwC8U-.js";import"./isObject-KAt_jdB7.js";import"./Button-Dubu6PwJ.js";import"./ActionButton-BI9cbJew.js";import"./Checkbox-DhaX5QKg.js";import"./useValueChanged-B6cvE1x9.js";import"./CollapsiblePanel-D9CQ9Mvu.js";import"./MultiColumnSortDialog-CrnJvSH7.js";import"./MenuTrigger-Bic_hcSB.js";import"./CompositeItem-CcExbvwI.js";import"./ToolbarRootContext-CNcIlT0m.js";import"./getDisabledMountTransitionStyles-Dbdb4VgA.js";import"./getPseudoElementBounds-9E9W5mWV.js";import"./chevron-down-BZXSDnra.js";import"./index-boWbyro0.js";import"./error-BMNLqSay.js";import"./BaseCbacBanner-Wf7NqT0e.js";import"./makeExternalStore-CnxWgFmk.js";import"./Tooltip-vrZDtlVf.js";import"./PopoverPopup-SCuH-Pti.js";import"./toNumber-C8lcaAqG.js";import"./useOsdkClient-DXp2jXVT.js";import"./tick-CUayK5we.js";import"./DropdownField-CU-01fvu.js";import"./withOsdkMetrics-DhbE-ALn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
