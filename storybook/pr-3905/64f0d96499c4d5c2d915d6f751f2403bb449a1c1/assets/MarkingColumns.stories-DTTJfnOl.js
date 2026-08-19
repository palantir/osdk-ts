import{f as p,j as e}from"./iframe-Wmfq-VZM.js";import{O as i}from"./object-table-DuFaRQDQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Du2S85FQ.js";import"./Table-gAslYiRN.js";import"./index-CS0Yy-a9.js";import"./Dialog-CMr0H3Ms.js";import"./cross-DVOMc_IS.js";import"./svgIconContainer-Dr38566j.js";import"./useBaseUiId-BxqdO-OV.js";import"./InternalBackdrop-Dt5EJaJf.js";import"./composite-D8Nselg9.js";import"./index-BACLQbWX.js";import"./index-Cyb_urLR.js";import"./index-CkgQRnS-.js";import"./useEventCallback-CFjZA5qB.js";import"./SkeletonBar-Dwj78qcB.js";import"./LoadingCell-tVyhyGyF.js";import"./ColumnConfigDialog-C-2FyhzQ.js";import"./DraggableList-4Q6sDfeT.js";import"./search-DztiYnhe.js";import"./Input-64OaWLA3.js";import"./useControlled-DYwC9uvx.js";import"./Button-KnZtOZhW.js";import"./small-cross-D2I3HjLn.js";import"./ActionButton-Cw-6679X.js";import"./Checkbox-BtVHm2N0.js";import"./useValueChanged-Dm27a27U.js";import"./CollapsiblePanel-Czhz75oi.js";import"./MultiColumnSortDialog-CAr0PnYK.js";import"./MenuTrigger-BYwMSIdZ.js";import"./CompositeItem-DfjKuZSp.js";import"./ToolbarRootContext-DDVqMWIS.js";import"./getDisabledMountTransitionStyles-DUfcCrkU.js";import"./getPseudoElementBounds-IxJEcHej.js";import"./chevron-down-BMFuph0I.js";import"./index-BXiERbEc.js";import"./error-DX3SW9eg.js";import"./BaseCbacBanner-ByUAxktr.js";import"./makeExternalStore-DELeA3LK.js";import"./Tooltip-CGPj4Dbd.js";import"./PopoverPopup-DK71CzjP.js";import"./debounce-DwY3sqQK.js";import"./useOsdkClient-CNJuRTO6.js";import"./tick-CWFk4NDt.js";import"./DropdownField-DrVsqmrK.js";import"./isEqual-BBQhxmN8.js";import"./withOsdkMetrics-Csx3CAie.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
