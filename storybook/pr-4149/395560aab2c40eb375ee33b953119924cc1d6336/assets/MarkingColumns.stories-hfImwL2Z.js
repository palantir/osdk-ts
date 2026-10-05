import{f as p,j as e}from"./iframe-BOTLlUE6.js";import{O as i}from"./object-table-DkfNUSuH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEIZygRs.js";import"./Table-LQrxACXN.js";import"./index-Cs-O_idR.js";import"./Dialog-CHvRVjiq.js";import"./cross-Cy8vOx7n.js";import"./svgIconContainer-Prc3KqJd.js";import"./useBaseUiId-Dd9KpxnA.js";import"./InternalBackdrop-IIlmsF_v.js";import"./composite-DGujq1fd.js";import"./index-CWHl0m7K.js";import"./index-CcyNoJe8.js";import"./index-C-efyImj.js";import"./useEventCallback-BajVHdte.js";import"./SkeletonBar-BYB-xe6O.js";import"./LoadingCell-BKuoj7-L.js";import"./ColumnConfigDialog-hjejOSHa.js";import"./DraggableList-BdR82jqh.js";import"./search-DlkeJy6k.js";import"./Input-D_iusRO5.js";import"./useControlled-2lHvWmOj.js";import"./Button-Dvgi56Dm.js";import"./small-cross-BXzGBX0-.js";import"./ActionButton-C-8n6E4h.js";import"./Checkbox-D2agivE0.js";import"./useValueChanged-BZ2Rr6kL.js";import"./CollapsiblePanel-D8vxxxpH.js";import"./MultiColumnSortDialog-BW406hS2.js";import"./MenuTrigger-52dLLXZL.js";import"./CompositeItem-CDnQJecr.js";import"./ToolbarRootContext-DuzuLF_7.js";import"./getDisabledMountTransitionStyles-L5goK-63.js";import"./getPseudoElementBounds-Cf68WDMb.js";import"./chevron-down-QX4KjP4d.js";import"./index-CI0V04Qg.js";import"./error-DjHdCw0S.js";import"./BaseCbacBanner-BNrGG6OT.js";import"./makeExternalStore-5sXqlo0x.js";import"./Tooltip-Dis53iex.js";import"./PopoverPopup-C5BaOSgy.js";import"./debounce-DYIbFqjP.js";import"./useOsdkClient-CPWrwkuC.js";import"./tick-HKjZmk2p.js";import"./DropdownField-CLSkteEy.js";import"./isEqual-CZgWSPLt.js";import"./withOsdkMetrics-VFTM94rP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
