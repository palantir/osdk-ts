import{f as p,j as e}from"./iframe-DlL407jt.js";import{O as i}from"./object-table-Jb4dJd6e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJD3fY2z.js";import"./Table-BbpOY9kf.js";import"./index-DZmZFRgP.js";import"./Dialog-D8kM7xr2.js";import"./cross-CzAlhRHv.js";import"./svgIconContainer-C3aprzty.js";import"./useBaseUiId-kFFF_95H.js";import"./InternalBackdrop-1eYHITMY.js";import"./composite-CnW58q4R.js";import"./index-h5_pJtzr.js";import"./index-CTSKtE65.js";import"./index-CD3lFFWF.js";import"./useEventCallback-CP9Yx8kI.js";import"./SkeletonBar-BGe_x6tw.js";import"./LoadingCell-tNR0WluI.js";import"./ColumnConfigDialog-DkL1WAnR.js";import"./DraggableList-30IfpOtK.js";import"./search-CHs1cMQF.js";import"./Input-D4IoTLF7.js";import"./useControlled-BgQSSZgH.js";import"./Button-DMVMokIc.js";import"./small-cross-CVMu3gSR.js";import"./ActionButton-eiflqw4G.js";import"./Checkbox-D8SK4Agj.js";import"./useValueChanged-TEcie-Mz.js";import"./CollapsiblePanel-DQTz5N7k.js";import"./MultiColumnSortDialog-B4-PluNb.js";import"./MenuTrigger-jjfhmBQz.js";import"./CompositeItem-EF9Yfn-T.js";import"./ToolbarRootContext-FpY3GT5-.js";import"./getDisabledMountTransitionStyles-Cs7LUNTv.js";import"./getPseudoElementBounds-CS3-8zt_.js";import"./chevron-down-D5Po3Ct_.js";import"./index-DkvAjmmx.js";import"./error-BAaXixX9.js";import"./BaseCbacBanner-DcoIEnYg.js";import"./makeExternalStore-DASQ1Znf.js";import"./Tooltip-DBCzdDEt.js";import"./isObject-BLEUFFKV.js";import"./debounce-CQmlcroi.js";import"./useOsdkClient-DuswpGgS.js";import"./tick-CyzaHOGg.js";import"./DropdownField-o_FquzSc.js";import"./isEqual-NGl5w6F-.js";import"./_baseIsEqual-DJgdVIs-.js";import"./withOsdkMetrics-C_49vYYy.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
