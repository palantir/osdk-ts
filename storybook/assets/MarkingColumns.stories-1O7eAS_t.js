import{f as p,j as e}from"./iframe-DnkZBU_s.js";import{O as i}from"./object-table-CGRqNSp7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BTqH_OzT.js";import"./index-Twl2Yec2.js";import"./Dialog-DZz-I4Yg.js";import"./cross-VJ1Xhfzd.js";import"./svgIconContainer-Q5pL_kyU.js";import"./useBaseUiId-zN2OIme-.js";import"./InternalBackdrop-qQYyo8Aq.js";import"./composite-C8UkqdZX.js";import"./index-e48OPfBl.js";import"./index-B-feRM5a.js";import"./index-D8RsbEg-.js";import"./useEventCallback-sPIyL2oh.js";import"./SkeletonBar-DThVILbx.js";import"./LoadingCell-CQwN2qo8.js";import"./ColumnConfigDialog-CE81TjDT.js";import"./DraggableList-ChOw6E8T.js";import"./search-Dr69VxcO.js";import"./Input-kebRx2SD.js";import"./useControlled-Bf8g-fcX.js";import"./Button-DhKykdrC.js";import"./small-cross-CovzpZRI.js";import"./ActionButton-Dy9qrhe6.js";import"./Checkbox-YF4J1gUw.js";import"./useValueChanged-CD6SQReb.js";import"./CollapsiblePanel-Cc6hsa-S.js";import"./MultiColumnSortDialog-CxgaCaFw.js";import"./MenuTrigger-CpSU6k-5.js";import"./CompositeItem-CnMbPbIm.js";import"./ToolbarRootContext-C8MimhOM.js";import"./getDisabledMountTransitionStyles-DG0BDKFw.js";import"./getPseudoElementBounds-Cyh96wJ4.js";import"./chevron-down-0w-qoQFW.js";import"./index-DxCMtj6T.js";import"./error-DnS223r_.js";import"./BaseCbacBanner-BoQhx0vv.js";import"./makeExternalStore-C3h3EPrK.js";import"./Tooltip-BNLJju5c.js";import"./PopoverPopup-bkZpgw0I.js";import"./debounce-BhxHqivV.js";import"./useOsdkClient-DsdDCC_g.js";import"./tick-D5_MceeO.js";import"./DropdownField-rO0m6kph.js";import"./isEqual-BjLkGY5Q.js";import"./withOsdkMetrics-CS0c_ats.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
