import{f as p,j as e}from"./iframe-COjTwACd.js";import{O as i}from"./object-table-ad3I6vNt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3zoUuQg3.js";import"./Table-DzY3O7qR.js";import"./index-BYBN_pM5.js";import"./Dialog-enusm8Xl.js";import"./cross-hWU4qN2Y.js";import"./svgIconContainer-DB8O-WH_.js";import"./useBaseUiId-BHJRkAYu.js";import"./InternalBackdrop-C8gZnl-V.js";import"./composite-Dw_TPpFp.js";import"./index-Cggo2yFx.js";import"./index-DpYQBSKi.js";import"./index-CRX31u9Z.js";import"./useEventCallback-CfXfPHvG.js";import"./SkeletonBar-gcXj0eg1.js";import"./LoadingCell-BwbzNNbx.js";import"./ColumnConfigDialog-C-TJFZJf.js";import"./DraggableList-DjLi1ogf.js";import"./search-DODDfQXo.js";import"./Input-BDTIJBOH.js";import"./useControlled-Dm0Jzoa7.js";import"./isEqual-0odBgQKO.js";import"./isObject-qUmzueCJ.js";import"./Button-DKrxgkIM.js";import"./ActionButton-Cn4l8VKx.js";import"./Checkbox-kb0Y2AkR.js";import"./useValueChanged-DImedWVh.js";import"./CollapsiblePanel-Bq6cIAYo.js";import"./MultiColumnSortDialog-dr38wXKF.js";import"./MenuTrigger-3iGgKsct.js";import"./CompositeItem-BMvAHYYR.js";import"./ToolbarRootContext-BS68jFk4.js";import"./getDisabledMountTransitionStyles-Bg0FVveg.js";import"./getPseudoElementBounds-BvZhrghV.js";import"./chevron-down-39gHaxC5.js";import"./index-Bt5nnrw-.js";import"./error-CY-30sSF.js";import"./BaseCbacBanner-ak4NXG6S.js";import"./makeExternalStore-DW8okzVM.js";import"./Tooltip-CFj_9NEW.js";import"./PopoverPopup-vk-66Q-a.js";import"./toNumber-BsyqgQYw.js";import"./useOsdkClient-B8zsgjem.js";import"./tick-GyyYcMwP.js";import"./DropdownField-DnjYW3ti.js";import"./withOsdkMetrics-BuKYfzIS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
