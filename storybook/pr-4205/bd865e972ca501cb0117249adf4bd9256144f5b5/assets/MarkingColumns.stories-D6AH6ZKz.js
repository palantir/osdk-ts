import{f as p,j as e}from"./iframe-CLFvQKtr.js";import{O as i}from"./object-table-rX1adUsD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dsl2rT4D.js";import"./Table-DmTtQgKr.js";import"./index-Bc4ZDDw5.js";import"./Dialog-DvHGs5g5.js";import"./cross-B8sVMx5E.js";import"./svgIconContainer-DDtGdFbP.js";import"./useBaseUiId-DGth5ZlH.js";import"./InternalBackdrop-ZpNJl5wc.js";import"./composite-BY1hAZzj.js";import"./index-BN1TScIw.js";import"./index-BVTx-0qU.js";import"./index-CKBwhOxc.js";import"./useEventCallback-PjLqcvTO.js";import"./SkeletonBar-BAMhpUp3.js";import"./LoadingCell-D5_TbiFy.js";import"./ColumnConfigDialog-DjkZMadG.js";import"./DraggableList-DM-itaQQ.js";import"./search-BBKcx3DL.js";import"./Input-B0zGDDc7.js";import"./useControlled-BsSE4zKc.js";import"./Button-BuhAuEGs.js";import"./small-cross-CaRVi9zJ.js";import"./ActionButton-20ezogam.js";import"./Checkbox-Cquu8Lsm.js";import"./useValueChanged-DKz6T4Hg.js";import"./CollapsiblePanel-CtUCKNQH.js";import"./MultiColumnSortDialog-DPYtA1tx.js";import"./MenuTrigger-DeKJcZnh.js";import"./CompositeItem-BgZVgO8p.js";import"./ToolbarRootContext-DNG77-u2.js";import"./getDisabledMountTransitionStyles-Dr_u9oB2.js";import"./getPseudoElementBounds-CTru0iiL.js";import"./chevron-down-GxDR_faA.js";import"./index-7BdV6mXZ.js";import"./error-EDq0RnuF.js";import"./BaseCbacBanner-DUUr1fXa.js";import"./makeExternalStore-B1fZCef5.js";import"./Tooltip-CDEzkuYI.js";import"./PopoverPopup-BFPb8tfO.js";import"./debounce-Bd3sQolQ.js";import"./useOsdkClient-DmQ_JOA9.js";import"./tick-BRgdE-Dn.js";import"./DropdownField-BAmcAyNN.js";import"./isEqual-QX2FW99V.js";import"./withOsdkMetrics-DUg-sn-W.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
