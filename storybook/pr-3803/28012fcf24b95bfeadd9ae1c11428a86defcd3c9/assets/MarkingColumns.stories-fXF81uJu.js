import{f as p,j as e}from"./iframe-BlS90ihs.js";import{O as i}from"./object-table-CriJqgAL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CO5g6I2w.js";import"./Table-CSpzi4Wm.js";import"./index-BHOc8LyC.js";import"./Dialog-DAyAF1uP.js";import"./cross-B_hisJSZ.js";import"./svgIconContainer-LYrWoKiL.js";import"./useBaseUiId-Cf5AZRTS.js";import"./InternalBackdrop-DyXxto56.js";import"./composite-DLqdT5CV.js";import"./index-U6MToZTc.js";import"./index-Dx7dMNiV.js";import"./index-C6u7r9LX.js";import"./useEventCallback-B5w2dWGU.js";import"./SkeletonBar-Dmn9hVsc.js";import"./LoadingCell-D2mD0B3A.js";import"./ColumnConfigDialog-BrNjXxXe.js";import"./DraggableList-Dhzm7_-v.js";import"./search-CHH1oEbG.js";import"./Input-CeNFNh0n.js";import"./useControlled-B84OuIK1.js";import"./isEqual-ewgMqB9v.js";import"./isObject-aIdOeCBg.js";import"./Button-SxoUXmH3.js";import"./ActionButton-VrprXojg.js";import"./Checkbox-BiITbu2D.js";import"./useValueChanged-BktjxXbF.js";import"./CollapsiblePanel-DI6MBG5L.js";import"./MultiColumnSortDialog-BoEoNYy8.js";import"./MenuTrigger-BjitqoO9.js";import"./CompositeItem-DCiFXfQY.js";import"./ToolbarRootContext-BkF9_TGB.js";import"./getDisabledMountTransitionStyles-Rn-KFTgx.js";import"./getPseudoElementBounds-BICswt92.js";import"./chevron-down-Cd3C4D7a.js";import"./index-D3oeH8Dz.js";import"./error-CPJsC_89.js";import"./BaseCbacBanner-BCUyWElG.js";import"./makeExternalStore-C-0gPcpm.js";import"./Tooltip-CcTGnIxC.js";import"./PopoverPopup-BmHjJY8y.js";import"./toNumber-C8hHjjna.js";import"./useOsdkClient-DdijOu9r.js";import"./tick-_PMLCEhr.js";import"./DropdownField-DxP0_Ckl.js";import"./withOsdkMetrics-Dc64VAF-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
