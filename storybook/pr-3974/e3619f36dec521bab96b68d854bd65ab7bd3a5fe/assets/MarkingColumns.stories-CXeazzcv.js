import{f as p,j as e}from"./iframe-D3l12Tr-.js";import{O as i}from"./object-table-nod7Wt-p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-PcHol1Ue.js";import"./Table-CyeovwFu.js";import"./index-BPiZlFJR.js";import"./Dialog-GF5Yno-p.js";import"./cross-C3J0WO3R.js";import"./svgIconContainer-CrW6rOVr.js";import"./useBaseUiId-BNJrpCWm.js";import"./InternalBackdrop-ziShhlZl.js";import"./composite-CuNBJcuu.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./index-iaCxRYSZ.js";import"./useEventCallback-BeRbrn2J.js";import"./SkeletonBar-DjZej6tn.js";import"./LoadingCell-CjWQnUcs.js";import"./ColumnConfigDialog-DY6HW5pi.js";import"./DraggableList-ZYKcWFuZ.js";import"./search-CdpCaKTD.js";import"./Input-BOpnVUAt.js";import"./useControlled-DWcGrjw6.js";import"./Button-DSLUEzYm.js";import"./small-cross-BCEWKAxW.js";import"./ActionButton-DCUde49g.js";import"./Checkbox-Hfm8jSI2.js";import"./useValueChanged-CBUdNBJG.js";import"./CollapsiblePanel-Dm9vP2Y3.js";import"./MultiColumnSortDialog-B5g7AoHm.js";import"./MenuTrigger-DJMPc6Ab.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./getDisabledMountTransitionStyles-DsE80_5m.js";import"./getPseudoElementBounds-D46F0KDp.js";import"./chevron-down-C6Fq88S4.js";import"./index-ChSzKfO9.js";import"./error-CKivbg2c.js";import"./BaseCbacBanner-CP6kabxU.js";import"./makeExternalStore-CvkBuVLJ.js";import"./Tooltip-NvOXi5xg.js";import"./PopoverPopup-CkdVrScL.js";import"./debounce-BHUK5RQM.js";import"./useOsdkClient-0m55-sBo.js";import"./tick-Dx_ZSNZP.js";import"./DropdownField-CtgPUtSd.js";import"./isEqual-t_77Xxoc.js";import"./withOsdkMetrics-62C1cNRI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
