import{f as p,j as e}from"./iframe-BeLDoJDJ.js";import{O as i}from"./object-table-YkR3Rqo_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BZlWemWx.js";import"./Table-BnJgnqxW.js";import"./index-CNOIOIrb.js";import"./Dialog-B1fIEJSW.js";import"./cross-DCG5TLV4.js";import"./svgIconContainer-BBtkfVDC.js";import"./useBaseUiId-LQ15WLyH.js";import"./InternalBackdrop-D5OQJWch.js";import"./composite-S97I0_tU.js";import"./index-Bt3oe8vo.js";import"./index-CfZxJNPe.js";import"./index-Ba61XdA0.js";import"./useEventCallback-D7hN4HKY.js";import"./SkeletonBar-VQWTr6u2.js";import"./LoadingCell-DGT9m269.js";import"./ColumnConfigDialog-jjVi1DBr.js";import"./DraggableList-CoTYdFdv.js";import"./search-BmHzBiZs.js";import"./Input-BJCADyvA.js";import"./useControlled-CwF9sQpL.js";import"./isEqual-DmFmNOmM.js";import"./isObject-7L6_sqP4.js";import"./Button-EnitxwgO.js";import"./ActionButton-C-98rI7n.js";import"./Checkbox-o7bol--P.js";import"./useValueChanged-DLEao6WC.js";import"./CollapsiblePanel-Dga8dkvV.js";import"./MultiColumnSortDialog-DOVUPWDG.js";import"./MenuTrigger-DCuqeVgG.js";import"./CompositeItem-CA7jBmHf.js";import"./ToolbarRootContext-CGUoqwzM.js";import"./getDisabledMountTransitionStyles-hl96xJYO.js";import"./getPseudoElementBounds-BqkXtj4-.js";import"./chevron-down-nLhl25OO.js";import"./index-Cqa5ciEF.js";import"./error-67kJMO00.js";import"./BaseCbacBanner-Bsfn304B.js";import"./makeExternalStore-DDJLENiS.js";import"./Tooltip-DDC50giw.js";import"./PopoverPopup-Rg2nIlJ0.js";import"./toNumber-CKRaMeAN.js";import"./useOsdkClient-C1wOhXH9.js";import"./tick-CZx6MvJR.js";import"./DropdownField-BzqwYiq4.js";import"./withOsdkMetrics-DtwNEj0a.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
