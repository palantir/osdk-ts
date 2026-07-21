import{f as p,j as e}from"./iframe-Ct-TSTf4.js";import{O as i}from"./object-table-CKO4uEhy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Chs-M_kI.js";import"./Table-fEVx4sp0.js";import"./index-DXx_LEB8.js";import"./Dialog-D_jjoHLU.js";import"./cross-ArjRnsTp.js";import"./svgIconContainer-GibNCSph.js";import"./useBaseUiId-BVv5au8X.js";import"./InternalBackdrop-3Nc3zghx.js";import"./composite-eQnjTMS2.js";import"./index-Ws6usDuy.js";import"./index-D6O9mxxz.js";import"./index-Bw3CnksW.js";import"./useEventCallback-CyxgvrNY.js";import"./SkeletonBar-B9dIBavu.js";import"./LoadingCell-tVpdDaXs.js";import"./ColumnConfigDialog--ujkXu6o.js";import"./DraggableList-BEROzXvS.js";import"./search-5rXyKs3l.js";import"./Input-BoNksdiP.js";import"./useControlled-BC0Cr05M.js";import"./isEqual-BweXjxk-.js";import"./isObject-BKiXl15z.js";import"./Button-CTfjkduN.js";import"./ActionButton-B7fd7LYs.js";import"./Checkbox-BdHx9Qh7.js";import"./useValueChanged-BFE-0OMW.js";import"./CollapsiblePanel-dy8Iw7Wa.js";import"./MultiColumnSortDialog-0s4S0nGt.js";import"./MenuTrigger-rlqDzUIY.js";import"./CompositeItem-DDUvXDtM.js";import"./ToolbarRootContext-CzJN9Tg9.js";import"./getDisabledMountTransitionStyles-BpiVaQ6w.js";import"./getPseudoElementBounds-D1be_EtB.js";import"./chevron-down-Cz6YTiug.js";import"./index-BXqUX4Di.js";import"./error-DwinDpqB.js";import"./BaseCbacBanner-DmBbPeWA.js";import"./makeExternalStore-BpaTocvK.js";import"./Tooltip-hmSN5PJZ.js";import"./PopoverPopup-CqDSKnEc.js";import"./toNumber-CaXcigO5.js";import"./useOsdkClient-DLX-UPhi.js";import"./tick-Blt2fc9_.js";import"./DropdownField-BZ6gIM4w.js";import"./withOsdkMetrics-D9KuKGm5.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
