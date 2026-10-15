import{f as p,j as e}from"./iframe-wexfgXTt.js";import{O as i}from"./object-table-CFybmj8k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C9v061-q.js";import"./index-5jQIelx0.js";import"./Dialog-BQZf2JRs.js";import"./cross-FTqBbSE_.js";import"./svgIconContainer-BE9D8hDG.js";import"./useBaseUiId-tTVgJH6a.js";import"./InternalBackdrop-CDWG4aG1.js";import"./composite-CdBx6VEN.js";import"./index-BurzpHQL.js";import"./index-TxpmNhC2.js";import"./index-DOxlq5kL.js";import"./useEventCallback-CcaR15TA.js";import"./SkeletonBar-DJLe3kJ-.js";import"./LoadingCell-DAJAPapT.js";import"./ColumnConfigDialog-L08jlpQ_.js";import"./DraggableList-Ccq_tIpn.js";import"./search-XEMgs_jY.js";import"./Input-CWdLE-mu.js";import"./useControlled-Brxeqh9t.js";import"./Button-ChxS4llL.js";import"./small-cross-DboWXgDg.js";import"./ActionButton-VgKWBxX4.js";import"./Checkbox-DrBlztvV.js";import"./useValueChanged-Fh4Y4yhu.js";import"./CollapsiblePanel-OJ6hTRI8.js";import"./MultiColumnSortDialog-U-Q4J8yu.js";import"./MenuTrigger-B80w7aFS.js";import"./CompositeItem-vT5UWhUx.js";import"./ToolbarRootContext-Co9O2tJK.js";import"./getDisabledMountTransitionStyles-oJIOUneY.js";import"./getPseudoElementBounds-CwltS7Dj.js";import"./chevron-down-D1BLGLwp.js";import"./index-KggX9Fax.js";import"./error-B2QY0TvC.js";import"./BaseCbacBanner-CeE6PuNF.js";import"./makeExternalStore-CYRdbRiy.js";import"./Tooltip-Dm1DzSzF.js";import"./PopoverPopup-B0NfuOs8.js";import"./debounce-ZweGI_tC.js";import"./useOsdkClient-CEoThPb2.js";import"./tick-D1NWQC9V.js";import"./DropdownField-Cv81jICY.js";import"./isEqual-BLiyP4A_.js";import"./withOsdkMetrics-C9edCeaC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
