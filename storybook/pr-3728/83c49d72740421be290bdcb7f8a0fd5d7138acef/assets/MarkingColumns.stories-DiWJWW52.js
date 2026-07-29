import{f as p,j as e}from"./iframe-CefCqiaR.js";import{O as i}from"./object-table-gprT9RkQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbZ5zaD4.js";import"./Table-C6gMDc6L.js";import"./index-CPwptoLW.js";import"./Dialog-C8mO20YV.js";import"./cross-DzRvqWD9.js";import"./svgIconContainer-BWT0TxKV.js";import"./useBaseUiId--cf_zvwI.js";import"./InternalBackdrop-CVbRe8ZL.js";import"./composite-CaFtD7Fw.js";import"./index-DxmvKgU9.js";import"./index-BmTM_Qdn.js";import"./index-BWoHkZsH.js";import"./useEventCallback-CS6IVnDj.js";import"./SkeletonBar-f8q5PgR6.js";import"./LoadingCell-BSttXPoD.js";import"./ColumnConfigDialog-BH2a-dky.js";import"./DraggableList-vt9LKe14.js";import"./search-B0y7ohsg.js";import"./Input-CnwwjYHv.js";import"./useControlled-CYAavFS_.js";import"./isEqual-nH68Z9vl.js";import"./isObject-DQTzxQp2.js";import"./Button-CqMZznRG.js";import"./ActionButton-BH0FOLIi.js";import"./Checkbox-BlC5LYyg.js";import"./useValueChanged-D4lFr8O4.js";import"./CollapsiblePanel-CU6t_mPq.js";import"./MultiColumnSortDialog-B2J-A3w9.js";import"./MenuTrigger-DN0OCTdw.js";import"./CompositeItem-BcGhlmFP.js";import"./ToolbarRootContext-6o4iFsuQ.js";import"./getDisabledMountTransitionStyles-DYizUzd4.js";import"./getPseudoElementBounds-CVyVO42X.js";import"./chevron-down-vR75fc7-.js";import"./index-iDkTeg2b.js";import"./error-CxYINkuo.js";import"./BaseCbacBanner-K6At_QPg.js";import"./makeExternalStore-B-ZoqTkF.js";import"./Tooltip-CMiaCw6h.js";import"./PopoverPopup-CeQgrykH.js";import"./toNumber-CtBQUMIY.js";import"./useOsdkClient-BR5vq1eS.js";import"./tick-CAlPZiiJ.js";import"./DropdownField-Bw_p9vrZ.js";import"./withOsdkMetrics-9UynMHiU.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
