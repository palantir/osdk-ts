import{f as p,j as e}from"./iframe-DfvwHsY4.js";import{O as i}from"./object-table-DsgGTtXM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B_za76P1.js";import"./Table-D9CBcPp7.js";import"./index-CQtOsoXK.js";import"./Dialog-DHH-JwJ9.js";import"./cross-fqG1RiYl.js";import"./svgIconContainer-B9JqQ2wt.js";import"./useBaseUiId-B0xqZb_O.js";import"./InternalBackdrop-CKWiJoCa.js";import"./composite-CSX6Mrkw.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./index-CnrsCr2B.js";import"./useEventCallback-CHZTTgQU.js";import"./SkeletonBar-Dkqc5Z-q.js";import"./LoadingCell-BhCbvDmF.js";import"./ColumnConfigDialog-CNuDIn_d.js";import"./DraggableList-C12I1HeH.js";import"./search-CsmvFGw5.js";import"./Input-BPNZHdpC.js";import"./useControlled-BjeqQkUk.js";import"./Button-Ca04rN16.js";import"./small-cross-D42sc0mE.js";import"./ActionButton-D564RM3o.js";import"./Checkbox-e6WyMAnA.js";import"./useValueChanged-BBJPtzLX.js";import"./CollapsiblePanel-Bny2eGkF.js";import"./MultiColumnSortDialog-5oW-7TXc.js";import"./MenuTrigger-BmNzF-3q.js";import"./CompositeItem-DMwkjAkb.js";import"./ToolbarRootContext-rYStqux1.js";import"./getDisabledMountTransitionStyles-ClgRaisB.js";import"./getPseudoElementBounds-CWn3civw.js";import"./chevron-down-B-w_aZMu.js";import"./index-dC_pSdIW.js";import"./error-1veqZu6X.js";import"./BaseCbacBanner-BuuVYiPd.js";import"./makeExternalStore-B0EaqGDc.js";import"./Tooltip-DJljNE8z.js";import"./PopoverPopup-DGBwl_YH.js";import"./debounce-D2BrHLFh.js";import"./useOsdkClient-BtLJAOm0.js";import"./tick-CoDkmvvi.js";import"./DropdownField-CbJ9aycC.js";import"./isEqual-HlCgqCCT.js";import"./withOsdkMetrics-5OCT_Jru.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
