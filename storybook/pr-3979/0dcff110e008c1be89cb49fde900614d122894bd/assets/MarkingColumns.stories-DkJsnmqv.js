import{f as p,j as e}from"./iframe-vkoUEtx2.js";import{O as i}from"./object-table-D9bcFwrc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CY67mq_z.js";import"./Table-srNtWwan.js";import"./index-CnABB2cx.js";import"./Dialog-CFGI2PWi.js";import"./cross-DTB4NCzU.js";import"./svgIconContainer-CTvbg6Kf.js";import"./useBaseUiId-Cn9qEQr-.js";import"./InternalBackdrop-DvtCmbub.js";import"./composite-CNJa8zsy.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./index-BzU6qHej.js";import"./useEventCallback-CxBnJXYy.js";import"./SkeletonBar-r9iUkffY.js";import"./LoadingCell-B6F1Eu1_.js";import"./ColumnConfigDialog-DTtwDBeO.js";import"./DraggableList-CvZhWeAl.js";import"./search-BJuRvFPW.js";import"./Input-DILwrgB_.js";import"./useControlled-BjJao8Of.js";import"./Button-yBKPIwwM.js";import"./small-cross-CEVVBQcQ.js";import"./ActionButton-DC04mOud.js";import"./Checkbox-C_r46pP6.js";import"./useValueChanged-BU9oYbVe.js";import"./CollapsiblePanel-DCq2pf_O.js";import"./MultiColumnSortDialog-BBluglFz.js";import"./MenuTrigger-CnwTa3Dw.js";import"./CompositeItem-B2YXnViz.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./getDisabledMountTransitionStyles-t_o23Sl1.js";import"./getPseudoElementBounds-DQfoju0G.js";import"./chevron-down-B0GhQ5QL.js";import"./index-CkB6dCmi.js";import"./error-WzD0MOfh.js";import"./BaseCbacBanner-DTwYXkXJ.js";import"./makeExternalStore-BZrOFzyq.js";import"./Tooltip-BP2G_ScW.js";import"./PopoverPopup-DmfHqgAT.js";import"./debounce-B3rNx3B-.js";import"./useOsdkClient-1czjWT3K.js";import"./tick-OUtJmbiv.js";import"./DropdownField-B5znI0v8.js";import"./isEqual-Ca1oPQqE.js";import"./withOsdkMetrics-1oalfrhO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
