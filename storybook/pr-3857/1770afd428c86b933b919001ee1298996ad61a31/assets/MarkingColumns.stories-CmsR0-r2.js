import{f as p,j as e}from"./iframe-CpI7FB-T.js";import{O as i}from"./object-table-Dexfdtqv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_hE2pBz.js";import"./Table-REyfQMd2.js";import"./index-Dd3y5ah7.js";import"./Dialog-KBoNfEPI.js";import"./cross-B20tfhAE.js";import"./svgIconContainer-CEg1T5tk.js";import"./useBaseUiId-CmfBo7dj.js";import"./InternalBackdrop-DZmYO_AD.js";import"./composite-BR65LiyS.js";import"./index-BPRvbx56.js";import"./index-DosPUwQU.js";import"./index-BDUgGgA4.js";import"./useEventCallback-B9o36XEn.js";import"./SkeletonBar-ULydxLuj.js";import"./LoadingCell-Z0bla46n.js";import"./ColumnConfigDialog-D-rJXor5.js";import"./DraggableList-xopIjLi6.js";import"./search-e6ClQ_VS.js";import"./Input-DdDoLRi6.js";import"./useControlled-CzotDDz1.js";import"./isEqual-DDC7Ff_s.js";import"./isObject-tXEwv9PV.js";import"./Button-CLOyqypH.js";import"./ActionButton-U9TB8zhE.js";import"./Checkbox-BH0H9xke.js";import"./useValueChanged-C9asjQNV.js";import"./CollapsiblePanel-CbWZAJxM.js";import"./MultiColumnSortDialog-CE_KwoFj.js";import"./MenuTrigger-C1BfiMac.js";import"./CompositeItem-CCWclQxp.js";import"./ToolbarRootContext-Bq8pd6_h.js";import"./getDisabledMountTransitionStyles-BO8zIF7H.js";import"./getPseudoElementBounds-sBl5ZUwT.js";import"./chevron-down-JaiM5xR9.js";import"./index-DzEbTyMP.js";import"./error-DM5U_BtV.js";import"./BaseCbacBanner-Dr_UpDH_.js";import"./makeExternalStore-NLBkDu7_.js";import"./Tooltip-EwE4yKNF.js";import"./PopoverPopup-CURpd358.js";import"./toNumber-yBJeXRUy.js";import"./useOsdkClient-I2HrApfP.js";import"./tick-DdhDmdN8.js";import"./DropdownField-DL3w_3o5.js";import"./withOsdkMetrics-ADEd6SH7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
