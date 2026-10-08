import{f as p,j as e}from"./iframe-B1-dVNhS.js";import{O as i}from"./object-table-uYmiqrJw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2ProuBv.js";import"./Table-DCX1dool.js";import"./index-WzbH8_Sp.js";import"./Dialog-CcYcAsyi.js";import"./cross-DSyUk5jg.js";import"./svgIconContainer-wdLWihrJ.js";import"./useBaseUiId-B6R5LUY3.js";import"./InternalBackdrop-BOiIRLua.js";import"./composite-GFxhGtPY.js";import"./index-Dh-RbIId.js";import"./index-E0TiBTDQ.js";import"./index-xcHgmafl.js";import"./useEventCallback-B1rXS-nA.js";import"./SkeletonBar-BhH-zFkC.js";import"./LoadingCell-DCoKmcMd.js";import"./ColumnConfigDialog-ChPHNMhu.js";import"./DraggableList-C7uNSywG.js";import"./search-D_Yyj-29.js";import"./Input-DcCcX-hv.js";import"./useControlled-CY-lWJZk.js";import"./Button-B1lo8D22.js";import"./small-cross-BbKGzC12.js";import"./ActionButton-DYfOCnDA.js";import"./Checkbox-DHvhHlPX.js";import"./useValueChanged-DJpQ9JpS.js";import"./CollapsiblePanel-C7cdbtZi.js";import"./MultiColumnSortDialog-BrkvTRbF.js";import"./MenuTrigger-ysqRk_bn.js";import"./CompositeItem-BkBiNRQD.js";import"./ToolbarRootContext-1bs6h0vw.js";import"./getDisabledMountTransitionStyles-Ekj_ahAn.js";import"./getPseudoElementBounds-CdXmde03.js";import"./chevron-down-DucaWjk_.js";import"./index-C7eChUSe.js";import"./error-mrqVIVBz.js";import"./BaseCbacBanner-CQf5ghEo.js";import"./makeExternalStore-WUBDRAE1.js";import"./Tooltip-DTMQ2lEm.js";import"./PopoverPopup-x43Mxd5d.js";import"./debounce-Cr9XR4am.js";import"./useOsdkClient-2-pImquH.js";import"./tick-DdK_sq_c.js";import"./DropdownField-DFuV0D7k.js";import"./isEqual-BQ42eRcw.js";import"./withOsdkMetrics-ijmPCvgt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
