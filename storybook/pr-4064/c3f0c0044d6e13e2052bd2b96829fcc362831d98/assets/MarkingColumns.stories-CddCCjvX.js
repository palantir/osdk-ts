import{f as p,j as e}from"./iframe-KfcHTeg1.js";import{O as i}from"./object-table-DCtIV20U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bb9isu9Z.js";import"./Table-Bu6PSbB4.js";import"./index-R7bO3Ag2.js";import"./Dialog-D3f_elXv.js";import"./cross-CsyJ80xs.js";import"./svgIconContainer-Bg10ywbV.js";import"./useBaseUiId-BkW36jG5.js";import"./InternalBackdrop-tVRu2lpW.js";import"./composite-SXE3lJSt.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./index-BcYBVJtM.js";import"./useEventCallback-BLr_WVRC.js";import"./SkeletonBar-DDrD9EIz.js";import"./LoadingCell-C5uiI7TM.js";import"./ColumnConfigDialog-DeCZb3On.js";import"./DraggableList-xC7GwQ38.js";import"./search-srmRE2lv.js";import"./Input-CN3mZMt5.js";import"./useControlled-BGj-689N.js";import"./Button-DOEhPeJL.js";import"./small-cross-Cn9FtNXX.js";import"./ActionButton-Btyaoa61.js";import"./Checkbox-DqEzFRsP.js";import"./useValueChanged-Dz43bSNR.js";import"./CollapsiblePanel-Dv-wcfHr.js";import"./MultiColumnSortDialog-Bc6MK8qj.js";import"./MenuTrigger-D9ZtQcHZ.js";import"./CompositeItem-D4098fQy.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./getDisabledMountTransitionStyles-kkxHQkYj.js";import"./getPseudoElementBounds-CH0zahJv.js";import"./chevron-down-Vk4ljz0Y.js";import"./index-BPifgcSB.js";import"./error-BE8S7DUo.js";import"./BaseCbacBanner-BM0cDlRR.js";import"./makeExternalStore-Dw3huE5n.js";import"./Tooltip-BQBI28hZ.js";import"./PopoverPopup-BMw0y_rW.js";import"./debounce-2PRfpVgw.js";import"./useOsdkClient-B3A79I8Y.js";import"./tick-DVTuPHTD.js";import"./DropdownField-vOLnZeMB.js";import"./isEqual-asrTyJs0.js";import"./withOsdkMetrics-B7xTPOdu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
