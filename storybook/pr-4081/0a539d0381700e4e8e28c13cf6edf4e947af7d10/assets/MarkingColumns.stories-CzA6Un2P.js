import{f as p,j as e}from"./iframe-n8xc1zmR.js";import{O as i}from"./object-table-CiBALKRZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bmsyery-.js";import"./Table-B4GdGFKt.js";import"./index-BAcQGlbN.js";import"./Dialog-DMtSaZZF.js";import"./cross-CxpUurAd.js";import"./svgIconContainer-Cfmf2PdM.js";import"./useBaseUiId-eETnIy-K.js";import"./InternalBackdrop-CCcuqGEC.js";import"./composite-DIEyOfVG.js";import"./index-MqtyKuec.js";import"./index-DV7yKC3H.js";import"./index-Cv8iH0sa.js";import"./useEventCallback-kGheuRwD.js";import"./SkeletonBar-D74l1Ztx.js";import"./LoadingCell-CMixqtDR.js";import"./ColumnConfigDialog-2BkdEepz.js";import"./DraggableList-C8LN0UDD.js";import"./search-CHlDi3Oa.js";import"./Input-BlStQB_U.js";import"./useControlled-D5Gxa7cz.js";import"./Button-xMD57DxE.js";import"./small-cross-BNKugY-f.js";import"./ActionButton-CSMbtnor.js";import"./Checkbox-DD1ns08A.js";import"./useValueChanged-BZIGOI0A.js";import"./CollapsiblePanel-BpdatoOf.js";import"./MultiColumnSortDialog-Gt0xpNTA.js";import"./MenuTrigger-DdA8vxhc.js";import"./CompositeItem-Bg5j4iyb.js";import"./ToolbarRootContext-BJkBQG1i.js";import"./getDisabledMountTransitionStyles-BNw6DyHr.js";import"./getPseudoElementBounds-CLnV32FM.js";import"./chevron-down-ut1JXVy2.js";import"./index-_yWg9Pvu.js";import"./error-B1cmPXwp.js";import"./BaseCbacBanner-Cw7Gzt9H.js";import"./makeExternalStore-DsKbnpVD.js";import"./Tooltip-C0vBpqP0.js";import"./PopoverPopup-CnDxdF7U.js";import"./debounce-DHLI8XQh.js";import"./useOsdkClient-CCi5QoY_.js";import"./tick-Cgr5wt1D.js";import"./DropdownField-CS8LcZCX.js";import"./isEqual-vs4Fv33M.js";import"./withOsdkMetrics-BgaQEVHI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
