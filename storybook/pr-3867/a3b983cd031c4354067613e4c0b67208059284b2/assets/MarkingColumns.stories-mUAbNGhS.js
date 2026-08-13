import{f as p,j as e}from"./iframe-BVDCNjcv.js";import{O as i}from"./object-table-iMyLgsRb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYyHjn7h.js";import"./Table-CLSRkwMy.js";import"./index-_ZEFwRG4.js";import"./Dialog-CN3I2CLp.js";import"./cross-ha5THBWj.js";import"./svgIconContainer-DE6RIudO.js";import"./useBaseUiId-Bn7tPMyc.js";import"./InternalBackdrop-Cagl88rt.js";import"./composite-DfTYjTcf.js";import"./index-CiJWuuCz.js";import"./index-BpeKA42d.js";import"./index-DNPYVeRb.js";import"./useEventCallback-DymoCTvT.js";import"./SkeletonBar-Cht_cLuj.js";import"./LoadingCell-QXCWoCnM.js";import"./ColumnConfigDialog-C1Xo1sgk.js";import"./DraggableList-31c1qP_b.js";import"./search-DoN7C3Ww.js";import"./Input-D5ZE_3yL.js";import"./useControlled-C2Zp9gz_.js";import"./Button-ChLPke0x.js";import"./small-cross-59pV_NVH.js";import"./ActionButton-BEoPIWdX.js";import"./Checkbox-Bea_Wqm9.js";import"./useValueChanged-DLhsDHsb.js";import"./CollapsiblePanel-BnLgPV0Z.js";import"./MultiColumnSortDialog-BEjTzm5X.js";import"./MenuTrigger-DTO-2qCK.js";import"./CompositeItem-DqfwRJk9.js";import"./ToolbarRootContext-CtetOuLM.js";import"./getDisabledMountTransitionStyles-CAjd8DqA.js";import"./getPseudoElementBounds--sz9K5fS.js";import"./chevron-down-5NG5qhbV.js";import"./index-CMAvGmQJ.js";import"./error-CyfM8m9x.js";import"./BaseCbacBanner-_y_LvwWU.js";import"./makeExternalStore-B2YAtvuk.js";import"./Tooltip-BBhWS3Lt.js";import"./PopoverPopup-BsoLGNYy.js";import"./debounce-vPvNsZNP.js";import"./useOsdkClient-DZXCpy0q.js";import"./tick-4Gk2pH7M.js";import"./DropdownField-DxF_HQob.js";import"./isEqual-BlEwvh7Y.js";import"./withOsdkMetrics-vrnHfU6i.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
