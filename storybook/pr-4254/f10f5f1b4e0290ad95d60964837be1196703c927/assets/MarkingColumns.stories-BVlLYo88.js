import{f as p,j as e}from"./iframe-DsRLlUaX.js";import{O as i}from"./object-table-C6ocuAmU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C3_l2Hl0.js";import"./Table-B5YW4b-i.js";import"./index-BjtlPBUb.js";import"./Dialog-NmSshLSo.js";import"./cross-BZKb8UMR.js";import"./svgIconContainer-zp1B85KB.js";import"./useBaseUiId-C4i6MKWL.js";import"./InternalBackdrop-nEq0F95e.js";import"./composite-DOMJJy3E.js";import"./index-n_UhMgqI.js";import"./index-Bav5EGdy.js";import"./index-BzAzXXv_.js";import"./useEventCallback-DmbMgs2A.js";import"./SkeletonBar-RdAIK3SY.js";import"./LoadingCell-CxPz7u6p.js";import"./ColumnConfigDialog-BIlxFV8w.js";import"./DraggableList-CQ2CxVlc.js";import"./search-SgUD_ncl.js";import"./Input-DZ_xmuAk.js";import"./useControlled-DEedTOrX.js";import"./Button-DOnuCfPD.js";import"./small-cross-CPUMrn4k.js";import"./ActionButton-DcRLI80N.js";import"./Checkbox-Anj4p3QX.js";import"./useValueChanged-C110ouPx.js";import"./CollapsiblePanel-Cs4tbvDj.js";import"./MultiColumnSortDialog-DlgXXTmU.js";import"./MenuTrigger-FQSVvGxv.js";import"./CompositeItem-DfeVObqB.js";import"./ToolbarRootContext-B0k-j8eq.js";import"./getDisabledMountTransitionStyles-CuDFXdCB.js";import"./getPseudoElementBounds-BKZ8iNlw.js";import"./chevron-down-BpedfE0t.js";import"./index-C9cwWX6g.js";import"./error-CaruzJxR.js";import"./BaseCbacBanner-JMChXCpR.js";import"./makeExternalStore-0t40E2-H.js";import"./Tooltip-Bb-4nM7_.js";import"./PopoverPopup-C20EJZAo.js";import"./debounce-BdN6OVW0.js";import"./useOsdkClient-odhqC5VJ.js";import"./tick-Bf8GrdTl.js";import"./DropdownField-B8gE2PDv.js";import"./isEqual-Caes_N__.js";import"./withOsdkMetrics-BDhrFxgU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
