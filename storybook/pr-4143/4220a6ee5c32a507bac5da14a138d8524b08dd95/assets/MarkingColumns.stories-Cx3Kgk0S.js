import{f as p,j as e}from"./iframe-DGLAKnND.js";import{O as i}from"./object-table-Dpc5MjBr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFgLk3H0.js";import"./Table-BsHucwjJ.js";import"./index-MAOZVqBp.js";import"./Dialog-B7LFCDuZ.js";import"./cross-CxVHgnds.js";import"./svgIconContainer-FR2bqQFg.js";import"./useBaseUiId-BaGNlDqg.js";import"./InternalBackdrop-CMlBsszD.js";import"./composite-CNVl9uwD.js";import"./index-D8VO6Jfw.js";import"./index-TSIf0hfv.js";import"./index-D64aoPmg.js";import"./useEventCallback-Bbz38unH.js";import"./SkeletonBar-DZ3fNMsI.js";import"./LoadingCell-bn0z-gtJ.js";import"./ColumnConfigDialog-CXqm1Z_S.js";import"./DraggableList-CJCY8max.js";import"./search-BOgD6jUI.js";import"./Input-Cs47mLOC.js";import"./useControlled-EZBO8tge.js";import"./Button-D_UOXx3n.js";import"./small-cross-GUXRAdAn.js";import"./ActionButton-BjnG2AJb.js";import"./Checkbox-CF2-HhjI.js";import"./useValueChanged-C708bQfP.js";import"./CollapsiblePanel-C0WuBQuO.js";import"./MultiColumnSortDialog-BUuWI7HK.js";import"./MenuTrigger-CaeYiSBF.js";import"./CompositeItem-DgGcGQW6.js";import"./ToolbarRootContext-DLHGbFy6.js";import"./getDisabledMountTransitionStyles-KvK7cGgY.js";import"./getPseudoElementBounds-_CZkfBpK.js";import"./chevron-down-BpoIGC6g.js";import"./index-2SXn5UAQ.js";import"./error-D43b2FyI.js";import"./BaseCbacBanner-B7t9tKYP.js";import"./makeExternalStore-Ckpy9L-L.js";import"./Tooltip-DRsiLNea.js";import"./PopoverPopup-sChDPaWB.js";import"./debounce-4zT3h9WK.js";import"./useOsdkClient-B1Wf-t7W.js";import"./tick-MF5FreoB.js";import"./DropdownField-BMcpUr4D.js";import"./isEqual-7hCELrMd.js";import"./withOsdkMetrics-uBYACZNa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
