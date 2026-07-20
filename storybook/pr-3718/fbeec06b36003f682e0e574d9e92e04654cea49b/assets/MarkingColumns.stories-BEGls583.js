import{f as p,j as e}from"./iframe-C5_sv1s8.js";import{O as i}from"./object-table-v3LsKZBs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjZSPLuP.js";import"./Table-lNj_J5-I.js";import"./index-BLhgFNKv.js";import"./Dialog-BKqUWBZB.js";import"./cross-Dahj-HJO.js";import"./svgIconContainer-suHm6UJN.js";import"./useBaseUiId-B7lNuAlM.js";import"./InternalBackdrop-BVcyrUFc.js";import"./composite-hy6sYsr4.js";import"./index-6RY7HM-5.js";import"./index-DtkutMrn.js";import"./index-UtctJkaV.js";import"./useEventCallback-B7DOgLCn.js";import"./SkeletonBar-dcCd5zMp.js";import"./LoadingCell-DQwCyEXn.js";import"./ColumnConfigDialog-Ctntyuws.js";import"./DraggableList-v-Nwqx-I.js";import"./search-BgAZQbRW.js";import"./Input-CoKcstBP.js";import"./useControlled-xIkiPHDU.js";import"./isEqual-DRfpqkXI.js";import"./isObject-CMH7e9WV.js";import"./Button-BbM3G3vl.js";import"./ActionButton-28BLF9tj.js";import"./Checkbox-DfflJiVN.js";import"./useValueChanged-B2yMWxYM.js";import"./CollapsiblePanel-C_Zs33ep.js";import"./MultiColumnSortDialog-m60u75st.js";import"./MenuTrigger-ClodRh-f.js";import"./CompositeItem-B8lW9pG5.js";import"./ToolbarRootContext-C-yAVa7Z.js";import"./getDisabledMountTransitionStyles-Dpr0J2-_.js";import"./getPseudoElementBounds-fu3PN89u.js";import"./chevron-down-Dn2sQGC_.js";import"./index-5Ghi4G9U.js";import"./error-BnM4bYa4.js";import"./BaseCbacBanner-DOnrGzTs.js";import"./makeExternalStore-BQN1UQRK.js";import"./Tooltip-wHAqb7UL.js";import"./PopoverPopup-ChKLE0gU.js";import"./toNumber-2ARIFGaj.js";import"./useOsdkClient-znHnj-A5.js";import"./tick-Dq8pW14E.js";import"./DropdownField-CfC-KJxp.js";import"./withOsdkMetrics-C_RQ9Eem.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
