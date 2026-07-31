import{f as p,j as e}from"./iframe-k4q2yqwB.js";import{O as i}from"./object-table-xGpMlGKU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcFy7ru6.js";import"./Table-03CJ2Lmf.js";import"./index-BoJiE0EV.js";import"./Dialog-CzrEPziC.js";import"./cross-BSjrA-hj.js";import"./svgIconContainer-G2Q9WiIr.js";import"./useBaseUiId-C7Hv9Tzg.js";import"./InternalBackdrop-Bedpf4wz.js";import"./composite-Bm-k795N.js";import"./index-fgdVt0KH.js";import"./index-Dm0Rhw7E.js";import"./index-DTDof-5f.js";import"./useEventCallback-C4okygGr.js";import"./SkeletonBar-BVq-S6Xh.js";import"./LoadingCell-DxCMomGt.js";import"./ColumnConfigDialog-DcArbVLT.js";import"./DraggableList-B1tKyGQF.js";import"./search-29u5dNu1.js";import"./Input-D1rCohyt.js";import"./useControlled-BecCn6K2.js";import"./isEqual-D3vlfOdi.js";import"./isObject-DxbMLdSm.js";import"./Button-CnDoyZ08.js";import"./ActionButton-DgpuixvG.js";import"./Checkbox-CBj1kWmC.js";import"./useValueChanged-D9uwznF8.js";import"./CollapsiblePanel-ast8KaP2.js";import"./MultiColumnSortDialog-CnVLAtFv.js";import"./MenuTrigger-B_BymQfJ.js";import"./CompositeItem-ChG7XBVE.js";import"./ToolbarRootContext-B_DA6t17.js";import"./getDisabledMountTransitionStyles-C0VioAFY.js";import"./getPseudoElementBounds-CZTlLMfI.js";import"./chevron-down-pLPxEt1n.js";import"./index-C9wyccr-.js";import"./error-ClYvRrnM.js";import"./BaseCbacBanner-CUkl0cUl.js";import"./makeExternalStore-Ck9Fwx-s.js";import"./Tooltip-DPsMBPb2.js";import"./PopoverPopup-CJmDmZQd.js";import"./toNumber-BzJ6VRWW.js";import"./useOsdkClient-M5DD-G7T.js";import"./tick-khb2_2lM.js";import"./DropdownField-DDquJplV.js";import"./withOsdkMetrics-qyQgOFT1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
