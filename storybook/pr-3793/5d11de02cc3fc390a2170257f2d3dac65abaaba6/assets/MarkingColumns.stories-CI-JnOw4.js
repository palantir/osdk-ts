import{f as p,j as e}from"./iframe-DJYB1qk1.js";import{O as i}from"./object-table-CnQonoY8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtuV8K9F.js";import"./Table-B90HPOGg.js";import"./index-DonW1mkl.js";import"./Dialog-DPxIre9H.js";import"./cross-Bpub1NfR.js";import"./svgIconContainer-BbsWyzEj.js";import"./useBaseUiId-DL-SGNBR.js";import"./InternalBackdrop-eBfWZ-MD.js";import"./composite-CC6F0Qsz.js";import"./index-D8Ycj_o4.js";import"./index-Ca9Z72uB.js";import"./index-CvaTYoMt.js";import"./useEventCallback-uzRZFC7Y.js";import"./SkeletonBar-BLD3bcxm.js";import"./LoadingCell-Dgc9EthY.js";import"./ColumnConfigDialog-DeLr0uma.js";import"./DraggableList-MrlrcOkU.js";import"./search-5CkafOxN.js";import"./Input-1LkIvDzf.js";import"./useControlled-oyOM-Xp0.js";import"./isEqual-CewC2dRg.js";import"./isObject-CljKLLYD.js";import"./Button-Duzr31W4.js";import"./ActionButton-4WynwJXW.js";import"./Checkbox-D-pUxlIv.js";import"./useValueChanged-DbwZIZqR.js";import"./CollapsiblePanel-CKCvm0v6.js";import"./MultiColumnSortDialog-DJ_irqfG.js";import"./MenuTrigger-HGLe02pf.js";import"./CompositeItem-CUawBViA.js";import"./ToolbarRootContext-CV2B82ef.js";import"./getDisabledMountTransitionStyles-bi6UcqkV.js";import"./getPseudoElementBounds-qT7EHfZ1.js";import"./chevron-down-BBFBeDj_.js";import"./index-C2FWrg77.js";import"./error-BpmsLSMo.js";import"./BaseCbacBanner-B5alV3yj.js";import"./makeExternalStore-CkRVjc78.js";import"./Tooltip-CPTKLQ5G.js";import"./PopoverPopup-CyeyM8PS.js";import"./toNumber-CNd-iZ3r.js";import"./useOsdkClient-BLf8vx4g.js";import"./tick-BQV3GL8y.js";import"./DropdownField-CLncidES.js";import"./withOsdkMetrics-B_Dkj_nQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
