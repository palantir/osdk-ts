import{f as p,j as e}from"./iframe-CGQ3pPyN.js";import{O as i}from"./object-table-DKrb4-FI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0d8w61e.js";import"./Table-DoBnIyhe.js";import"./index-D5ulmSp4.js";import"./Dialog-Do0260gu.js";import"./cross-CaCixUkz.js";import"./svgIconContainer-PA2ZuagG.js";import"./useBaseUiId-D18qpYhV.js";import"./InternalBackdrop-DjO1M3j9.js";import"./composite-DdxnokEw.js";import"./index-DCTecv-n.js";import"./index-D6WjugAr.js";import"./index-BHKY8INM.js";import"./useEventCallback-BwYR426g.js";import"./SkeletonBar-DqORL0HU.js";import"./LoadingCell-DjGijCZw.js";import"./ColumnConfigDialog-C2jkpvMm.js";import"./DraggableList-Dz-wLxSF.js";import"./search-CFopY9hG.js";import"./Input-BT1Rp4mr.js";import"./useControlled-C3Ct7rRf.js";import"./isEqual-Ciq06rbL.js";import"./isObject-Dy21rycA.js";import"./Button-BXSTotUw.js";import"./ActionButton-C4bCZpUy.js";import"./Checkbox-COHiMF3O.js";import"./useValueChanged-CQYNvT_3.js";import"./CollapsiblePanel-BEauxQqy.js";import"./MultiColumnSortDialog-JeiG0Daz.js";import"./MenuTrigger-BUPHpPWe.js";import"./CompositeItem--3EFQsH0.js";import"./ToolbarRootContext-KxLfRu1W.js";import"./getDisabledMountTransitionStyles-D9Sj_mnF.js";import"./getPseudoElementBounds-inYkQB6U.js";import"./chevron-down-psR5H-K5.js";import"./index-D4-y_jb8.js";import"./error-DEEH7noa.js";import"./BaseCbacBanner-BHOTaf-T.js";import"./makeExternalStore-l1enNhmQ.js";import"./Tooltip-D2rI2oj9.js";import"./PopoverPopup-CCxZUCV2.js";import"./toNumber-D_eyv4TQ.js";import"./useOsdkClient-onJqe-G0.js";import"./tick-BO5FA_vb.js";import"./DropdownField-BJGMhAE7.js";import"./withOsdkMetrics-13L2_Pyz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
