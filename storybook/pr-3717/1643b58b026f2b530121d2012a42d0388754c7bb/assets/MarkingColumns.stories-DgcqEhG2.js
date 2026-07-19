import{f as p,j as e}from"./iframe-C9caj-uS.js";import{O as i}from"./object-table-I82krBh1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dm7ndjo5.js";import"./Table-FrJ5VbFE.js";import"./index-DJDCuZSS.js";import"./Dialog-DtbMpwEc.js";import"./cross-BqWAuO9Q.js";import"./svgIconContainer-B4Ghhqx2.js";import"./useBaseUiId-BLHAOWKu.js";import"./InternalBackdrop-B4exXygs.js";import"./composite-bXu8NOAH.js";import"./index-CDWH6ybA.js";import"./index-BdqcR2Fk.js";import"./index-FaRahgIA.js";import"./useEventCallback-Sr08txEK.js";import"./SkeletonBar-C58E_DVe.js";import"./LoadingCell-D0UKN_CU.js";import"./ColumnConfigDialog-lS62kGVB.js";import"./DraggableList-FqoFY7LZ.js";import"./search-DJ1CgP8p.js";import"./Input-BoWXJjuZ.js";import"./useControlled-DZFGlnZc.js";import"./isEqual-HRVzg3WQ.js";import"./isObject-DLFtkRLQ.js";import"./Button-C_2J43G-.js";import"./ActionButton-B-8xUM8_.js";import"./Checkbox-CYw2FyJB.js";import"./useValueChanged-Cfhki45-.js";import"./CollapsiblePanel-BRPvxnTH.js";import"./MultiColumnSortDialog-BdephSiG.js";import"./MenuTrigger-Dw7ka3uS.js";import"./CompositeItem-iG_-J612.js";import"./ToolbarRootContext-WTq_GHpE.js";import"./getDisabledMountTransitionStyles-iUIJl5bc.js";import"./getPseudoElementBounds-ClPhAI2i.js";import"./chevron-down-9Qv1QY7O.js";import"./index-CpRmXNxn.js";import"./error-DbcPXbnj.js";import"./BaseCbacBanner-CNRhVl4y.js";import"./makeExternalStore-BWnBKRDx.js";import"./Tooltip-CIVBW3Mt.js";import"./PopoverPopup-DbzlkE2i.js";import"./toNumber-KvWsSisO.js";import"./useOsdkClient-zyWKCqY_.js";import"./tick-BI6r-so9.js";import"./DropdownField-Awlu1yBr.js";import"./withOsdkMetrics-Cy5OKgHc.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
