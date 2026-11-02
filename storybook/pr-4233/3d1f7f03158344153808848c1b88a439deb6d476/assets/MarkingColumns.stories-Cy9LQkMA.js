import{f as p,j as e}from"./iframe-BCqrjcZp.js";import{O as i}from"./object-table-C_GnPGDg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-IP6Q7Lp8.js";import"./Table-C1ZLuF4G.js";import"./index-D0jlJMeY.js";import"./Dialog-CViBcxvF.js";import"./cross-B5B9w1fn.js";import"./svgIconContainer-DwsnB4Bh.js";import"./useBaseUiId-BHV9sQZt.js";import"./InternalBackdrop-CTTwd3gc.js";import"./composite-D7-rpd9b.js";import"./index-CI0KRk9Y.js";import"./index-i3vQjJLM.js";import"./index-DXLbvv5i.js";import"./useEventCallback-CVpAOZ4R.js";import"./SkeletonBar-DCUOzX1s.js";import"./LoadingCell-CJKgeEY6.js";import"./ColumnConfigDialog-5BjgoD7j.js";import"./DraggableList-ghEwlwg0.js";import"./search-uqqKBKCA.js";import"./Input-CuKouNDL.js";import"./useControlled-Bzb-P5Sw.js";import"./Button-u7PTjF0v.js";import"./small-cross-uBxq7RBA.js";import"./ActionButton-BeKm1dws.js";import"./Checkbox--_dd5ccs.js";import"./useValueChanged-Xw3hkMdy.js";import"./CollapsiblePanel-jE2vmdzP.js";import"./MultiColumnSortDialog-DVas1kCG.js";import"./MenuTrigger-C0DYfKbf.js";import"./CompositeItem-CI0_kgLB.js";import"./ToolbarRootContext-gONCPNww.js";import"./getDisabledMountTransitionStyles-fk6vko0H.js";import"./getPseudoElementBounds-BFSuywVY.js";import"./chevron-down-ClwDZxr-.js";import"./index-C-VgWq2f.js";import"./error--BdktMRw.js";import"./BaseCbacBanner-C-Bmu30y.js";import"./makeExternalStore-IQ_ZHFEU.js";import"./Tooltip-BZ1-8qFM.js";import"./PopoverPopup-lQJBNDjd.js";import"./debounce-KOiwrhH1.js";import"./useOsdkClient-DPRWmwVD.js";import"./tick-Mmlb1_fs.js";import"./DropdownField-DR9iVX7L.js";import"./isEqual-Bdex3d6x.js";import"./withOsdkMetrics-C5LHIkEx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
