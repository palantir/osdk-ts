import{f as p,j as e}from"./iframe-BAeLbAl6.js";import{O as i}from"./object-table-BnsFvJtA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-m_84o41e.js";import"./Table-CK4yTRyV.js";import"./index-PFCRcBB8.js";import"./Dialog-dItpOhns.js";import"./cross-LaD09s4o.js";import"./svgIconContainer-BwzsxKuu.js";import"./useBaseUiId-Bqj7O5fV.js";import"./InternalBackdrop-ks6tfBqL.js";import"./composite-CB1zzFRj.js";import"./index-C94QZByk.js";import"./index-Cewd33Zv.js";import"./index-Bxsk2OvM.js";import"./useEventCallback-DWjHyX_4.js";import"./SkeletonBar-CcamCJ4u.js";import"./LoadingCell-B3P3spJG.js";import"./ColumnConfigDialog-B5H1sWgC.js";import"./DraggableList-D3jEqs9W.js";import"./search-DSQXKmVC.js";import"./Input-v-g3V96U.js";import"./useControlled-ESFaGK0R.js";import"./isEqual-3WwyNO5B.js";import"./isObject-DuMSLyr1.js";import"./Button-DlDEnFnv.js";import"./ActionButton-DHS8Tw7g.js";import"./Checkbox-JYmrAvZy.js";import"./useValueChanged-BxkTgku3.js";import"./CollapsiblePanel-C0jKchik.js";import"./MultiColumnSortDialog-2mMkw3qI.js";import"./MenuTrigger-DE_ZRb6u.js";import"./CompositeItem-CWT-t3Tx.js";import"./ToolbarRootContext-Cd959Anj.js";import"./getDisabledMountTransitionStyles-fDJE5x_7.js";import"./getPseudoElementBounds-CW_MLhzy.js";import"./chevron-down-Xy6No0Yn.js";import"./index-CZsDhWOE.js";import"./error-BE-E_O08.js";import"./BaseCbacBanner-DqseBF8U.js";import"./makeExternalStore-DgNy_XDA.js";import"./Tooltip-DU3L3KsD.js";import"./PopoverPopup-BeJ0b8hw.js";import"./toNumber-CfjuIAcz.js";import"./useOsdkClient-BGONbmHM.js";import"./tick-POonDG8j.js";import"./DropdownField-Dq4vr_wR.js";import"./withOsdkMetrics-CMXM2A9g.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
