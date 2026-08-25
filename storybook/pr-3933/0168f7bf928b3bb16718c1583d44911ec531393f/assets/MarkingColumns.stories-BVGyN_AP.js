import{f as p,j as e}from"./iframe-DNmOe6lu.js";import{O as i}from"./object-table-DaUAFcHr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzQBCnx5.js";import"./Table-pbu-eGdq.js";import"./index-caWHSjtR.js";import"./Dialog-DH72U-Bf.js";import"./cross-Uw_qOqoe.js";import"./svgIconContainer-BE7zSGaJ.js";import"./useBaseUiId-DGcVLjQ2.js";import"./InternalBackdrop-CrKwsNIv.js";import"./composite-B-F9Dc9d.js";import"./index-BWnubV6Z.js";import"./index-CZaZwMdZ.js";import"./index-DpG-lJ3k.js";import"./useEventCallback-BcEHKNRU.js";import"./SkeletonBar-DFBb6qr_.js";import"./LoadingCell-hs5DOMVg.js";import"./ColumnConfigDialog-Bc6AruhI.js";import"./DraggableList-Cfr7aUuo.js";import"./search-BEsKwVx4.js";import"./Input-Dp4jVADC.js";import"./useControlled-Csc64VP1.js";import"./Button-CWVQOzz8.js";import"./small-cross-CUQPuwfM.js";import"./ActionButton-CMFy62q7.js";import"./Checkbox-B73qEk4e.js";import"./useValueChanged-xPpoXUlu.js";import"./CollapsiblePanel-kG9qILQW.js";import"./MultiColumnSortDialog-BC-zJwW7.js";import"./MenuTrigger-DBtCEjfZ.js";import"./CompositeItem-D6pRYz6J.js";import"./ToolbarRootContext-CmvtQ4qG.js";import"./getDisabledMountTransitionStyles-DqR0kNGe.js";import"./getPseudoElementBounds-DEMCmsZt.js";import"./chevron-down-B8h_jYO6.js";import"./index-CP4rvvXE.js";import"./error-Wtx85rSt.js";import"./BaseCbacBanner-ndtjJ8Jt.js";import"./makeExternalStore-CyEm4-2W.js";import"./Tooltip-HO9Lnryd.js";import"./PopoverPopup-0lG9TMBf.js";import"./debounce-uutSfaQu.js";import"./useOsdkClient-D-Rf3tpC.js";import"./tick-DlnBurgl.js";import"./DropdownField-BiYwm9gw.js";import"./isEqual-D-JsaTyA.js";import"./withOsdkMetrics-yeBN-NI8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
