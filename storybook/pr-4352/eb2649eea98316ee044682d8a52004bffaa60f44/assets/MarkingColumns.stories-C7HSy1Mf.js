import{f as p,j as e}from"./iframe-cQ3f48MB.js";import{O as i}from"./object-table-CycBgw2h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6QOSXh4.js";import"./Table-DEKDqocf.js";import"./index-D1RuRedd.js";import"./Dialog-2_OY6EqA.js";import"./cross-DauAavmu.js";import"./svgIconContainer-CgizML4Q.js";import"./useBaseUiId-CMNXwzlb.js";import"./InternalBackdrop-DuDjQ0BZ.js";import"./composite-B6VOm6ZQ.js";import"./index-MlmEIZWp.js";import"./index-C8RTiPbx.js";import"./index-Bs-Z1Jgq.js";import"./useEventCallback-Y2QBMo-H.js";import"./SkeletonBar-D4mUM1vS.js";import"./LoadingCell-DNvez4my.js";import"./ColumnConfigDialog-BUoGlIi-.js";import"./DraggableList-DjVBxeH3.js";import"./search-iHipGmJb.js";import"./Input-BuFeTP1U.js";import"./useControlled-ByZlI-u7.js";import"./Button-DZgLeZFj.js";import"./small-cross-BObFe73S.js";import"./ActionButton-k9CcFnZX.js";import"./Checkbox-CpTiMr31.js";import"./useValueChanged-BQFlsv8-.js";import"./CollapsiblePanel-BS0BxhJu.js";import"./MultiColumnSortDialog-JnW_yKzW.js";import"./MenuTrigger-BzoDHwuv.js";import"./CompositeItem-684cCOtj.js";import"./ToolbarRootContext-DNEaNwHU.js";import"./getDisabledMountTransitionStyles-Bg1kr4yU.js";import"./getPseudoElementBounds-DKU8Ia-1.js";import"./chevron-down-CIrisS0y.js";import"./index-C-MPwgvx.js";import"./error-CsayxGJU.js";import"./BaseCbacBanner-Cfhd9GNF.js";import"./makeExternalStore-DtAasX45.js";import"./Tooltip-DsHuisIK.js";import"./isObject-saTum3J5.js";import"./debounce-Dl9ssa6I.js";import"./useOsdkClient-CamUyQ2y.js";import"./tick-nlg_x8OU.js";import"./DropdownField-CLQWIPME.js";import"./isEqual-C7bvgrWO.js";import"./_baseIsEqual-BGW9PiVU.js";import"./withOsdkMetrics-D1uLGy1n.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
