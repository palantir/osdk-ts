import{f as p,j as e}from"./iframe-d67fO8Hy.js";import{O as i}from"./object-table-DnPtetQ7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bkr4_qkS.js";import"./Table-MM65L2ys.js";import"./index-B3ATbghx.js";import"./Dialog-C8PKiJtJ.js";import"./cross-Dhsy2lb8.js";import"./svgIconContainer-0_l9M1TV.js";import"./useBaseUiId-DAPMmE-k.js";import"./InternalBackdrop-CPOwNltk.js";import"./composite-DgQW3RrN.js";import"./index-Bfq5tsOh.js";import"./index-BQ0UWAWF.js";import"./index-C3nueWd-.js";import"./useEventCallback-XRj4vjhQ.js";import"./SkeletonBar-C10GPXTz.js";import"./LoadingCell-Bsb88Deq.js";import"./ColumnConfigDialog-EzM-G72-.js";import"./DraggableList-CcWjbOHp.js";import"./search-BJPSjSS2.js";import"./Input-BDVfl7Fm.js";import"./useControlled-DVSkDfdi.js";import"./Button-Ba0LvAgG.js";import"./small-cross-DpVo6Bt2.js";import"./ActionButton-BjsV-hhr.js";import"./Checkbox-C9q9LeYF.js";import"./useValueChanged-BPOaH2ai.js";import"./CollapsiblePanel-BsQekoIK.js";import"./MultiColumnSortDialog-BpLwH_BZ.js";import"./MenuTrigger-BI85z42j.js";import"./CompositeItem-BlzOTS1w.js";import"./ToolbarRootContext-BIYj41-H.js";import"./getDisabledMountTransitionStyles-BIByIGzl.js";import"./getPseudoElementBounds-Dn_EWDZB.js";import"./chevron-down-CUnzJf2x.js";import"./index-CVtzuMh1.js";import"./error-hkUFZDRv.js";import"./BaseCbacBanner-BCU-zUsd.js";import"./makeExternalStore-CYpUKzCL.js";import"./Tooltip-g-pWm_fU.js";import"./PopoverPopup-DWeFjGRm.js";import"./debounce-CsC9LC5J.js";import"./useOsdkClient-CNDbHwB1.js";import"./tick-DPR1XWRH.js";import"./DropdownField-B96kR7Sr.js";import"./isEqual-DX_c9-yy.js";import"./withOsdkMetrics-CmzDVisr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
