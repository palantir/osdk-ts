import{f as p,j as e}from"./iframe-C3MdTHLQ.js";import{O as i}from"./object-table-HC9G0-zB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3M0V84kL.js";import"./Table-CF61Igz5.js";import"./index-BgVlrX6R.js";import"./Dialog-ArQrHAg9.js";import"./cross-Bgd4sC_w.js";import"./svgIconContainer-CipT1sHW.js";import"./useBaseUiId-BY9bLyd_.js";import"./InternalBackdrop-DAk90e5g.js";import"./composite-BNzQ7X-x.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./index-DQ3V0Ck8.js";import"./useEventCallback-B9GmybVM.js";import"./SkeletonBar-NdZnQaRq.js";import"./LoadingCell-2W3SA1-R.js";import"./ColumnConfigDialog-EDoh1yDU.js";import"./DraggableList-BXNUpJnm.js";import"./search-7cyOXxuf.js";import"./Input-Dv1jlKn1.js";import"./useControlled-BVKJ7vS7.js";import"./Button-cJHIlP8z.js";import"./small-cross-DPNpbIW3.js";import"./ActionButton-BSVEJ7Hr.js";import"./Checkbox-epqZ-xFx.js";import"./useValueChanged-DxMDIhq4.js";import"./CollapsiblePanel-CsBBS9Ht.js";import"./MultiColumnSortDialog-DN6j5kZS.js";import"./MenuTrigger-C76cZwo1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./getDisabledMountTransitionStyles-DS8Fcflj.js";import"./getPseudoElementBounds-5xT67UCu.js";import"./chevron-down-kdwD8AzF.js";import"./index-CoAkWlDV.js";import"./error-Kr8BQL-e.js";import"./BaseCbacBanner-DMT9YJWJ.js";import"./makeExternalStore-CDdlC2MZ.js";import"./Tooltip-DUCX4E7k.js";import"./PopoverPopup-CKTWXUlx.js";import"./debounce-BXkGDWS-.js";import"./useOsdkClient-D17MJqfm.js";import"./tick-CMLsuHuf.js";import"./DropdownField-BHHdSfJN.js";import"./isEqual-BPwUsz3X.js";import"./withOsdkMetrics-C_vOiZra.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
