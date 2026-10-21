import{f as p,j as e}from"./iframe-Crrq_V9a.js";import{O as i}from"./object-table-B8hROw69.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0KSNMSf.js";import"./Table-C-XUy--Q.js";import"./index-BUK6uge5.js";import"./Dialog-DtUfF62j.js";import"./cross-BfUth1rr.js";import"./svgIconContainer-CBsIZ9u2.js";import"./useBaseUiId-G0RhfiSE.js";import"./InternalBackdrop-Cb-39vNM.js";import"./composite-DFN7AbeA.js";import"./index-LdB11F_t.js";import"./index-BhOk5BKE.js";import"./index-dPrJwc88.js";import"./useEventCallback-DZL9KXuR.js";import"./SkeletonBar-B0oezpwK.js";import"./LoadingCell-47RrJ7Ze.js";import"./ColumnConfigDialog-wR9Noxr_.js";import"./DraggableList-BKs_pyIm.js";import"./search-UIxXkiNx.js";import"./Input-BB-wuDqG.js";import"./useControlled-7_WCnHC_.js";import"./Button-rjMzAizh.js";import"./small-cross-2Itdgd_Q.js";import"./ActionButton-B7zHu77T.js";import"./Checkbox-D8a0dNg0.js";import"./useValueChanged-Mq4YQWWw.js";import"./CollapsiblePanel-DMABQszi.js";import"./MultiColumnSortDialog-D0s8qdtH.js";import"./MenuTrigger-rBTOT85u.js";import"./CompositeItem-COkq6uGE.js";import"./ToolbarRootContext-UM565H_l.js";import"./getDisabledMountTransitionStyles-DsVgkYmN.js";import"./getPseudoElementBounds-BJj-LpqP.js";import"./chevron-down-33yPdK7L.js";import"./index-iPpy1sZ4.js";import"./error-FZelDdZI.js";import"./BaseCbacBanner-BWeKp-nV.js";import"./makeExternalStore-DqEHGNcf.js";import"./Tooltip-CmGtxQmE.js";import"./PopoverPopup-CBuM0R4V.js";import"./debounce-BqrQQHrt.js";import"./useOsdkClient-CQzSF8cZ.js";import"./tick-C-BN17pt.js";import"./DropdownField-CvoKEn-m.js";import"./isEqual-BdNG0-Zn.js";import"./withOsdkMetrics-BUiVXfiJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
