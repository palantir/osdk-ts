import{f as p,j as e}from"./iframe-CDhHfbZk.js";import{O as i}from"./object-table-BIIGIbV_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9m9ft9F.js";import"./Table-B465KFbL.js";import"./index-vUAebvBG.js";import"./Dialog-C4wjWsAg.js";import"./cross-CLCYSP7-.js";import"./svgIconContainer-DP_9rndU.js";import"./useBaseUiId-BNzPhzzT.js";import"./InternalBackdrop-kU3g4qnB.js";import"./composite-zry2u9iy.js";import"./index-IitVmvoQ.js";import"./index-DDa4qDBw.js";import"./index-QX77SP4G.js";import"./useEventCallback-B7ZISNVL.js";import"./SkeletonBar-BnvFfaYp.js";import"./LoadingCell-jwwDjlQv.js";import"./ColumnConfigDialog-Dvr0Mgyu.js";import"./DraggableList-tNZKpXfZ.js";import"./search-Bcd3upv2.js";import"./Input-B4zROYTD.js";import"./useControlled-C9J3sV3W.js";import"./Button-Eng2VAlv.js";import"./small-cross-DV4dQjPE.js";import"./ActionButton-Tom3ILVB.js";import"./Checkbox-Bbi6BQXM.js";import"./useValueChanged-C52zQhOD.js";import"./CollapsiblePanel-CxG2E3R9.js";import"./MultiColumnSortDialog-DP92EJIX.js";import"./MenuTrigger-CtSJZt_C.js";import"./CompositeItem-CfrnZWNF.js";import"./ToolbarRootContext-BHNpAEXV.js";import"./getDisabledMountTransitionStyles-BsTot6L0.js";import"./getPseudoElementBounds-CQtQrLv_.js";import"./chevron-down-BrdASUtV.js";import"./index-CaQKQtm_.js";import"./error-CgXh1tPF.js";import"./BaseCbacBanner-0aUDutEj.js";import"./makeExternalStore-BkKmabtu.js";import"./Tooltip-BYY_Xvns.js";import"./PopoverPopup-D0oa-8rs.js";import"./debounce-CYPWazyu.js";import"./useOsdkClient-BN3vNMZc.js";import"./tick-Bxx5r_FA.js";import"./DropdownField-BBgRvZiW.js";import"./isEqual-BF0VAMYr.js";import"./withOsdkMetrics-BPDsAwtw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
