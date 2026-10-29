import{f as p,j as e}from"./iframe-C_ahFnte.js";import{O as i}from"./object-table-BtMR_OnT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHb0Injz.js";import"./Table-DLXPhATj.js";import"./index-CMAfnGax.js";import"./Dialog-CbOtsyj-.js";import"./cross-BAtZIK6I.js";import"./svgIconContainer-5iqtE3GT.js";import"./useBaseUiId-DyEK8-wC.js";import"./InternalBackdrop-oaroN_vT.js";import"./composite-6kxzU8nP.js";import"./index-40HiEJ_t.js";import"./index-CQRjwZPk.js";import"./index-BwjPeIMJ.js";import"./useEventCallback-DtB3C9nL.js";import"./SkeletonBar-CBTex6KK.js";import"./LoadingCell-MG_jMP8H.js";import"./ColumnConfigDialog-D8xKAy6h.js";import"./DraggableList-D3KfR8iu.js";import"./search-WeJq5Jbj.js";import"./Input-BOmt55ak.js";import"./useControlled-D2HRL4Vd.js";import"./Button-BF0zOcPV.js";import"./small-cross-CFiAlSxT.js";import"./ActionButton-BoswvknW.js";import"./Checkbox-BkoC8qnP.js";import"./useValueChanged-C2ULmJoA.js";import"./CollapsiblePanel-whWth_0-.js";import"./MultiColumnSortDialog-B-LrIHxe.js";import"./MenuTrigger-DfEjjsNm.js";import"./CompositeItem-DebMdAlI.js";import"./ToolbarRootContext-QybI75uQ.js";import"./getDisabledMountTransitionStyles-C6IdF26M.js";import"./getPseudoElementBounds-C7DtJwGW.js";import"./chevron-down-Dzt44ETV.js";import"./index-CcstwSD9.js";import"./error-DNwhr4rb.js";import"./BaseCbacBanner-DMfapRkh.js";import"./makeExternalStore-lErXhsir.js";import"./Tooltip-BTsS5oFd.js";import"./PopoverPopup-Ccomk73C.js";import"./debounce-WVnpB66O.js";import"./useOsdkClient-k2RdEafw.js";import"./tick-R__fCdWc.js";import"./DropdownField-vAKtIAD0.js";import"./isEqual-7xNdLAzs.js";import"./withOsdkMetrics-CSpFQCY6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
