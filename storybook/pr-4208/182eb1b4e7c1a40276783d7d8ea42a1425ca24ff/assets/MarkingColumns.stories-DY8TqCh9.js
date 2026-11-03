import{f as p,j as e}from"./iframe-Bp6ykM_Q.js";import{O as i}from"./object-table-BCe6X2NZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hhg-UuLO.js";import"./Table-cs7ZNKYh.js";import"./index-CkmqH5v_.js";import"./Dialog-B-jf4vpJ.js";import"./cross-C2XcpcwW.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./useBaseUiId-B9JaL3lL.js";import"./InternalBackdrop-CUeGJ88S.js";import"./composite-CELT5bVY.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./index-6iOBoNLd.js";import"./useEventCallback-ZDpPV_9c.js";import"./SkeletonBar-CD8Roa0c.js";import"./LoadingCell-BcgU58AU.js";import"./ColumnConfigDialog-BlycZ3ES.js";import"./DraggableList-DVYLEZGt.js";import"./search-oCnrD3HI.js";import"./Input-8kWtUrGW.js";import"./useControlled-DfSSocWG.js";import"./Button-CqF-mJTx.js";import"./small-cross-DKRvvaJW.js";import"./ActionButton-CG_FRqzp.js";import"./Checkbox-aUL_Dhbs.js";import"./useValueChanged-BRLBb_6E.js";import"./CollapsiblePanel-DcU2Xohc.js";import"./MultiColumnSortDialog-BYOxy7Ur.js";import"./MenuTrigger-DaCREkC8.js";import"./CompositeItem-DEa3hl5L.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./getDisabledMountTransitionStyles-BlFqDN7h.js";import"./getPseudoElementBounds-DT01MB08.js";import"./chevron-down-DzC25JPe.js";import"./index-KVwHojvU.js";import"./error-pcj4mGvq.js";import"./BaseCbacBanner-Ccn2hkyq.js";import"./makeExternalStore-D6cQ2Vrj.js";import"./Tooltip-CPA2WKzn.js";import"./PopoverPopup-DgjT7gOt.js";import"./debounce-DeyxfuXX.js";import"./useOsdkClient-BXI0wDfp.js";import"./tick-CwYSeXXI.js";import"./DropdownField-CHmFTRiZ.js";import"./isEqual-_49y5ZAW.js";import"./withOsdkMetrics-BuzXmon2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
