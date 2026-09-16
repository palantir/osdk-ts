import{f as p,j as e}from"./iframe-BUf-CLqY.js";import{O as i}from"./object-table-Dyvh2IGr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-riapeqtP.js";import"./Table-CzS-rh25.js";import"./index-C_MybgQ3.js";import"./Dialog-lZrjoHin.js";import"./cross-CGc-Hcb9.js";import"./svgIconContainer-DU0Ye5dG.js";import"./useBaseUiId-gpzCx-rm.js";import"./InternalBackdrop-C5ZNKnCf.js";import"./composite-ByB7nSsB.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./index-B3D2SnAc.js";import"./useEventCallback-BywkN-Ff.js";import"./SkeletonBar-DFo16lR0.js";import"./LoadingCell-CdUbXIXo.js";import"./ColumnConfigDialog-BxDZ3Dv6.js";import"./DraggableList-B4cd4Qb-.js";import"./search-pVr5xk4n.js";import"./Input-DnSUiNyS.js";import"./useControlled-DEV21H7B.js";import"./Button-cOSWZtuo.js";import"./small-cross-CSJnPQqY.js";import"./ActionButton-BBw0Te-_.js";import"./Checkbox-C46p_nfP.js";import"./useValueChanged-MJAskWLg.js";import"./CollapsiblePanel-UPRERRAW.js";import"./MultiColumnSortDialog-Cf13_Nd2.js";import"./MenuTrigger-x9K-Wus0.js";import"./CompositeItem-Cjz_Qy2T.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./getDisabledMountTransitionStyles-BCAFuXq1.js";import"./getPseudoElementBounds-DzYucCEu.js";import"./chevron-down-CRvVeW5r.js";import"./index-CD5GlWla.js";import"./error-CZVIneLk.js";import"./BaseCbacBanner-CmW41sxI.js";import"./makeExternalStore-BFB7Uams.js";import"./Tooltip-Cm_gslQX.js";import"./PopoverPopup-BlmOLchB.js";import"./debounce-B-iF24A7.js";import"./useOsdkClient-ctroE3hm.js";import"./tick-B2EggPvK.js";import"./DropdownField-Sb9cC2Wv.js";import"./isEqual-BL-FfRPo.js";import"./withOsdkMetrics-BtUVOcAG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
