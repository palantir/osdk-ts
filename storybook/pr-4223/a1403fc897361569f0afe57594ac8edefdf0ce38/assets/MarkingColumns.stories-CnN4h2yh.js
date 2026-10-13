import{f as p,j as e}from"./iframe-BkcR1iue.js";import{O as i}from"./object-table-BcUcdCDw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrQC6sAs.js";import"./Table-BAjYpOyb.js";import"./index-C48hokBn.js";import"./Dialog-BOX_hYeF.js";import"./cross-Dq5JHURf.js";import"./svgIconContainer-5EXbYaZG.js";import"./useBaseUiId-CMez3yYq.js";import"./InternalBackdrop-BrNgLYU2.js";import"./composite-BvN8B2j0.js";import"./index-BcdwcPhB.js";import"./index-B7w41dnZ.js";import"./index-BKyA0SCA.js";import"./useEventCallback-D_30EqT4.js";import"./SkeletonBar-BKmKsv8M.js";import"./LoadingCell-Ds-wFaWb.js";import"./ColumnConfigDialog-BAHtvu7w.js";import"./DraggableList-ByXDWqnG.js";import"./search--B6bPp9Q.js";import"./Input-7EUJZBSZ.js";import"./useControlled-DQuU9HTi.js";import"./Button-B40tdNrN.js";import"./small-cross-BP75-g7J.js";import"./ActionButton-CX5WcJy8.js";import"./Checkbox-Vz2qtBJd.js";import"./useValueChanged-tSsYdvqu.js";import"./CollapsiblePanel-BpfLB0ao.js";import"./MultiColumnSortDialog-BSR3YyAt.js";import"./MenuTrigger-DWJBs6c7.js";import"./CompositeItem-D6GgTBoR.js";import"./ToolbarRootContext--E-pClz6.js";import"./getDisabledMountTransitionStyles-hWWFi-qA.js";import"./getPseudoElementBounds-C9SU6CHl.js";import"./chevron-down-B8DDqxwj.js";import"./index-oeK8lm2i.js";import"./error-Dqr8KpcY.js";import"./BaseCbacBanner-CkxMaWmX.js";import"./makeExternalStore-DjRLK8zO.js";import"./Tooltip-C95BVVCQ.js";import"./PopoverPopup-BAQ5vkX7.js";import"./debounce-BR3HCMrO.js";import"./useOsdkClient-BE9XndJ0.js";import"./tick-qW1a1XW7.js";import"./DropdownField-Ddw27l5N.js";import"./isEqual-CEFtvlzz.js";import"./withOsdkMetrics-DHpidme4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
