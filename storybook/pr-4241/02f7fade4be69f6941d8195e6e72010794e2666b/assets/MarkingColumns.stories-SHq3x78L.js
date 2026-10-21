import{f as p,j as e}from"./iframe-Z5B59nHv.js";import{O as i}from"./object-table-OfsX1fbr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3LVR9LX.js";import"./Table-Bzx7BvY8.js";import"./index-cU0AVaQf.js";import"./Dialog-Bj0impzk.js";import"./cross-Cwrmhou9.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./useBaseUiId-DN7B2pea.js";import"./InternalBackdrop-CT8QE5xx.js";import"./composite-Dna_oWev.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./index-D5bko_OX.js";import"./useEventCallback-BOlmFfw4.js";import"./SkeletonBar-CDx-ZXnH.js";import"./LoadingCell-DJfiyKpX.js";import"./ColumnConfigDialog-Be0hyoWQ.js";import"./DraggableList-CRkefje3.js";import"./search-CH0ng29D.js";import"./Input-Bu230jB_.js";import"./useControlled-BQV59h-A.js";import"./Button-C8Wmmv8l.js";import"./small-cross-CTkkul48.js";import"./ActionButton-CQFbOgwD.js";import"./Checkbox-0LwzsijX.js";import"./useValueChanged-CM_W6cBg.js";import"./CollapsiblePanel-CkovPae2.js";import"./MultiColumnSortDialog-BQJBi4i8.js";import"./MenuTrigger-ec0LmwbP.js";import"./CompositeItem-jpYgtvmQ.js";import"./ToolbarRootContext-Bs124fL_.js";import"./getDisabledMountTransitionStyles-Ca4we0Dc.js";import"./getPseudoElementBounds-CnpaCKEL.js";import"./chevron-down-nfT9szK9.js";import"./index-DMp4QYwj.js";import"./error-DocjYaCq.js";import"./BaseCbacBanner-4T2a86qp.js";import"./makeExternalStore-rak7eNYQ.js";import"./Tooltip-Cs-Vtp60.js";import"./PopoverPopup-CC0rhnhV.js";import"./debounce-D-eTCzZU.js";import"./useOsdkClient-XgUCld_F.js";import"./tick-C0PU8pW9.js";import"./DropdownField-CZiGi09a.js";import"./isEqual-C2OAKHDP.js";import"./withOsdkMetrics-DB3Tu-8Y.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
