import{f as p,j as e}from"./iframe-BUEP5_KN.js";import{O as i}from"./object-table-DsgKjrEY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BCZ0e6Bx.js";import"./Table-C2pSHfCx.js";import"./index-Cv5GbN86.js";import"./Dialog-BKn-ZTlZ.js";import"./cross-BFI2c1gT.js";import"./svgIconContainer-BxBMhXhK.js";import"./useBaseUiId-CtzwQFB0.js";import"./InternalBackdrop-0AgP2Frr.js";import"./composite-CRlO-KKn.js";import"./index-BFlpobHB.js";import"./index-C5qosZUE.js";import"./index-CWhxk_VF.js";import"./useEventCallback-C1Zgw4Ky.js";import"./SkeletonBar-GFqMzlNc.js";import"./LoadingCell-DgzNywjO.js";import"./ColumnConfigDialog-D0EGSflz.js";import"./DraggableList-PUeo89lO.js";import"./search-ug0_eoW4.js";import"./Input-Bnyr3ygR.js";import"./useControlled-PKwq7ae5.js";import"./isEqual-DuiBvV2G.js";import"./isObject-DY1gTwAG.js";import"./Button-BSn-_RfD.js";import"./ActionButton-D5yLikE9.js";import"./Checkbox-D0bYA1uK.js";import"./useValueChanged-TybsbpVT.js";import"./CollapsiblePanel-70q2W7BX.js";import"./MultiColumnSortDialog-zP5bDXpD.js";import"./MenuTrigger--G7NFvZU.js";import"./CompositeItem-C6hNbQz3.js";import"./ToolbarRootContext-BnGkTKD4.js";import"./getDisabledMountTransitionStyles-Dfr23WDG.js";import"./getPseudoElementBounds-F4tv6nV9.js";import"./chevron-down-BLw7EeHj.js";import"./index-B16c37PX.js";import"./error-CGouaaOn.js";import"./BaseCbacBanner-CCEIv-FS.js";import"./makeExternalStore-BQTvyZx_.js";import"./Tooltip-BMIm9wqW.js";import"./PopoverPopup-I_I-0Ao-.js";import"./toNumber-BkzfzitC.js";import"./useOsdkClient-CVJbm5_v.js";import"./tick-DqD8ipnV.js";import"./DropdownField-SVotLH5l.js";import"./withOsdkMetrics-B5ElZfNl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
