import{f as p,j as e}from"./iframe-Chm34oVN.js";import{O as i}from"./object-table-DLH-IlCC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOK6Dzo-.js";import"./Table-Z_YlzvhM.js";import"./index-CypedJkd.js";import"./Dialog-B2wjSRNU.js";import"./cross-DoHdapX8.js";import"./svgIconContainer-DC37vkSl.js";import"./useBaseUiId-BfNds6QM.js";import"./InternalBackdrop-Cm6PR78x.js";import"./composite-7460sgXR.js";import"./index-COQyuwtf.js";import"./index-CUU4KiqC.js";import"./index-B57JJe68.js";import"./useEventCallback-CMTqZ7U-.js";import"./SkeletonBar-CU8fYuS7.js";import"./LoadingCell-BO3KKJp9.js";import"./ColumnConfigDialog-dEtYIgcd.js";import"./DraggableList-CzcIVFL1.js";import"./search-BHYw-t4y.js";import"./Input-DZjL7Pin.js";import"./useControlled-ZXPTCd_T.js";import"./Button-CtcVqQNq.js";import"./small-cross-ByxAk5Ey.js";import"./ActionButton-BnvQSX1L.js";import"./Checkbox-CwbP-fJg.js";import"./useValueChanged-UjzGqVwC.js";import"./CollapsiblePanel-DQDBFvxE.js";import"./MultiColumnSortDialog-DOycdkre.js";import"./MenuTrigger-CoVY6-8A.js";import"./CompositeItem-DnyMtLMv.js";import"./ToolbarRootContext-OjMSVEL3.js";import"./getDisabledMountTransitionStyles-CIU0Hz6V.js";import"./getPseudoElementBounds-CiNXNTFC.js";import"./chevron-down-zW3En9pY.js";import"./index-DxO1uITv.js";import"./error-B18D31eI.js";import"./BaseCbacBanner-CLHS5zkZ.js";import"./makeExternalStore-B83DbUt5.js";import"./Tooltip-DDNENBtX.js";import"./PopoverPopup-CItQzQdy.js";import"./debounce-CFIeXkJ1.js";import"./useOsdkClient-W7CUWIOG.js";import"./tick-Cfjw9luN.js";import"./DropdownField-DB-krMlw.js";import"./isEqual-hrbqThCV.js";import"./withOsdkMetrics-866m-zhW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
