import{f as p,j as e}from"./iframe-I5kvh-Kw.js";import{O as i}from"./object-table-Cr0S9q82.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bdf318pV.js";import"./Table-TtSnZhQr.js";import"./index-HKnhZxyX.js";import"./Dialog-mqgafTiX.js";import"./cross-Yl6g30y6.js";import"./svgIconContainer-DDPN3ss8.js";import"./useBaseUiId-BejWRuZ2.js";import"./InternalBackdrop-AewAO-J_.js";import"./composite-DzvS9mVY.js";import"./index-BV_M3ZY7.js";import"./index-B3JolPJS.js";import"./index-Dc5Qye8S.js";import"./useEventCallback-pdwLNnur.js";import"./SkeletonBar-kcsCYLu4.js";import"./LoadingCell-DtTIvVBW.js";import"./ColumnConfigDialog-BCP5cr4v.js";import"./DraggableList-CcLt-lZ7.js";import"./search-C9rUiq_s.js";import"./Input-GvrpBokI.js";import"./useControlled-B-k81KQz.js";import"./Button-B2DkfEqk.js";import"./small-cross-Bt34L26C.js";import"./ActionButton-CqQaVHKu.js";import"./Checkbox-BciDkEMh.js";import"./useValueChanged-B0q3nMZ1.js";import"./CollapsiblePanel-e6KM6j36.js";import"./MultiColumnSortDialog-geU7VG77.js";import"./MenuTrigger--lameju1.js";import"./CompositeItem-Ck73puur.js";import"./ToolbarRootContext-BpC1haoE.js";import"./getDisabledMountTransitionStyles-BX75q4sb.js";import"./getPseudoElementBounds-Bc29vczI.js";import"./chevron-down-BWVLfJxG.js";import"./index-BYHjFf0T.js";import"./error-Dywin3-5.js";import"./BaseCbacBanner-MQh6F2xl.js";import"./makeExternalStore-CUhQIJ-n.js";import"./Tooltip-DU2yzwco.js";import"./PopoverPopup-C0f2Xvwy.js";import"./debounce-DwNlwyza.js";import"./useOsdkClient-CHvk60Or.js";import"./tick-CMqxctjO.js";import"./DropdownField-ceLSuDDZ.js";import"./isEqual-CvGgOlJg.js";import"./withOsdkMetrics-CldLsQ2u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
