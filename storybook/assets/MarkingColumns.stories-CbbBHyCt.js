import{f as p,j as e}from"./iframe-BTVc0NfO.js";import{O as i}from"./object-table-BF9yNLuw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D11hnLOE.js";import"./index-CHKL9w9V.js";import"./Dialog-FASjDoGC.js";import"./cross-B5VTNSsk.js";import"./svgIconContainer-CnMTzFv5.js";import"./useBaseUiId-CZsgbpdM.js";import"./InternalBackdrop-qIbZ781e.js";import"./composite-C9Vb183y.js";import"./index-C2BuQfAN.js";import"./index-NKm1JDXX.js";import"./index-BEIXqWzC.js";import"./useEventCallback-D7W_6xJc.js";import"./SkeletonBar-C9fEJaD9.js";import"./LoadingCell-C-heY8gK.js";import"./ColumnConfigDialog-q-MU_TSe.js";import"./DraggableList-LdmXXIk8.js";import"./search-F6eLyO1Y.js";import"./Input-C8rOi6ap.js";import"./useControlled-CtWOXhfs.js";import"./Button-wiKLARtU.js";import"./small-cross-i8OgMQru.js";import"./ActionButton-Cz4aqbXW.js";import"./Checkbox-CPvoM0pd.js";import"./useValueChanged-CizP1i5b.js";import"./CollapsiblePanel-Blb2Hulw.js";import"./MultiColumnSortDialog-BL1wuoVK.js";import"./MenuTrigger-CY4Ly_HG.js";import"./CompositeItem-Ccapx6OP.js";import"./ToolbarRootContext-BluceK63.js";import"./getDisabledMountTransitionStyles-CZF91-Uw.js";import"./getPseudoElementBounds-BSVSOuNM.js";import"./chevron-down-Dp9CmW78.js";import"./index-Crp7dURd.js";import"./error-wP2V0esL.js";import"./BaseCbacBanner-BSwx0e4K.js";import"./makeExternalStore-DQnWSZhz.js";import"./Tooltip-BcXwlhoB.js";import"./PopoverPopup-iSPlQ-dm.js";import"./debounce-BLlsJYXr.js";import"./useOsdkClient-DKSqD0Ve.js";import"./tick-CJV0pt-z.js";import"./DropdownField-MAluBn4S.js";import"./isEqual-D2uuTnMB.js";import"./withOsdkMetrics-WJQAY5-z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
