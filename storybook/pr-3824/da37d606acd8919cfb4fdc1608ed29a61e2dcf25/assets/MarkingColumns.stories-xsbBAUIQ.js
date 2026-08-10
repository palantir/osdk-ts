import{f as p,j as e}from"./iframe-B70S6Lmv.js";import{O as i}from"./object-table-BfTy7xib.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DvqZs_Ee.js";import"./Table-DiAKwS9Z.js";import"./index-DWnMAI4T.js";import"./Dialog-BI2LCIhj.js";import"./cross-RQeYgE-5.js";import"./svgIconContainer-DCrmifFa.js";import"./useBaseUiId-EwZnzvJa.js";import"./InternalBackdrop-swj0KUjw.js";import"./composite-DkMtiPjX.js";import"./index-CuOP0KH2.js";import"./index-BKhiojeG.js";import"./index-DjQQ9Ebf.js";import"./useEventCallback-BaRUcjQf.js";import"./SkeletonBar-XMBBLDKR.js";import"./LoadingCell-CJRIZTrX.js";import"./ColumnConfigDialog-bucvOWJ0.js";import"./DraggableList-yliEoYZI.js";import"./search-BA089tRt.js";import"./Input-aN0JqfYJ.js";import"./useControlled-BYkqALsw.js";import"./isEqual-Diwy372c.js";import"./isObject-Bau7kQmU.js";import"./Button-ChkfdyYN.js";import"./ActionButton-CmxK41cn.js";import"./Checkbox-Ldf5yhpW.js";import"./useValueChanged-C1efsP7L.js";import"./CollapsiblePanel-Df1NXogi.js";import"./MultiColumnSortDialog-Cpu5deyQ.js";import"./MenuTrigger-HI6uf4IZ.js";import"./CompositeItem-BVQtW5gx.js";import"./ToolbarRootContext-CMGSy6ZS.js";import"./getDisabledMountTransitionStyles-JyNwSVpS.js";import"./getPseudoElementBounds-Cqb5T_QV.js";import"./chevron-down-DGeK32yC.js";import"./index-BhkemeNm.js";import"./error-B37gQfOZ.js";import"./BaseCbacBanner-B0K-ZHth.js";import"./makeExternalStore-BEhTvj2Q.js";import"./Tooltip-JVwBppS1.js";import"./PopoverPopup-CsTcm8RG.js";import"./toNumber-wPLlggss.js";import"./useOsdkClient-e-zC0dYQ.js";import"./tick-DI3EVtTl.js";import"./DropdownField-X8THrraV.js";import"./withOsdkMetrics-DB3VOG4-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
