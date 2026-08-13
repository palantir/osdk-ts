import{f as p,j as e}from"./iframe-D9x1t_vp.js";import{O as i}from"./object-table-Cd9VFz_z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-G-W5TAZO.js";import"./Table-D-dmi1MD.js";import"./index-DkawwfeN.js";import"./Dialog-BLyxmt60.js";import"./cross-B-D0ldT_.js";import"./svgIconContainer-GJo4FLSZ.js";import"./useBaseUiId-BXGjoli7.js";import"./InternalBackdrop-C5Ik5Fts.js";import"./composite-DbEdsmcW.js";import"./index-CDz91Otv.js";import"./index-DvF6dXob.js";import"./index-B5v3ZKm8.js";import"./useEventCallback-krj6U4d7.js";import"./SkeletonBar-CP1BDtVG.js";import"./LoadingCell-B4rVMJ4V.js";import"./ColumnConfigDialog-C4Zysgf-.js";import"./DraggableList-CSUV0r3I.js";import"./search-C5Hx3O16.js";import"./Input-BURRu-rg.js";import"./useControlled-B_3qzWS0.js";import"./Button-Dn0Wamri.js";import"./small-cross-sMMaN9EK.js";import"./ActionButton-C1dVj4zE.js";import"./Checkbox-LmMfFJQa.js";import"./useValueChanged-DpwRfbwV.js";import"./CollapsiblePanel-DYQ1sJgE.js";import"./MultiColumnSortDialog-CWdW0w0p.js";import"./MenuTrigger-23dZsPJo.js";import"./CompositeItem-DbzCphWS.js";import"./ToolbarRootContext-CB_Eo7a2.js";import"./getDisabledMountTransitionStyles-C_9Bw_r_.js";import"./getPseudoElementBounds-ZlfF0Rjy.js";import"./chevron-down-BPV9QsLo.js";import"./index-BuAwYtSM.js";import"./error-BA6zdh3z.js";import"./BaseCbacBanner-C9zQ2cua.js";import"./makeExternalStore-DFF9EkpS.js";import"./Tooltip-CsqLoml-.js";import"./PopoverPopup-BLCb0pYf.js";import"./debounce-CBcbM-BZ.js";import"./useOsdkClient-D8vUR2ip.js";import"./tick-Ct0EC7-q.js";import"./DropdownField-DLdDRCMy.js";import"./isEqual-D71CH4xY.js";import"./withOsdkMetrics-C_ks6dJ2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
