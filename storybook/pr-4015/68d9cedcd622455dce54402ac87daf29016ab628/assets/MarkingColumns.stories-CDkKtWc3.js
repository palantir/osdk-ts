import{f as p,j as e}from"./iframe-CgX-XfZe.js";import{O as i}from"./object-table-BfAW9lRl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7xu4jFf.js";import"./Table-tTPFVIKa.js";import"./index-BcViD_AJ.js";import"./Dialog-BaFW1Zjw.js";import"./cross-Nv8Io3xy.js";import"./svgIconContainer-CXZEPhaW.js";import"./useBaseUiId-BXQE2Tij.js";import"./InternalBackdrop-CvIKv91P.js";import"./composite-CuhqFDst.js";import"./index-a2F2ZKsn.js";import"./index-BmNCbeoV.js";import"./index-DrrGWtE8.js";import"./useEventCallback-CJOkzsfk.js";import"./SkeletonBar-rtQtEYsd.js";import"./LoadingCell-wXQ9cx3W.js";import"./ColumnConfigDialog-D9BeChM7.js";import"./DraggableList-D1MymrnJ.js";import"./search-DTGDsddM.js";import"./Input-yuy0l2cX.js";import"./useControlled-CVDZAttb.js";import"./Button-BRRWL_gG.js";import"./small-cross-CldOek9E.js";import"./ActionButton-eETZToHJ.js";import"./Checkbox-OMZwBT2q.js";import"./useValueChanged-CJQsRnGQ.js";import"./CollapsiblePanel-ztAj1qzb.js";import"./MultiColumnSortDialog-CbBSNnI_.js";import"./MenuTrigger-CvwlMuvL.js";import"./CompositeItem-Cosvl6JF.js";import"./ToolbarRootContext-auY9xRTT.js";import"./getDisabledMountTransitionStyles-CY7m0Re-.js";import"./getPseudoElementBounds-Cb9yX_CQ.js";import"./chevron-down-QOEZh7s4.js";import"./index-Dj-xdEDu.js";import"./error-ByGGXW3h.js";import"./BaseCbacBanner-vW1LjLLW.js";import"./makeExternalStore-CRMwT7Da.js";import"./Tooltip-C7b0j1Nz.js";import"./PopoverPopup-AplR6RR1.js";import"./debounce-542eBR78.js";import"./useOsdkClient-CGTaZpCt.js";import"./tick-8a_8sCFa.js";import"./DropdownField-D1OnXseu.js";import"./isEqual-Dv3NJm4i.js";import"./withOsdkMetrics-N-qC9xyD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
