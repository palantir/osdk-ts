import{f as p,j as e}from"./iframe-CBNJ8HWE.js";import{O as i}from"./object-table-BBZlajVP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-aeZqn2.js";import"./Table-DjX4DPHX.js";import"./index-Dae7Nrzr.js";import"./Dialog-DOEzaE5N.js";import"./cross-IIpRFnCv.js";import"./svgIconContainer-Cmsji56X.js";import"./useBaseUiId-OM3pRXHK.js";import"./InternalBackdrop-CpbO4ilr.js";import"./composite-DVVFhOLL.js";import"./index-BDSNEOy8.js";import"./index-BbBV-ipX.js";import"./index-BXIyua5V.js";import"./useEventCallback-CnH-PQd4.js";import"./SkeletonBar-BAwTWyeA.js";import"./LoadingCell-CjTFe9b2.js";import"./ColumnConfigDialog-DDnC4bH4.js";import"./DraggableList-ClGArlOQ.js";import"./search-ctIWqbIr.js";import"./Input-j-S77mRt.js";import"./useControlled-BpsS1h83.js";import"./Button-nKcb30G0.js";import"./small-cross-uu7GABB3.js";import"./ActionButton-BFsA5ZAh.js";import"./Checkbox-IvoIoBvd.js";import"./useValueChanged-B6AjTcH0.js";import"./CollapsiblePanel-NQPBhepg.js";import"./MultiColumnSortDialog-DCak3p9n.js";import"./MenuTrigger-oVuzN-Jo.js";import"./CompositeItem-CFJInvfd.js";import"./ToolbarRootContext-DGgj03xf.js";import"./getDisabledMountTransitionStyles-Dq0tUHT-.js";import"./getPseudoElementBounds-BkaQV1Oc.js";import"./chevron-down-Df7Rgxm0.js";import"./index-Dre4GzRs.js";import"./error-CtfkQOQ0.js";import"./BaseCbacBanner-D4Wg3syd.js";import"./makeExternalStore-BJGSOQw4.js";import"./Tooltip-urAvcjFd.js";import"./PopoverPopup-DbRag64C.js";import"./debounce-DK-9Ersu.js";import"./useOsdkClient-D0-D6lZc.js";import"./tick-sVfQea33.js";import"./DropdownField-Xxjx_nIV.js";import"./isEqual-C3NiMB5-.js";import"./withOsdkMetrics-CqZNs336.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
