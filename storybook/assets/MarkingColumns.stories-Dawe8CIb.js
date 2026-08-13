import{f as p,j as e}from"./iframe-D5O5_k9_.js";import{O as i}from"./object-table-C-DLDZpP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-EbZEPZet.js";import"./index-BIhwPQ5A.js";import"./Dialog-CAqmshjJ.js";import"./cross-qoOvfrZB.js";import"./svgIconContainer-Dc8lBmE9.js";import"./useBaseUiId-BK5NoUBi.js";import"./InternalBackdrop-CRNPM9W7.js";import"./composite-CMeP4FlW.js";import"./index-DXS8u3_B.js";import"./index-AFBT5mUa.js";import"./index-CSVDbKCa.js";import"./useEventCallback-YCtidgdS.js";import"./SkeletonBar-BAcn_h-M.js";import"./LoadingCell-DN-B8-Tb.js";import"./ColumnConfigDialog-C3EEhoK7.js";import"./DraggableList-DaBxAvIS.js";import"./search-sOGHpgAJ.js";import"./Input-BO-GptjU.js";import"./useControlled-hlAYtkod.js";import"./Button-74u_STeL.js";import"./small-cross-vq9wJw1f.js";import"./ActionButton-CS6EOwh3.js";import"./Checkbox-DKwnOk29.js";import"./useValueChanged-Ck_KuO7m.js";import"./CollapsiblePanel-Cm3UP6Hc.js";import"./MultiColumnSortDialog-PRFnS_QJ.js";import"./MenuTrigger-CGfJ9uYA.js";import"./CompositeItem-BHw_Azd0.js";import"./ToolbarRootContext-7sTGpIsw.js";import"./getDisabledMountTransitionStyles-B3_gGaay.js";import"./getPseudoElementBounds-Debta3vv.js";import"./chevron-down-VCtVB2U7.js";import"./index-DFB-Kfs7.js";import"./error-g0-V9Ywd.js";import"./BaseCbacBanner-CxIPfa7L.js";import"./makeExternalStore-CxymVNiv.js";import"./Tooltip-BKSUBMZw.js";import"./PopoverPopup-sKoAxBCT.js";import"./toNumber-C0xl3ikJ.js";import"./useOsdkClient-CICgihsL.js";import"./tick-DzZZV7Ed.js";import"./DropdownField-DGa1os9V.js";import"./withOsdkMetrics-B2-MbefI.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
