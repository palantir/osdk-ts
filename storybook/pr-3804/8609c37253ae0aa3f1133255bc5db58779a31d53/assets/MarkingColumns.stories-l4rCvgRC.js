import{f as p,j as e}from"./iframe-emwkUmZM.js";import{O as i}from"./object-table--7Y-NmQh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DhG5IP-3.js";import"./Table-BPAyO7Qt.js";import"./index-Bv42s2zx.js";import"./Dialog-BJ0pnx9g.js";import"./cross-DNRJKzx5.js";import"./svgIconContainer-BZwxzAZ9.js";import"./useBaseUiId-DGMkXjWr.js";import"./InternalBackdrop-CHldKn7q.js";import"./composite-qf_al3LL.js";import"./index-CztgCydP.js";import"./index-Cr7IeRYZ.js";import"./index-DnsXBKrk.js";import"./useEventCallback-LeVVcxTU.js";import"./SkeletonBar-kr7o_Op6.js";import"./LoadingCell-DUpMgp2M.js";import"./ColumnConfigDialog-Cq87tenk.js";import"./DraggableList-86bXnKC5.js";import"./search-aahFShus.js";import"./Input-DvYk7O5S.js";import"./useControlled-gdvUMTCG.js";import"./isEqual-CxdjRH3O.js";import"./isObject-UVVfEMqv.js";import"./Button-Ceu8mR34.js";import"./ActionButton-CqnC07jl.js";import"./Checkbox-BfO7Z8DJ.js";import"./useValueChanged-xUU6Deyp.js";import"./CollapsiblePanel-BSoLtLPS.js";import"./MultiColumnSortDialog-C1p9TTes.js";import"./MenuTrigger-Bps2d7rE.js";import"./CompositeItem-XANTgkhJ.js";import"./ToolbarRootContext-BDzdBlDv.js";import"./getDisabledMountTransitionStyles-BXdIMMYT.js";import"./getPseudoElementBounds-CFB_C73n.js";import"./chevron-down-CXaya3J3.js";import"./index-8JQvc2yz.js";import"./error-DMYyebeG.js";import"./BaseCbacBanner-CnFA6BJV.js";import"./makeExternalStore-D62X0CAn.js";import"./Tooltip-mH2ha4Z3.js";import"./PopoverPopup-5QB-BnzR.js";import"./toNumber-COpu-Ym7.js";import"./useOsdkClient-DXT4JJx_.js";import"./tick-GpDatW4d.js";import"./DropdownField-Dlnq1C8N.js";import"./withOsdkMetrics-DIvrEbIJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
