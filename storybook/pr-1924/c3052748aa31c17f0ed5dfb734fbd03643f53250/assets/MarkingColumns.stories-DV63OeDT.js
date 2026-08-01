import{f as p,j as e}from"./iframe-DM57FO0O.js";import{O as i}from"./object-table-BUncbmPw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CiDQt3z4.js";import"./Table-fAJkuYMM.js";import"./index-78xpG-CN.js";import"./Dialog-B0lIxBy0.js";import"./cross-C4FWi7U6.js";import"./svgIconContainer-M4pBKDc9.js";import"./useBaseUiId-LhiCCirY.js";import"./InternalBackdrop-B7cw_zj9.js";import"./composite-szsum3r3.js";import"./index-X1UuWlqK.js";import"./index-C9SVGTzI.js";import"./index-BDCm_GGT.js";import"./useEventCallback-CQNDnyq4.js";import"./SkeletonBar-BXNcPfxw.js";import"./LoadingCell-CCifMiw4.js";import"./ColumnConfigDialog-BeH1Bmdd.js";import"./DraggableList-B-6UJOIk.js";import"./search-Swo5uGHk.js";import"./Input-jbZr5DP-.js";import"./useControlled-DmurJkbB.js";import"./isEqual-Bpc4ZaBI.js";import"./isObject-B39z3wFu.js";import"./Button-BtR_Rgq_.js";import"./ActionButton-CuTsrFpF.js";import"./Checkbox-CxtuU-nw.js";import"./useValueChanged-B7JDyvaj.js";import"./CollapsiblePanel-7JaVin_2.js";import"./MultiColumnSortDialog-CTjKzaH_.js";import"./MenuTrigger-DLb09YCg.js";import"./CompositeItem-COr71cMo.js";import"./ToolbarRootContext-Dme1Nr8M.js";import"./getDisabledMountTransitionStyles-BNVUpdXb.js";import"./getPseudoElementBounds-DTdRK2OL.js";import"./chevron-down-Dy3xC1Qv.js";import"./index-CIEwid69.js";import"./error-B-7TqBpt.js";import"./BaseCbacBanner-DnBux0DR.js";import"./makeExternalStore-IjYBHzVF.js";import"./Tooltip-D9DM-LvZ.js";import"./PopoverPopup-DJ9h3nij.js";import"./toNumber-BcdoaNcr.js";import"./useOsdkClient-CMjaLpsJ.js";import"./tick-D4_boYVT.js";import"./DropdownField-BHDZB30j.js";import"./withOsdkMetrics-U1ecBNOt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
