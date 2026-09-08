import{f as p,j as e}from"./iframe-CxUFDRLk.js";import{O as i}from"./object-table-Cwk7xm14.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOCVFqPP.js";import"./Table-Dqfk7wyN.js";import"./index-D3P2PnfT.js";import"./Dialog-BU96hrNx.js";import"./cross-BABVEZtV.js";import"./svgIconContainer-lhP_uqYt.js";import"./useBaseUiId-B_I-AE6w.js";import"./InternalBackdrop-2L9B9MFF.js";import"./composite-C6x_RQDW.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./index-D6DNyq_c.js";import"./useEventCallback-ZNNLb4EC.js";import"./SkeletonBar-B-5lxJx6.js";import"./LoadingCell-D2xXOTjr.js";import"./ColumnConfigDialog-CEY5behw.js";import"./DraggableList-B2trtdD6.js";import"./search-Bycz8Mke.js";import"./Input-BnQ1Pqm-.js";import"./useControlled-i_PgyXUB.js";import"./Button-DfD1hoUH.js";import"./small-cross-HxQFWB4N.js";import"./ActionButton-D1b2dROh.js";import"./Checkbox-BoRXXaXQ.js";import"./useValueChanged-DiYqY4ta.js";import"./CollapsiblePanel-KaZ7CRFP.js";import"./MultiColumnSortDialog-DuDCgPoI.js";import"./MenuTrigger-Cnc_xPLq.js";import"./CompositeItem-Bm2eQNpM.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./getDisabledMountTransitionStyles-kKhuwNUe.js";import"./getPseudoElementBounds-0LLCjN2z.js";import"./chevron-down-CGVLA0Cv.js";import"./index-Dh-mEvCI.js";import"./error-D-IJQZZn.js";import"./BaseCbacBanner-CighYLtt.js";import"./makeExternalStore-YOPDBlSx.js";import"./Tooltip-CMU-bxvV.js";import"./PopoverPopup-pze7gDjU.js";import"./debounce-CAh4NXmJ.js";import"./useOsdkClient-BpG5SD2k.js";import"./tick-D4sARw8j.js";import"./DropdownField-DPW3dnFU.js";import"./isEqual-GlpYI2kv.js";import"./withOsdkMetrics-CPTjHpfw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
