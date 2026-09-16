import{f as p,j as e}from"./iframe-xdaTYGRj.js";import{O as i}from"./object-table-CXau66t4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZUDwwCn.js";import"./Table-DQJKa7S1.js";import"./index-BdPDvpnl.js";import"./Dialog-Dusk4zGf.js";import"./cross-CSoA2ZQa.js";import"./svgIconContainer-exvQzp4T.js";import"./useBaseUiId-CxUh_Q__.js";import"./InternalBackdrop-POEzz6gH.js";import"./composite-BBMq-zQx.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./index-BvtF8lSO.js";import"./useEventCallback-BzvhssYV.js";import"./SkeletonBar-B8t_W87W.js";import"./LoadingCell-C1DmdKaJ.js";import"./ColumnConfigDialog-OpKrZQ53.js";import"./DraggableList-ZBGvnIzB.js";import"./search-Ba1wUlyN.js";import"./Input-CVYxdw6a.js";import"./useControlled-BvC-sVWY.js";import"./Button-DhIcXnSN.js";import"./small-cross-BW9BpdHj.js";import"./ActionButton-asvmdyUj.js";import"./Checkbox-BcViMRef.js";import"./useValueChanged-Ch5z-mkh.js";import"./CollapsiblePanel-ClYrkXoI.js";import"./MultiColumnSortDialog-DhoBGIBc.js";import"./MenuTrigger-C_lNo9IA.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./getDisabledMountTransitionStyles-B16LXGKh.js";import"./getPseudoElementBounds-Dy-Bisec.js";import"./chevron-down-aagd7exO.js";import"./index-CUVjcwyy.js";import"./error-CApwHpph.js";import"./BaseCbacBanner-CceQ-h3H.js";import"./makeExternalStore-DYC4j6Cy.js";import"./Tooltip-CW0n3yWY.js";import"./PopoverPopup-BKjDaV96.js";import"./debounce-DBf5uZYv.js";import"./useOsdkClient-CrpVNgyy.js";import"./tick-C88F2OoG.js";import"./DropdownField-C6ZSBKPJ.js";import"./isEqual-DJka3NIw.js";import"./withOsdkMetrics-D5YFfTwH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
