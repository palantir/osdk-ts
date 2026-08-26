import{f as p,j as e}from"./iframe-6qR11Bx0.js";import{O as i}from"./object-table-BfBi8LVj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_Yy5CIH.js";import"./Table-DDiHOAxl.js";import"./index-i2tOtYR_.js";import"./Dialog-FvP3Lxw9.js";import"./cross-D7PjcS8z.js";import"./svgIconContainer-XlgOHF0q.js";import"./useBaseUiId-DlgiHfEc.js";import"./InternalBackdrop-AgwqTTbq.js";import"./composite-D16UZS_I.js";import"./index-B2X8PE9_.js";import"./index-DsOGlaAg.js";import"./index-BV0-TMAO.js";import"./useEventCallback-SlOcZxmd.js";import"./SkeletonBar-ycqW4z_S.js";import"./LoadingCell-B44i1nOx.js";import"./ColumnConfigDialog-Dkj9KAW2.js";import"./DraggableList-BOkavqxO.js";import"./search-ByKRFVJz.js";import"./Input-5sdYtdOv.js";import"./useControlled-Da-RuFP2.js";import"./Button-D5kP-zjx.js";import"./small-cross-C7nTj5uN.js";import"./ActionButton-u_S0n9qI.js";import"./Checkbox-yEpVdiPr.js";import"./useValueChanged-BZSxO_it.js";import"./CollapsiblePanel-DoWV0n-r.js";import"./MultiColumnSortDialog-CK2K0niX.js";import"./MenuTrigger-BQRJetgV.js";import"./CompositeItem-BVVIYYWe.js";import"./ToolbarRootContext-BFseEUjE.js";import"./getDisabledMountTransitionStyles-E2XqG_eb.js";import"./getPseudoElementBounds-CUAgg5Mk.js";import"./chevron-down-C16wVk20.js";import"./index-DPYKBcvA.js";import"./error-CXAefsdr.js";import"./BaseCbacBanner-CLTdhhiG.js";import"./makeExternalStore-UJLHcmUF.js";import"./Tooltip-BTLykIEU.js";import"./PopoverPopup-DGPSPBmG.js";import"./debounce-C6dFJgss.js";import"./useOsdkClient-DnvX8IID.js";import"./tick-B7N7dfWe.js";import"./DropdownField-DUtfZmSY.js";import"./isEqual-CwgWlVS2.js";import"./withOsdkMetrics-5m6-j_Ap.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
