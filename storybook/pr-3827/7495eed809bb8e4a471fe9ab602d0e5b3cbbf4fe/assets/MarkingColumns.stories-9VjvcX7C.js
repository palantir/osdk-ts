import{f as p,j as e}from"./iframe-_z3jDROO.js";import{O as i}from"./object-table-DgJqHMWn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp-TKz0z.js";import"./Table-BQ2ymhm1.js";import"./index-Q8EEyY0v.js";import"./Dialog-C2fl4M1v.js";import"./cross-D6Si-XhJ.js";import"./svgIconContainer-B7vtt4qG.js";import"./useBaseUiId-kiHD9n4O.js";import"./InternalBackdrop-CTq-483m.js";import"./composite-C0nd1t90.js";import"./index-DD50tvSO.js";import"./index-BunQhVyv.js";import"./index-Df7tufwq.js";import"./useEventCallback-B6QkgUyp.js";import"./SkeletonBar-CaokAZBs.js";import"./LoadingCell-Cac1cdLc.js";import"./ColumnConfigDialog-B6F30hN8.js";import"./DraggableList-DilBMzIC.js";import"./search-BaaSJoub.js";import"./Input-dTB1h5Gz.js";import"./useControlled-jrF362GW.js";import"./isEqual-Dys6_89E.js";import"./isObject-DECzZNaF.js";import"./Button-BM6D-CE6.js";import"./ActionButton-BFy74EOV.js";import"./Checkbox-Bw0S4q5H.js";import"./useValueChanged-CVJcad2L.js";import"./CollapsiblePanel-CCr6fiwE.js";import"./MultiColumnSortDialog-B7Gfn13C.js";import"./MenuTrigger-BCOBhzIQ.js";import"./CompositeItem-C1yClhJ6.js";import"./ToolbarRootContext-ClX35K5_.js";import"./getDisabledMountTransitionStyles-i99itILM.js";import"./getPseudoElementBounds-PgK5udBn.js";import"./chevron-down-DKrfrKEw.js";import"./index-B39ZDa_b.js";import"./error-CHbuT9qj.js";import"./BaseCbacBanner-w5DUGluQ.js";import"./makeExternalStore-Zu8KmZY0.js";import"./Tooltip-BZZ1ZjWO.js";import"./PopoverPopup-CN4czWCI.js";import"./toNumber-BsV4f3nC.js";import"./useOsdkClient-Di9178CQ.js";import"./tick-D1SNio7c.js";import"./DropdownField-DhaGXRA9.js";import"./withOsdkMetrics-BH6dSoSr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
