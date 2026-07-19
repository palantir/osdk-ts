import{f as p,j as e}from"./iframe-D6VcCUkM.js";import{O as i}from"./object-table-CuXNdq5V.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DPNqCLTc.js";import"./Table-CPYFG_zT.js";import"./index-tJZvQMDj.js";import"./Dialog-CzpUanzv.js";import"./cross-BNpZkKts.js";import"./svgIconContainer-DlL44_U7.js";import"./useBaseUiId-5mprEBeV.js";import"./InternalBackdrop-Bm7oHKZV.js";import"./composite-BdWLsdKX.js";import"./index-CoZQDdm3.js";import"./index-cLzaewGO.js";import"./index-DmlnyFwt.js";import"./useEventCallback-D3-PVm6Y.js";import"./SkeletonBar-DiNZqJfZ.js";import"./LoadingCell-1NUR9w_Z.js";import"./ColumnConfigDialog-b2NBssQr.js";import"./DraggableList-0elb5LTB.js";import"./search-CiMZ6MzG.js";import"./Input-AV8HZopO.js";import"./useControlled-DQBuB6EM.js";import"./isEqual-B5bnrEWz.js";import"./isObject-bHETAbPM.js";import"./Button-DDYPGD3Q.js";import"./ActionButton-Dr8xZyz2.js";import"./Checkbox-DgjtIM9d.js";import"./useValueChanged-CRuvgepe.js";import"./CollapsiblePanel-DIMUyGOk.js";import"./MultiColumnSortDialog-Bu1rjWwT.js";import"./MenuTrigger-D6nXErBI.js";import"./CompositeItem-VefHJTsp.js";import"./ToolbarRootContext-DZRChbjT.js";import"./getDisabledMountTransitionStyles-AkUCsAlG.js";import"./getPseudoElementBounds-m0-HNpz_.js";import"./chevron-down-CNJWZYus.js";import"./index-C8WTV4y0.js";import"./error-Ca_Te0vf.js";import"./BaseCbacBanner-1mHrxMjP.js";import"./makeExternalStore-BFmKn4t3.js";import"./Tooltip-CQRUVmOG.js";import"./PopoverPopup-fDirP___.js";import"./toNumber-DoTbA9GF.js";import"./useOsdkClient-BvPmnPzU.js";import"./tick-vuVjlpU6.js";import"./DropdownField-BjugEZAm.js";import"./withOsdkMetrics-DQJ2B3zq.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
