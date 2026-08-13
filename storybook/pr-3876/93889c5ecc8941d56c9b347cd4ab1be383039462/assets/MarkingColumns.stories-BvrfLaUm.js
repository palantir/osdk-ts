import{f as p,j as e}from"./iframe-B8ibQjKF.js";import{O as i}from"./object-table-9vqfk3fk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMD4l3O3.js";import"./Table-f9R4UMOG.js";import"./index-B--aNSCd.js";import"./Dialog-BSpD68-v.js";import"./cross-uGZs9fgx.js";import"./svgIconContainer-DuFhrdn4.js";import"./useBaseUiId-BxWBC6a-.js";import"./InternalBackdrop-CCxZSbaK.js";import"./composite-CAyfL59E.js";import"./index-BCjJY3yP.js";import"./index-DBfTlL85.js";import"./index-DrgkSuUF.js";import"./useEventCallback-DePWrBVy.js";import"./SkeletonBar-DE8ZQ6J2.js";import"./LoadingCell-Bp02iLbu.js";import"./ColumnConfigDialog-DZlI4Qsl.js";import"./DraggableList-ByHOcy7f.js";import"./search-Cf8PmQT0.js";import"./Input-B1tchOJx.js";import"./useControlled-Cii-y7gH.js";import"./Button-A4muZh2M.js";import"./small-cross-DdjbaLVn.js";import"./ActionButton-DqU28EvH.js";import"./Checkbox-CA6_XMTm.js";import"./useValueChanged-7WVLzbi3.js";import"./CollapsiblePanel-z3aLJBjW.js";import"./MultiColumnSortDialog-CfWO-If5.js";import"./MenuTrigger-CJ44DmRX.js";import"./CompositeItem-BRMst1Om.js";import"./ToolbarRootContext-CK_0JlCI.js";import"./getDisabledMountTransitionStyles-BJ46NQkw.js";import"./getPseudoElementBounds-xIxeLL80.js";import"./chevron-down-DnT6V3B_.js";import"./index-CS7J2oP3.js";import"./error-B5tJ6HNC.js";import"./BaseCbacBanner-Dpz_8FPC.js";import"./makeExternalStore-PzBycvZ3.js";import"./Tooltip-BT2aBHPW.js";import"./PopoverPopup-B0Ae0Now.js";import"./debounce-CE6scw_c.js";import"./useOsdkClient-CNSoK_jG.js";import"./tick-CNDf03QZ.js";import"./DropdownField-ChRNI13x.js";import"./isEqual-CMa4Cmoc.js";import"./withOsdkMetrics-DLhXO-aP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
