import{f as p,j as e}from"./iframe-B7BuLFiB.js";import{O as i}from"./object-table-BdJFYC6r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QLvxqcYm.js";import"./Table-CG9FECAd.js";import"./index-DX9kLxYV.js";import"./Dialog-D0VMHAuM.js";import"./cross-MuA-PJqQ.js";import"./svgIconContainer-CeTYDBJc.js";import"./useBaseUiId-DGtSh3tx.js";import"./InternalBackdrop-S6ToeWiE.js";import"./composite-BgM6qzfH.js";import"./index-C-D0HXuy.js";import"./index-yPQ50wIw.js";import"./index-Bl6JFfFg.js";import"./useEventCallback-DqHq7xQA.js";import"./SkeletonBar-DCOs-m_E.js";import"./LoadingCell-BFPiOHIX.js";import"./ColumnConfigDialog--fuh7-Zw.js";import"./DraggableList-Z2iXNaNk.js";import"./search-DkIDRVCE.js";import"./Input-BWeaR93e.js";import"./useControlled-o41jjuGU.js";import"./isEqual-Bfeyaww4.js";import"./isObject-gYLe_8iC.js";import"./Button-Bi6KGg8Q.js";import"./ActionButton-DbdfUvrp.js";import"./Checkbox-CCQs_fPo.js";import"./useValueChanged-SYgJfDFB.js";import"./CollapsiblePanel-DfVBUEh5.js";import"./MultiColumnSortDialog-BEohunJJ.js";import"./MenuTrigger-CATqDpCy.js";import"./CompositeItem-Dbzwk1gQ.js";import"./ToolbarRootContext-B_UViE6P.js";import"./getDisabledMountTransitionStyles-CN_eJQFG.js";import"./getPseudoElementBounds-q-JNZLO4.js";import"./chevron-down--mwsi3L9.js";import"./index-6UAs54zO.js";import"./error-PJbSWXrD.js";import"./BaseCbacBanner-CJIqzZ3F.js";import"./makeExternalStore-Cn4EfxAL.js";import"./Tooltip-CR3iIqg2.js";import"./PopoverPopup-Cmh7-q5k.js";import"./toNumber-SXtvtwgI.js";import"./useOsdkClient-u-hSR58p.js";import"./tick-Cpg-N9k1.js";import"./DropdownField-oTCVHpkW.js";import"./withOsdkMetrics-Clj4ukky.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
