import{f as p,j as e}from"./iframe-B8ePIdgx.js";import{O as i}from"./object-table-BDHL_SDm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CO52apix.js";import"./Table-B3G0R4Ei.js";import"./index-DUi6XBWn.js";import"./Dialog-yiIybKoY.js";import"./cross-Z2WIVKHq.js";import"./svgIconContainer-B5mfSzbk.js";import"./useBaseUiId--yhQINEj.js";import"./InternalBackdrop-Cna5j6JC.js";import"./composite-DrvPRKh9.js";import"./index-DzqwBQvc.js";import"./index-BDjNZM-d.js";import"./index-DJ6GgvW1.js";import"./useEventCallback-CqNNi0CJ.js";import"./SkeletonBar-CWitf-97.js";import"./LoadingCell-tI3Ymnd3.js";import"./ColumnConfigDialog-Bd9fLb8z.js";import"./DraggableList-E3xCY56a.js";import"./search-CRVGvOET.js";import"./Input-D21o8IPI.js";import"./useControlled-DkyHp8L_.js";import"./isEqual-9--5X3Q2.js";import"./isObject-BqZ_5db-.js";import"./Button-B1Ldn3Hf.js";import"./ActionButton-BcBaxta7.js";import"./Checkbox-L4xJmh-b.js";import"./useValueChanged-BNoCYxh2.js";import"./CollapsiblePanel-Bp2Y834B.js";import"./MultiColumnSortDialog-43iZe9aA.js";import"./MenuTrigger-C4fe3BSA.js";import"./CompositeItem-DUbz8YTd.js";import"./ToolbarRootContext-CpKnibLo.js";import"./getDisabledMountTransitionStyles-VYuEU4Z8.js";import"./getPseudoElementBounds-KMVduuX9.js";import"./chevron-down-VVimmYFs.js";import"./index-cjRW8DRN.js";import"./error-Cey_f2IB.js";import"./BaseCbacBanner-BvPN6XVJ.js";import"./makeExternalStore-BIU4uaP7.js";import"./Tooltip-BN01tXVt.js";import"./PopoverPopup-Zr6i6uzp.js";import"./toNumber-BEwV3n-j.js";import"./useOsdkClient-B6g5iTpe.js";import"./tick-C9Ba3a3m.js";import"./DropdownField-DHK94NfU.js";import"./withOsdkMetrics-CXP8M-KN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
