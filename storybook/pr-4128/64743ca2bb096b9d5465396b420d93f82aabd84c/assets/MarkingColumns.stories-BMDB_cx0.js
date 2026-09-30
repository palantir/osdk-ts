import{f as p,j as e}from"./iframe-ClMgtSuk.js";import{O as i}from"./object-table--l5P5fZV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTt1WWTr.js";import"./Table-Bs1Mc4j4.js";import"./index-CldZE-Fz.js";import"./Dialog-B8YbOYMH.js";import"./cross-viQYDEND.js";import"./svgIconContainer-oOu9mbxW.js";import"./useBaseUiId-woEv5Hvl.js";import"./InternalBackdrop-lzq1-uho.js";import"./composite-AMpBTCaD.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./index-Ct_fn0U-.js";import"./useEventCallback-Df1aTrS2.js";import"./SkeletonBar-ClzuP6Go.js";import"./LoadingCell-uwKDV78Q.js";import"./ColumnConfigDialog-LYkt6wr0.js";import"./DraggableList-DuEHNMRv.js";import"./search-COwJRDi0.js";import"./Input-BtIh3kKl.js";import"./useControlled-8r5NxEZn.js";import"./Button-BCu1jtHq.js";import"./small-cross-CqFS18i-.js";import"./ActionButton-DSjTpeTA.js";import"./Checkbox-ASKiaSYC.js";import"./useValueChanged-BUHPg38E.js";import"./CollapsiblePanel-CtkO9azS.js";import"./MultiColumnSortDialog-QlO6Azc5.js";import"./MenuTrigger-CZRm3cej.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./getDisabledMountTransitionStyles-DS7SGJ-f.js";import"./getPseudoElementBounds-DAVljBL_.js";import"./chevron-down-DRfUqPRw.js";import"./index-Dlvw17dt.js";import"./error-D3qiwtEy.js";import"./BaseCbacBanner-CN_XmouS.js";import"./makeExternalStore-v6XUl8OF.js";import"./Tooltip-CsPWprPe.js";import"./PopoverPopup-C7ZCNFox.js";import"./debounce-DNxed3Zp.js";import"./useOsdkClient-DebYYw8a.js";import"./tick-BVkIDnpf.js";import"./DropdownField-C5-pHjL8.js";import"./isEqual-z0aK0gs6.js";import"./withOsdkMetrics-H7JHankc.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
