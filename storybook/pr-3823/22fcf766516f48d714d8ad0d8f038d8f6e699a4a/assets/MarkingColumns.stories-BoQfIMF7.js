import{f as p,j as e}from"./iframe-CqtM1m66.js";import{O as i}from"./object-table-OQuwVmcB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8QenNoR3.js";import"./Table-qwyiPYYw.js";import"./index-Bm_s2cXS.js";import"./Dialog-CSPUFl_a.js";import"./cross-C3WCxJ7o.js";import"./svgIconContainer-0xugvUkl.js";import"./useBaseUiId-CNCxgIcO.js";import"./InternalBackdrop-r_3np2IB.js";import"./composite-BQCFMfMu.js";import"./index-Cj6SM7QT.js";import"./index-CmmulGo1.js";import"./index-PCnTVNS9.js";import"./useEventCallback-BbhjdoVV.js";import"./SkeletonBar-fH_qPdXK.js";import"./LoadingCell-BN3UNpFq.js";import"./ColumnConfigDialog-DGLmDR-C.js";import"./DraggableList-Dv3b-eOY.js";import"./search-DngCEFEh.js";import"./Input-pOGeWJ3Y.js";import"./useControlled--_m8dGzA.js";import"./isEqual-4O_a_wX6.js";import"./isObject-BljNoYab.js";import"./Button-B1BjSWNJ.js";import"./ActionButton-DCQBGKJH.js";import"./Checkbox-DvuwVqie.js";import"./useValueChanged-BkswtpC5.js";import"./CollapsiblePanel-3UPy_d8J.js";import"./MultiColumnSortDialog-CvLj9uUV.js";import"./MenuTrigger-7wwRSkel.js";import"./CompositeItem-BtfVG94N.js";import"./ToolbarRootContext-VqVmAPVb.js";import"./getDisabledMountTransitionStyles-DISBXdqI.js";import"./getPseudoElementBounds-Bgz2B9H-.js";import"./chevron-down-Bj4cqrv5.js";import"./index-Dfnjwbay.js";import"./error-CT_OGppP.js";import"./BaseCbacBanner-C4J61rco.js";import"./makeExternalStore-BPqGMrvG.js";import"./Tooltip-LCdeEWNM.js";import"./PopoverPopup-mInHJr4w.js";import"./toNumber-CHyK8yhn.js";import"./useOsdkClient-Cz5O4Q4G.js";import"./tick-CQviu8rF.js";import"./DropdownField-CRwxEekd.js";import"./withOsdkMetrics-BONS1yzE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
