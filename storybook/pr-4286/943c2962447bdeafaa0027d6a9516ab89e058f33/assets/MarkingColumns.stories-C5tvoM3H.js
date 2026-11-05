import{f as p,j as e}from"./iframe-BryHz5Df.js";import{O as i}from"./object-table-DhddezCq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZuG0aKTk.js";import"./Table-vbVKhRUZ.js";import"./index-iPKk9s3t.js";import"./Dialog-BBiaGDsk.js";import"./cross-ailj0yO2.js";import"./svgIconContainer-Bz8FzOTG.js";import"./useBaseUiId-lqu4HseA.js";import"./InternalBackdrop-BTDJowUB.js";import"./composite-BowJ7EVh.js";import"./index-DLszwrmC.js";import"./index-B23Jlpe-.js";import"./index-kHo4L0CJ.js";import"./useEventCallback-DNvqpEEj.js";import"./SkeletonBar-DbgbyCHj.js";import"./LoadingCell-nGP3YWSE.js";import"./ColumnConfigDialog-BO7h_Et0.js";import"./DraggableList-BiU9-PR1.js";import"./search-BMoYocFy.js";import"./Input-BJM0PLwp.js";import"./useControlled-CylTdVLs.js";import"./Button-C6Ze9Rf1.js";import"./small-cross-D3D35N0o.js";import"./ActionButton-BjzGaC9X.js";import"./Checkbox-4gp7fYlY.js";import"./useValueChanged-D5dYuYpQ.js";import"./CollapsiblePanel-s1GFKw9E.js";import"./MultiColumnSortDialog-DQsMxgaG.js";import"./MenuTrigger-Ciw0TFjQ.js";import"./CompositeItem-CUgXhRoj.js";import"./ToolbarRootContext-BjHx285v.js";import"./getDisabledMountTransitionStyles-Jl9aUEz_.js";import"./getPseudoElementBounds-uG2bpqSg.js";import"./chevron-down-DjbeKg79.js";import"./index-BK-BH_Yo.js";import"./error-CL2fTgGo.js";import"./BaseCbacBanner-KtikxSJ6.js";import"./makeExternalStore-CxnQMREG.js";import"./Tooltip-DXaG_Vux.js";import"./isObject-V0EIbVdK.js";import"./debounce-CjDJ8-42.js";import"./useOsdkClient-BoBqYHPA.js";import"./tick-Bz5bWrj2.js";import"./DropdownField-DwnJVj62.js";import"./isEqual-CorpkB5K.js";import"./_baseIsEqual-DNo1_TAY.js";import"./withOsdkMetrics-Dmyjllfi.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
