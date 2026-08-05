import{f as p,j as e}from"./iframe-DFNsoP3X.js";import{O as i}from"./object-table-BscY91rZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnvOcoub.js";import"./Table-DU7dSv7N.js";import"./index-BAf1JHF8.js";import"./Dialog-Dsto6OEC.js";import"./cross-Bg80tPH2.js";import"./svgIconContainer-aDF4o5gq.js";import"./useBaseUiId-DV1E2N8q.js";import"./InternalBackdrop-CT8CEw0I.js";import"./composite-DbYvbJJQ.js";import"./index-H_W3OuJT.js";import"./index-B-idBXyv.js";import"./index-ChWfa6Xl.js";import"./useEventCallback-BmJCRIu_.js";import"./SkeletonBar-D7BHkMhh.js";import"./LoadingCell-D2J55tP4.js";import"./ColumnConfigDialog-BxImmEMm.js";import"./DraggableList-CYHhOu3B.js";import"./search-bneiCuCd.js";import"./Input-BtXsYgmE.js";import"./useControlled-B1rQefwr.js";import"./isEqual-DaiDjNZz.js";import"./isObject-Cp-DXwTu.js";import"./Button-sZvKHtmc.js";import"./ActionButton-Byu3Iqfd.js";import"./Checkbox-CxipCycs.js";import"./useValueChanged-B1hVUmbL.js";import"./CollapsiblePanel-DQmSOxbK.js";import"./MultiColumnSortDialog-39qpvVJW.js";import"./MenuTrigger-DDzvNKzw.js";import"./CompositeItem-HoQHK7Za.js";import"./ToolbarRootContext-Cq_OLprv.js";import"./getDisabledMountTransitionStyles-Dor7m0yW.js";import"./getPseudoElementBounds-CQuPF0Bs.js";import"./chevron-down-BOoKZVr9.js";import"./index-DUsvYWV3.js";import"./error-Cyul2rOd.js";import"./BaseCbacBanner-C1Hn5TEH.js";import"./makeExternalStore-oXaeTCyi.js";import"./Tooltip-CF-CWCiv.js";import"./PopoverPopup-B_VzRe0Z.js";import"./toNumber-DIwTcT3k.js";import"./useOsdkClient-D4rWAYEq.js";import"./tick-GGFWcR03.js";import"./DropdownField-B58gPKPs.js";import"./withOsdkMetrics-C2t_lHCG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
