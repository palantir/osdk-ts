import{f as p,j as e}from"./iframe-BrG6cQfS.js";import{O as i}from"./object-table-ins_eC8g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bixkw_YY.js";import"./Table-CgOUWwSB.js";import"./index-BEzPF5rE.js";import"./Dialog-DFhocNiZ.js";import"./cross-DGQ_41Ww.js";import"./svgIconContainer-c7VzC2a1.js";import"./useBaseUiId-DamEe__I.js";import"./InternalBackdrop-C3iNMrIw.js";import"./composite-DHs3_um3.js";import"./index-R1lV5gJE.js";import"./index-GtEOCerY.js";import"./index-CnlkPWeq.js";import"./useEventCallback-BDu00IHC.js";import"./SkeletonBar-Bi5v0pgW.js";import"./LoadingCell-D-HPaQza.js";import"./ColumnConfigDialog-DoZj9VAj.js";import"./DraggableList-BwndBBDN.js";import"./search-jgXrXlZs.js";import"./Input-Dpso9xg2.js";import"./useControlled-CblOQAp9.js";import"./Button-DICz1J-P.js";import"./small-cross-ZjdxMb2P.js";import"./ActionButton-BZZYP6V2.js";import"./Checkbox-DJZEHWvF.js";import"./useValueChanged-CwLQb5A1.js";import"./CollapsiblePanel-DjI8FHot.js";import"./MultiColumnSortDialog-wEtgATb9.js";import"./MenuTrigger-4nCp8LZS.js";import"./CompositeItem-Dezopk9M.js";import"./ToolbarRootContext-C-eO9sv2.js";import"./getDisabledMountTransitionStyles-Bw2gn-S1.js";import"./getPseudoElementBounds-DIijxXuL.js";import"./chevron-down-B0I-pL1F.js";import"./index-B-kArG0q.js";import"./error-DOpFGD8C.js";import"./BaseCbacBanner-XaY-ha82.js";import"./makeExternalStore-DqEFEqtD.js";import"./Tooltip-C_nWVRfI.js";import"./PopoverPopup-DnIX79DU.js";import"./debounce-CR0MYlUB.js";import"./useOsdkClient-CoqhAt_a.js";import"./tick-4TnK2SFg.js";import"./DropdownField-DjQ0AkRs.js";import"./isEqual-DjuLte7N.js";import"./withOsdkMetrics-Dsha6ge2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
