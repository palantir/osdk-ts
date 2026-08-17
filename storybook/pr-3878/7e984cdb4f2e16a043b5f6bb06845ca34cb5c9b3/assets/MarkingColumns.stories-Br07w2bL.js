import{f as p,j as e}from"./iframe-D_l2u6_6.js";import{O as i}from"./object-table-D1XKD5VY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DpjmzVUp.js";import"./Table-fHmfLZAd.js";import"./index-Dh9XtuqD.js";import"./Dialog-ddbwFZ6h.js";import"./cross-gGpYcHa9.js";import"./svgIconContainer-5I5uI1yB.js";import"./useBaseUiId-CXCcQdyU.js";import"./InternalBackdrop-D_4E-Rxz.js";import"./composite-BhVnd5Ck.js";import"./index-DfO4jocZ.js";import"./index-CiyIlioJ.js";import"./index-DfCuXz0x.js";import"./useEventCallback-BgdlLsMa.js";import"./SkeletonBar-DlE-3K9g.js";import"./LoadingCell-C6vkENzn.js";import"./ColumnConfigDialog-D-SC4cU5.js";import"./DraggableList-DSDUX4s7.js";import"./search-CpZeqKUE.js";import"./Input-C-nLgfsl.js";import"./useControlled-BDw-HKbZ.js";import"./Button-CKuTj87a.js";import"./small-cross-C9PjvE4A.js";import"./ActionButton-BXiWW4vN.js";import"./Checkbox-DLVgl3J5.js";import"./useValueChanged-BH7Mlnbx.js";import"./CollapsiblePanel-C_xwzt2e.js";import"./MultiColumnSortDialog-DwXONmuL.js";import"./MenuTrigger-BPfbcpen.js";import"./CompositeItem-iF4WWV8_.js";import"./ToolbarRootContext-C1XZ50ky.js";import"./getDisabledMountTransitionStyles-x-mkt6n1.js";import"./getPseudoElementBounds-dXr3viq6.js";import"./chevron-down-CrG8bbfA.js";import"./index-DidMIQP-.js";import"./error-BMvuJzzL.js";import"./BaseCbacBanner-B6SfVemQ.js";import"./makeExternalStore-BcUYV5GH.js";import"./Tooltip-CT3gDVtv.js";import"./PopoverPopup-CJl6zO3k.js";import"./debounce-CDPBmaYV.js";import"./useOsdkClient-Tzqd6rMR.js";import"./tick-CrfOW8ie.js";import"./DropdownField-BXaP58OO.js";import"./isEqual-CsFmxKDR.js";import"./withOsdkMetrics-BJ3LCUHt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
