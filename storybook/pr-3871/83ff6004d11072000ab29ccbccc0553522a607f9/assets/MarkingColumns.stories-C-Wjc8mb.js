import{f as p,j as e}from"./iframe-BiqEJvqs.js";import{O as i}from"./object-table-ByWQTztt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CUf-Ejfa.js";import"./Table-uOy9OEp4.js";import"./index-UOIl6jYX.js";import"./Dialog-znhQ3llA.js";import"./cross-J4n8RB05.js";import"./svgIconContainer-DhtXEAG2.js";import"./useBaseUiId-BfW20ii0.js";import"./InternalBackdrop-BOKyOs02.js";import"./composite-69au3nWT.js";import"./index-BEI0Rcxq.js";import"./index-BphVNaCP.js";import"./index-Ofy5twcD.js";import"./useEventCallback-BoyYhoVd.js";import"./SkeletonBar-CwCAIMYA.js";import"./LoadingCell-DoCiwnlV.js";import"./ColumnConfigDialog-CqdbbkAv.js";import"./DraggableList-jX8MWklq.js";import"./search-BBjG8S0f.js";import"./Input-ED3AY7t3.js";import"./useControlled-KybfaMD9.js";import"./Button-BZ6TNGhX.js";import"./small-cross-heoPx4jP.js";import"./ActionButton-pj4u8-sG.js";import"./Checkbox-CIZgw43L.js";import"./useValueChanged-DsVYoZzQ.js";import"./CollapsiblePanel-CD-DCHTk.js";import"./MultiColumnSortDialog-DzNPYbFj.js";import"./MenuTrigger-Th6t6h5N.js";import"./CompositeItem-DGaDgjtW.js";import"./ToolbarRootContext-6CMk-K6X.js";import"./getDisabledMountTransitionStyles-ByNtjguw.js";import"./getPseudoElementBounds-DxvMtYMy.js";import"./chevron-down-CbDtZ0Pe.js";import"./index-BVNphcmg.js";import"./error-JdYnclCK.js";import"./BaseCbacBanner-BF0XBNK3.js";import"./makeExternalStore-CbsSZTon.js";import"./Tooltip-B170VilI.js";import"./PopoverPopup-DNDK4_dy.js";import"./debounce-CPfb-Wa5.js";import"./useOsdkClient-DgwEzoz8.js";import"./tick-amhhThgk.js";import"./DropdownField-IKKiRqSx.js";import"./isEqual-DfHcaT7k.js";import"./withOsdkMetrics-BJrjEamM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
