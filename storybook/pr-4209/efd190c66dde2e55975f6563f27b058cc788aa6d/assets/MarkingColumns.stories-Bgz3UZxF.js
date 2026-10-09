import{f as p,j as e}from"./iframe-BBEsiyhw.js";import{O as i}from"./object-table-Dq8XXRr-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BmblPu1v.js";import"./Table-pFVgEkXm.js";import"./index-ClnGgge0.js";import"./Dialog-BUh_BioF.js";import"./cross-D8hf1lyL.js";import"./svgIconContainer-BftRkbDY.js";import"./useBaseUiId-B3oGhb6T.js";import"./InternalBackdrop-ChnKIul8.js";import"./composite-CotiRSPy.js";import"./index-BjsoHb5F.js";import"./index-DalDu3QI.js";import"./index--qEH9jKV.js";import"./useEventCallback-B1mH3cgs.js";import"./SkeletonBar-CnHRJgGL.js";import"./LoadingCell-WYQo3n6Z.js";import"./ColumnConfigDialog-DrGLRuHz.js";import"./DraggableList-C1o2JZQo.js";import"./search-CUaj7sUK.js";import"./Input-BCyCFswy.js";import"./useControlled-BD3zVyK-.js";import"./Button-C37aiOXg.js";import"./small-cross-CYF_B5Lg.js";import"./ActionButton-i2asGAmE.js";import"./Checkbox-BLIvRp7L.js";import"./useValueChanged-B8GX47Ef.js";import"./CollapsiblePanel-BBI2Wh35.js";import"./MultiColumnSortDialog-CgdSH3_A.js";import"./MenuTrigger-BuN-Dfsd.js";import"./CompositeItem-BDqi7Zsx.js";import"./ToolbarRootContext-BkzilyRu.js";import"./getDisabledMountTransitionStyles-BdiTBQkJ.js";import"./getPseudoElementBounds-Cdat2o12.js";import"./chevron-down-DqgLlLlb.js";import"./index-BK2KAOIj.js";import"./error-DhmHSkrO.js";import"./BaseCbacBanner-DZDVC8eH.js";import"./makeExternalStore-oMnnQc1q.js";import"./Tooltip-CwE-ESs7.js";import"./PopoverPopup-CuSOAdrR.js";import"./debounce-CpTZuqbj.js";import"./useOsdkClient-Dj0AF7_N.js";import"./tick-kQvs8Sxv.js";import"./DropdownField-BOu_gmsx.js";import"./isEqual-Bn_yEad4.js";import"./withOsdkMetrics-J9vpDrpe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
