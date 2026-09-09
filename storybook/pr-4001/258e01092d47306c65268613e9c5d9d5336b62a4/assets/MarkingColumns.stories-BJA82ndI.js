import{f as p,j as e}from"./iframe-B9fWy8hT.js";import{O as i}from"./object-table-UzyRvJs7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWfHVW0p.js";import"./Table-B-dV38K7.js";import"./index-DcqZYHDv.js";import"./Dialog-CryFY6ZU.js";import"./cross-boAy6lJm.js";import"./svgIconContainer-u2Tnk_oU.js";import"./useBaseUiId-ck-5-ASN.js";import"./InternalBackdrop-BwJaasag.js";import"./composite-BwwoklsZ.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./index-D7qo7HQk.js";import"./useEventCallback-B2wK0RRE.js";import"./SkeletonBar-D5KV0OqN.js";import"./LoadingCell--b6dzmcz.js";import"./ColumnConfigDialog-CMbqw-o4.js";import"./DraggableList-Dm-SM0mh.js";import"./search-B0RjXvIo.js";import"./Input-CD0TW00M.js";import"./useControlled-1rkkBjfr.js";import"./Button-3STy3BF8.js";import"./small-cross-CryXyuPH.js";import"./ActionButton-f0vdeYe6.js";import"./Checkbox-2x84NFWe.js";import"./useValueChanged-BvuRDLHo.js";import"./CollapsiblePanel-C6uN36Y0.js";import"./MultiColumnSortDialog-CLmLbuue.js";import"./MenuTrigger-DusR_Xdv.js";import"./CompositeItem-Cqqz-d5o.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./getDisabledMountTransitionStyles-B-NyzZcB.js";import"./getPseudoElementBounds-DCZ0QUdk.js";import"./chevron-down-nNmhzWCh.js";import"./index-BEFSCPJo.js";import"./error-DVMkH5gx.js";import"./BaseCbacBanner-CjOcygPw.js";import"./makeExternalStore-QmjWX5TP.js";import"./Tooltip-BRwVJD1M.js";import"./PopoverPopup-DeB87ALM.js";import"./debounce-CRBVoOqi.js";import"./useOsdkClient-DGZy8BSJ.js";import"./tick-CbPdXS0Y.js";import"./DropdownField-bELTjpQP.js";import"./isEqual-BA3cySEE.js";import"./withOsdkMetrics-DwXDV7v7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
