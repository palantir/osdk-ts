import{f as p,j as e}from"./iframe-f-LLf2Ya.js";import{O as i}from"./object-table-NAm-Tb9i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BoUrXPpj.js";import"./Table-lp2K-SKo.js";import"./index-B9B3s7bF.js";import"./Dialog-T2SbK608.js";import"./cross-BoVk4V5c.js";import"./svgIconContainer-Chc81CN8.js";import"./useBaseUiId-CTPNjBcP.js";import"./InternalBackdrop-B102vmpL.js";import"./composite-DfPjCfHJ.js";import"./index-BUX5q-Oa.js";import"./index-iUTVCIAd.js";import"./index-CJHXodCw.js";import"./useEventCallback-B6M-wCG5.js";import"./SkeletonBar-DlBooARs.js";import"./LoadingCell-BokbCzol.js";import"./ColumnConfigDialog-UDfAaSY7.js";import"./DraggableList-BUa9wnEH.js";import"./search-Bj93OaU5.js";import"./Input-D7SgfRqC.js";import"./useControlled-cD9LnU0e.js";import"./isEqual-Nhn9BSCX.js";import"./isObject-AXHth5L_.js";import"./Button-hDBFxLU5.js";import"./ActionButton-CL6lk5NG.js";import"./Checkbox-D-KZhJs8.js";import"./useValueChanged-BL7Vf6ZS.js";import"./CollapsiblePanel-R7SXJsHH.js";import"./MultiColumnSortDialog-0cPVbbvp.js";import"./MenuTrigger-DboWzSmf.js";import"./CompositeItem-Bl4lI12j.js";import"./ToolbarRootContext-CeWNTyyw.js";import"./getDisabledMountTransitionStyles-CDbInF5Y.js";import"./getPseudoElementBounds-D2MdtfWJ.js";import"./chevron-down-B4M_wavl.js";import"./index-J2idT5w8.js";import"./error-CEbz4Hh3.js";import"./BaseCbacBanner-Bh1YNigA.js";import"./makeExternalStore-DjTlMKLb.js";import"./Tooltip-C6j9r67Z.js";import"./PopoverPopup-DhqRFoSS.js";import"./toNumber-CD0pPV7v.js";import"./useOsdkClient-DscPqlK8.js";import"./tick-CFL3l1_K.js";import"./DropdownField-j2MhMqBT.js";import"./withOsdkMetrics-vMgHUsgr.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
