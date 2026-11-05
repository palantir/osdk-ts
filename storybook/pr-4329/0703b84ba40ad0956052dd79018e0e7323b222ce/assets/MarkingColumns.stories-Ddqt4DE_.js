import{f as p,j as e}from"./iframe-C0wU5abY.js";import{O as i}from"./object-table-Dhvjm-ye.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBF01-cG.js";import"./Table-Cs4nAklZ.js";import"./index-BLQzpxSF.js";import"./Dialog-H4eq0_bB.js";import"./cross-DjbVostP.js";import"./svgIconContainer-CMAKke71.js";import"./useBaseUiId-D1MC7GbA.js";import"./InternalBackdrop-BXvP6ib-.js";import"./composite-BoBrXPGo.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./index-BwUmCcfv.js";import"./useEventCallback-eLcMhxZ3.js";import"./SkeletonBar-DtDAen1t.js";import"./LoadingCell-BwjVkPe8.js";import"./ColumnConfigDialog-Dkky9xjY.js";import"./DraggableList-BWlSR2rj.js";import"./search-Kac11RBU.js";import"./Input-CuYpucpk.js";import"./useControlled-jkUj0hrw.js";import"./Button-w-E8GgnT.js";import"./small-cross-Bvw5RS_6.js";import"./ActionButton-V_luHs6O.js";import"./Checkbox-CdSA0-13.js";import"./useValueChanged-1ACDE08l.js";import"./CollapsiblePanel-C7mj3pNQ.js";import"./MultiColumnSortDialog-CfkjEdsm.js";import"./MenuTrigger-DbXogBZY.js";import"./CompositeItem-Bqkqz40D.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./getDisabledMountTransitionStyles-JrYbFoOK.js";import"./getPseudoElementBounds-DzWEJrnK.js";import"./chevron-down-BwqCCX_Z.js";import"./index-BPOkQniY.js";import"./error-B8Sv0Q4K.js";import"./BaseCbacBanner-D6FwOIx9.js";import"./makeExternalStore-DkrbDLqh.js";import"./Tooltip-BFq4U8nM.js";import"./isObject-D89gReL0.js";import"./debounce-_3Ys135D.js";import"./useOsdkClient-pdCcjq0j.js";import"./tick-Cow3RRx-.js";import"./DropdownField-CDiu5HIy.js";import"./isEqual-BuhfY4F8.js";import"./_baseIsEqual-u28xBK7e.js";import"./withOsdkMetrics-CY3k4xQQ.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
