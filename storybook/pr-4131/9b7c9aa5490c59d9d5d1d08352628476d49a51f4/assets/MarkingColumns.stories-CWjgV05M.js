import{f as p,j as e}from"./iframe-D555MuJ0.js";import{O as i}from"./object-table-C02Hy59p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DI0YqJp4.js";import"./Table-BtXxIuTu.js";import"./index-Cg9uHUun.js";import"./Dialog-DAOQ-pdw.js";import"./cross-IYmx4x0m.js";import"./svgIconContainer-bAOTCoFN.js";import"./useBaseUiId-B4R9GsGS.js";import"./InternalBackdrop-D0WzfKwV.js";import"./composite-C3jNveZb.js";import"./index-CkTsdOkp.js";import"./index-BVyJBQqR.js";import"./index-BOqKZcef.js";import"./useEventCallback-C_68HPnA.js";import"./SkeletonBar-CDnvbMD_.js";import"./LoadingCell-ZbJVUXNh.js";import"./ColumnConfigDialog-DgJJ0HXo.js";import"./DraggableList-CpUYUtRA.js";import"./search-B-aW4zGh.js";import"./Input-CueXhQ4V.js";import"./useControlled-BXEwoD5-.js";import"./Button-B8XR24zN.js";import"./small-cross-DYYtvTQk.js";import"./ActionButton-P4ce0KZA.js";import"./Checkbox-DrgB9DWr.js";import"./useValueChanged-DoyhwWSp.js";import"./CollapsiblePanel-DiuaiCTg.js";import"./MultiColumnSortDialog-BkHFTNzA.js";import"./MenuTrigger-CDNFD1b5.js";import"./CompositeItem-B5t7ZVS0.js";import"./ToolbarRootContext-B_tLpux3.js";import"./getDisabledMountTransitionStyles-NNQg5thc.js";import"./getPseudoElementBounds-DkB34pum.js";import"./chevron-down-CJd6fkFq.js";import"./index-C8_vB7gu.js";import"./error-DVePqkqY.js";import"./BaseCbacBanner-BsU6b_xT.js";import"./makeExternalStore-BcjkXJ5O.js";import"./Tooltip-Bxzu-pAW.js";import"./PopoverPopup-w0tQerBi.js";import"./debounce-7vABva-v.js";import"./useOsdkClient-BRTJpYwY.js";import"./tick-Dx26yCkG.js";import"./DropdownField-DRorYhAL.js";import"./isEqual-BGCP9pRy.js";import"./withOsdkMetrics-Bbt3lTlO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
