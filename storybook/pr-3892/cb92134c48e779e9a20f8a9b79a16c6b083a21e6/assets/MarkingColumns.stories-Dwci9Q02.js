import{f as p,j as e}from"./iframe-DRtOcaPG.js";import{O as i}from"./object-table-BCfwSR0a.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9DgHanXn.js";import"./Table-D8C_QUcD.js";import"./index-Ce2dl65O.js";import"./Dialog-6XlLOHmL.js";import"./cross-BX3J5cVV.js";import"./svgIconContainer-DpZEtLv9.js";import"./useBaseUiId-BGBZ1HUg.js";import"./InternalBackdrop-DEWb66um.js";import"./composite-N79hpvK_.js";import"./index-DHqOpqOn.js";import"./index-D8e0XOwM.js";import"./index-B1juJX5y.js";import"./useEventCallback-KpeXCugf.js";import"./SkeletonBar-Bn8psVV6.js";import"./LoadingCell-TIEVW5Z1.js";import"./ColumnConfigDialog-BoPwK1_S.js";import"./DraggableList-BLdMLrLx.js";import"./search-Dtkc2Iz5.js";import"./Input-QNUGF4Iu.js";import"./useControlled-BcvbWefU.js";import"./Button-CK6d5OG4.js";import"./small-cross-DcKEL8t4.js";import"./ActionButton-D4k0Ykwf.js";import"./Checkbox-BIE_uDYH.js";import"./useValueChanged-BDN_9EGE.js";import"./CollapsiblePanel-Dny0UpIl.js";import"./MultiColumnSortDialog-tRhI4Szy.js";import"./MenuTrigger-cVWNdQTi.js";import"./CompositeItem-DWL2WPXo.js";import"./ToolbarRootContext-B6bPz9D9.js";import"./getDisabledMountTransitionStyles-BJl-4ZY_.js";import"./getPseudoElementBounds-Dwgu6l1I.js";import"./chevron-down-SYe_Fp71.js";import"./index-Bi5AS5V_.js";import"./error-BkqrjqGY.js";import"./BaseCbacBanner-CS1xI85h.js";import"./makeExternalStore-Ch0Jbi30.js";import"./Tooltip-xjkYLVuc.js";import"./PopoverPopup-CNH5KUV5.js";import"./debounce-1FOPDn_n.js";import"./useOsdkClient-DR_uLwOS.js";import"./tick-DoLa9jip.js";import"./DropdownField-BVBUpAg_.js";import"./isEqual-DydWlIf1.js";import"./withOsdkMetrics-DDwhyEqf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
