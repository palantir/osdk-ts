import{f as p,j as e}from"./iframe-C7u8teZW.js";import{O as i}from"./object-table-CyvMeLHX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BksW-fLa.js";import"./Table-CDMydSky.js";import"./index-BhN64Vkr.js";import"./Dialog-DE1Pcah0.js";import"./cross-DxUgqzoH.js";import"./svgIconContainer-BCJkHoyI.js";import"./useBaseUiId-DhUQmONl.js";import"./InternalBackdrop-CiuI9iXh.js";import"./composite-zfEBFY2E.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./index-BfFTxu65.js";import"./useEventCallback-BFNSOXZ0.js";import"./SkeletonBar-Cx2TnRLV.js";import"./LoadingCell-CfumBpKG.js";import"./ColumnConfigDialog-CuV0HQkQ.js";import"./DraggableList-BBkY3ia_.js";import"./search-D1b21RXS.js";import"./Input-CkX7hrVd.js";import"./useControlled-wz_zz6UQ.js";import"./Button-ItUG0RJE.js";import"./small-cross-BXAWZBeP.js";import"./ActionButton-hbhMcRNO.js";import"./Checkbox-CJT7DI4o.js";import"./useValueChanged-BeaCU65z.js";import"./CollapsiblePanel-GTw3JwtT.js";import"./MultiColumnSortDialog-CfXR7DTa.js";import"./MenuTrigger-eEIm7O2K.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./getDisabledMountTransitionStyles-NTCPfN1w.js";import"./getPseudoElementBounds-CERtdroa.js";import"./chevron-down-CkA7RfLP.js";import"./index-CWtS_zs6.js";import"./error-CEH3koMg.js";import"./BaseCbacBanner-D-xiZ6RB.js";import"./makeExternalStore-MBK88X8R.js";import"./Tooltip-CMWksZUd.js";import"./PopoverPopup-20OsJ-7t.js";import"./debounce-CiptvIy5.js";import"./useOsdkClient-C3xSadaC.js";import"./tick-yfLFJlQJ.js";import"./DropdownField-C_ts6lDO.js";import"./isEqual-BH4pI4eI.js";import"./withOsdkMetrics-GebS3Gu5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
