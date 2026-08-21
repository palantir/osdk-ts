import{f as p,j as e}from"./iframe-DitR3wrF.js";import{O as i}from"./object-table-CID5KzVr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CNXpGYTW.js";import"./Table-DK5kkM-B.js";import"./index-BxGfYTdz.js";import"./Dialog-C34PcR-Z.js";import"./cross-Bk9CQZhu.js";import"./svgIconContainer-iiqqYfd1.js";import"./useBaseUiId-nvgLYlZj.js";import"./InternalBackdrop-rs5ZBr6w.js";import"./composite-C4jZt334.js";import"./index-mmwfIz2r.js";import"./index-B_n8V48u.js";import"./index-2m8BG5Sh.js";import"./useEventCallback-Dxp2t-VD.js";import"./SkeletonBar-HS9u5urc.js";import"./LoadingCell-DGAsi_Nc.js";import"./ColumnConfigDialog-D081vs0D.js";import"./DraggableList-CA3S4epP.js";import"./search-Bwe7rzXS.js";import"./Input-CYzB12qm.js";import"./useControlled-Bo2-iR5e.js";import"./Button-Bo3FBeXJ.js";import"./small-cross-COwDX3bd.js";import"./ActionButton-CIH2u_HO.js";import"./Checkbox-Do08-zmE.js";import"./useValueChanged-DJv87t3q.js";import"./CollapsiblePanel-DZ_aEzco.js";import"./MultiColumnSortDialog-7TPUamn-.js";import"./MenuTrigger-CMH3InYX.js";import"./CompositeItem-Drvp4rJR.js";import"./ToolbarRootContext-u_lF0Sl2.js";import"./getDisabledMountTransitionStyles-D4khNU9j.js";import"./getPseudoElementBounds-BvsDV4fR.js";import"./chevron-down-BsVtNM2T.js";import"./index-BPs86j1H.js";import"./error-C_6ZHNzG.js";import"./BaseCbacBanner-ChWdoKWk.js";import"./makeExternalStore-C2AhoyWG.js";import"./Tooltip-CdNUR4xK.js";import"./PopoverPopup-xyjhkdhH.js";import"./debounce-CuZ-w5Ov.js";import"./useOsdkClient-DsFPAnnx.js";import"./tick-C5e_5hJt.js";import"./DropdownField-CRY2WFNT.js";import"./isEqual-D8ZyDvjn.js";import"./withOsdkMetrics-wlTLtuGf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
