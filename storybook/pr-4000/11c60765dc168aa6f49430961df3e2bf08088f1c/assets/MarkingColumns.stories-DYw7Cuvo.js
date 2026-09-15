import{f as p,j as e}from"./iframe-DQpCivO1.js";import{O as i}from"./object-table-CU8mywAw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BNtpiPnv.js";import"./Table-38llNuJy.js";import"./index-DS8-D35g.js";import"./Dialog-Cu8mAO9_.js";import"./cross-Ccdwkdk3.js";import"./svgIconContainer-CxU-QT8u.js";import"./useBaseUiId-C8ulXah6.js";import"./InternalBackdrop-DLd7Lwe4.js";import"./composite-xfEh3o5g.js";import"./index-BKAa7pmt.js";import"./index-Dqn9XUWy.js";import"./index-DmKdPFBX.js";import"./useEventCallback-8OJUCRRT.js";import"./SkeletonBar-CjumgPcn.js";import"./LoadingCell-BVmS8W3w.js";import"./ColumnConfigDialog-DlUolUQ-.js";import"./DraggableList-y6afPaq6.js";import"./search-GD8U0S68.js";import"./Input-i7VlWrgO.js";import"./useControlled-LcZaVq-T.js";import"./Button-CstsYLg_.js";import"./small-cross-BRsClvfH.js";import"./ActionButton-DrMcD0_E.js";import"./Checkbox-CgtUdNtY.js";import"./useValueChanged-C2RXTXRu.js";import"./CollapsiblePanel-DboLvc9U.js";import"./MultiColumnSortDialog-B6-XrrkP.js";import"./MenuTrigger-DThFqPHZ.js";import"./CompositeItem-BwdYO-ps.js";import"./ToolbarRootContext-DQ_5rIHb.js";import"./getDisabledMountTransitionStyles-C-frLZTH.js";import"./getPseudoElementBounds-DDo7a-AL.js";import"./chevron-down-DfHD6Nmf.js";import"./index-CliSQRrA.js";import"./error-CRC1V3FY.js";import"./BaseCbacBanner-TTjkw73J.js";import"./makeExternalStore-CZgijSTY.js";import"./Tooltip-DlyF3AAY.js";import"./PopoverPopup-BQXF4BGx.js";import"./debounce--yNODiaS.js";import"./useOsdkClient-CwqyybRI.js";import"./tick-BA8CGTis.js";import"./DropdownField-Or1B8bG-.js";import"./isEqual-DASnWbpg.js";import"./withOsdkMetrics-dKG6bw4N.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
