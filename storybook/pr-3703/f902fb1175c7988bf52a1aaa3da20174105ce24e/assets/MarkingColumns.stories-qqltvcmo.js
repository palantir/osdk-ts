import{f as p,j as e}from"./iframe-C94QCVU3.js";import{O as i}from"./object-table-FpM1eBtw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CTTfd0Ip.js";import"./Table-jyLeIAa5.js";import"./index-C75VeRJX.js";import"./Dialog-1Y3ai-LD.js";import"./cross-WktNuFjj.js";import"./svgIconContainer-Cgj3lSWV.js";import"./useBaseUiId-JUnohQus.js";import"./InternalBackdrop-IbasDvZS.js";import"./composite-Cl4oBTbO.js";import"./index-DmQEmIxl.js";import"./index-BLXLX1gi.js";import"./index-C6o2hleU.js";import"./useEventCallback-B2OHLtdT.js";import"./SkeletonBar-PxPzRQe5.js";import"./LoadingCell-D55p3KG4.js";import"./ColumnConfigDialog-BUplYtxj.js";import"./DraggableList-Dklz7l-H.js";import"./search-DGR70EEW.js";import"./Input-CKXSWDvC.js";import"./useControlled-DNAf2gvO.js";import"./isEqual-BzzEa9W3.js";import"./isObject-KaD1mawS.js";import"./Button-D6-f4fdx.js";import"./ActionButton-C7Qkszsu.js";import"./Checkbox-BRLBlkpQ.js";import"./useValueChanged-yAG0ZI7I.js";import"./CollapsiblePanel-D5uz2WFi.js";import"./MultiColumnSortDialog-BLTy_Plc.js";import"./MenuTrigger-D53xNO-6.js";import"./CompositeItem-BAV2r3zU.js";import"./ToolbarRootContext-BAWA-0Sy.js";import"./getDisabledMountTransitionStyles-DML-IFlG.js";import"./getPseudoElementBounds-CieN-na4.js";import"./chevron-down-B-Lzv2hB.js";import"./index-aBj0wpDf.js";import"./error-Dy1Uaj26.js";import"./BaseCbacBanner-Bin0l-Js.js";import"./makeExternalStore-yYBkryCj.js";import"./Tooltip-BTNslsJb.js";import"./PopoverPopup-CriEJrPo.js";import"./toNumber-B8JdY8o3.js";import"./useOsdkClient-CTk3LJgN.js";import"./tick-Dpe5YiWJ.js";import"./DropdownField-DaUfPrcI.js";import"./withOsdkMetrics-Bp8IL8EX.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
