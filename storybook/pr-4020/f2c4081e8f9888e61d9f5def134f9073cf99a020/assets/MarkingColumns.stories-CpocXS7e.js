import{f as p,j as e}from"./iframe-CINa6Zgf.js";import{O as i}from"./object-table-bWrqp2dT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-By73o2jw.js";import"./Table-BBTdYlQ-.js";import"./index-BP4TKibe.js";import"./Dialog-CdtCVyP3.js";import"./cross-BkRnKOPP.js";import"./svgIconContainer-CNFEqHpH.js";import"./useBaseUiId-CWUgitm1.js";import"./InternalBackdrop-CiQDmEMW.js";import"./composite-OajiVgE3.js";import"./index-CxG-P-nc.js";import"./index-CA-7i9jO.js";import"./index-BtagJvg8.js";import"./useEventCallback-BEdjHVFi.js";import"./SkeletonBar-UkW_OkZD.js";import"./LoadingCell-pD_Yefjq.js";import"./ColumnConfigDialog-Bc2Xyr7i.js";import"./DraggableList-C1dNTMSq.js";import"./search-DndjkDUR.js";import"./Input-CsP9VOhj.js";import"./useControlled-CIQnPEcE.js";import"./Button-S_wwBFsV.js";import"./small-cross-DpLPdGHk.js";import"./ActionButton-DDDKBEV5.js";import"./Checkbox-DV59Q6l-.js";import"./useValueChanged-BGQoiKWM.js";import"./CollapsiblePanel-_7NHSAW-.js";import"./MultiColumnSortDialog-DfOtsTxl.js";import"./MenuTrigger-BXs9dpKi.js";import"./CompositeItem-BieHCh4d.js";import"./ToolbarRootContext-DNhRV4PI.js";import"./getDisabledMountTransitionStyles-DGkpLrSf.js";import"./getPseudoElementBounds-B_xY--Sp.js";import"./chevron-down-DnNAIf49.js";import"./index-DMjOHO7u.js";import"./error-BIO08ioS.js";import"./BaseCbacBanner-BfZPQgZE.js";import"./makeExternalStore-BvvEwv00.js";import"./Tooltip-DRox557f.js";import"./PopoverPopup-DyMWOWhV.js";import"./debounce-W9feSSbl.js";import"./useOsdkClient-lu0DiUxq.js";import"./tick-BdMwtH9z.js";import"./DropdownField-BPtamgR3.js";import"./isEqual-lWJTpmnJ.js";import"./withOsdkMetrics-Ct4i0IXa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
