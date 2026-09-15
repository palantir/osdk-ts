import{f as p,j as e}from"./iframe-DUDgTVFJ.js";import{O as i}from"./object-table-DyoOaMNB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BVnI7eCi.js";import"./Table-DJgEpKA7.js";import"./index-BmzW3lpk.js";import"./Dialog-NEcdClbd.js";import"./cross-BTajFNgg.js";import"./svgIconContainer-ZlCTpn06.js";import"./useBaseUiId-HT4h8TUv.js";import"./InternalBackdrop-orJ-1rnF.js";import"./composite-CECNeh7S.js";import"./index-BvrArIP3.js";import"./index-CRuY3Py7.js";import"./index-5E34Oclp.js";import"./useEventCallback-RvE4_tE9.js";import"./SkeletonBar-BmHP5YBu.js";import"./LoadingCell-BDDtdYeF.js";import"./ColumnConfigDialog-ChYt04UQ.js";import"./DraggableList-C1sNICyS.js";import"./search-Bwn6tzKV.js";import"./Input-BDNTdkOr.js";import"./useControlled-CmefEzCZ.js";import"./Button-CYnqWeJV.js";import"./small-cross-C1-JOpz-.js";import"./ActionButton-Cm6sCZem.js";import"./Checkbox-B3XNkDYw.js";import"./useValueChanged-0LeWa10K.js";import"./CollapsiblePanel-U3s49rkR.js";import"./MultiColumnSortDialog-DZ3aR6O1.js";import"./MenuTrigger-CP-hOUMN.js";import"./CompositeItem-DvLeoEHv.js";import"./ToolbarRootContext-DjTtqRzV.js";import"./getDisabledMountTransitionStyles-PDb0y-1q.js";import"./getPseudoElementBounds-BcqNmoHZ.js";import"./chevron-down-uyo8SlXE.js";import"./index-C5bsaNnW.js";import"./error-BKqtxFEE.js";import"./BaseCbacBanner-ukxOelGX.js";import"./makeExternalStore-Dj0x5GDa.js";import"./Tooltip-DHx44fzb.js";import"./PopoverPopup-DYDRvlYs.js";import"./debounce-BtF1TExq.js";import"./useOsdkClient-CjQ9m3w5.js";import"./tick-DynTPC9F.js";import"./DropdownField-C0q1F6hz.js";import"./isEqual-Bq2QWyT2.js";import"./withOsdkMetrics-BxFc9ce-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
