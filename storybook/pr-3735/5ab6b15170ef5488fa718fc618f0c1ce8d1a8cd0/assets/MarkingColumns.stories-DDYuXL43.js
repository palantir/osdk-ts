import{f as p,j as e}from"./iframe-CI_HynUY.js";import{O as i}from"./object-table-BKiuEgSl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIV_stCl.js";import"./Table-Bdxi8Ji2.js";import"./index-0kQGtEwV.js";import"./Dialog-DmIoMb6K.js";import"./cross-BfUKNbpN.js";import"./svgIconContainer-CBJHfw9Y.js";import"./useBaseUiId-CLhtbhfw.js";import"./InternalBackdrop-2mD5okmV.js";import"./composite-ChmQoEk2.js";import"./index-DyCxF_Yp.js";import"./index-BkBZKr2_.js";import"./index-CuvLYwNQ.js";import"./useEventCallback-LvVc03lO.js";import"./SkeletonBar-BqtbT4_L.js";import"./LoadingCell-BR6Jc_kG.js";import"./ColumnConfigDialog-VArGH5Un.js";import"./DraggableList-DNw4NfZ0.js";import"./search-DA24byco.js";import"./Input-Cb1k9hUL.js";import"./useControlled-CEg8frKf.js";import"./isEqual-njDV2lTg.js";import"./isObject-y8UFtvsy.js";import"./Button-BHVlE6--.js";import"./ActionButton-DBOJ-o3j.js";import"./Checkbox-ClCwaXFv.js";import"./useValueChanged-CbXoGVGF.js";import"./CollapsiblePanel-BNbnAlQH.js";import"./MultiColumnSortDialog-DbgN10xZ.js";import"./MenuTrigger-DtKC9G_6.js";import"./CompositeItem-D6h7EiM2.js";import"./ToolbarRootContext-Bg59D_CY.js";import"./getDisabledMountTransitionStyles-BgQ6Y6en.js";import"./getPseudoElementBounds-Djlx0q2A.js";import"./chevron-down-BLW-Pg3l.js";import"./index-BdlH6Nzm.js";import"./error-C7hCYMbm.js";import"./BaseCbacBanner-DRPBT1G1.js";import"./makeExternalStore-DhTdoCR8.js";import"./Tooltip-Baji5KPr.js";import"./PopoverPopup-CBR7iU58.js";import"./toNumber-Q3gPj6MM.js";import"./useOsdkClient-Cz_MMEOS.js";import"./tick-BDXCYJjJ.js";import"./DropdownField-BnBpVV6_.js";import"./withOsdkMetrics-CWUy-TNv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
