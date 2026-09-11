import{f as p,j as e}from"./iframe-D5Tg4ktw.js";import{O as i}from"./object-table-B8JcGxgg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BaIqC2Pe.js";import"./Table-BPcBSQFu.js";import"./index-BEbB4IUm.js";import"./Dialog-DPIr7_Mp.js";import"./cross-DzUcTLFz.js";import"./svgIconContainer-C3wCuOXB.js";import"./useBaseUiId-BdvoItIk.js";import"./InternalBackdrop-DLYljigh.js";import"./composite-B1gx-sbX.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./index-FQYOWNbs.js";import"./useEventCallback-Cxq3Ypn0.js";import"./SkeletonBar-Bm6lIBmj.js";import"./LoadingCell-POsDiFEK.js";import"./ColumnConfigDialog-DWjunH2C.js";import"./DraggableList-BSfbMhFR.js";import"./search-DeZTwCkl.js";import"./Input-CN7F7SIp.js";import"./useControlled-DObGwXHJ.js";import"./Button-DiryTlNK.js";import"./small-cross-tZnJs89K.js";import"./ActionButton-DdsvASl6.js";import"./Checkbox-DmnTpUu_.js";import"./useValueChanged-Dyb99FcC.js";import"./CollapsiblePanel-BIjDDqj4.js";import"./MultiColumnSortDialog-CE-NHI4-.js";import"./MenuTrigger-CW7zfuCG.js";import"./CompositeItem-C5_2nepJ.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./getDisabledMountTransitionStyles-DiO2Bw4N.js";import"./getPseudoElementBounds-BprlNR5S.js";import"./chevron-down-C1ACHifJ.js";import"./index-Deb3KNPH.js";import"./error-B5UKi7xe.js";import"./BaseCbacBanner-CqZxD00T.js";import"./makeExternalStore-kA_iXT4K.js";import"./Tooltip-DFNv6I-3.js";import"./PopoverPopup-Cl3OtvIp.js";import"./debounce-EQoAU-g_.js";import"./useOsdkClient-uKmKN20Y.js";import"./tick-_KNLE2bn.js";import"./DropdownField-BsQqxD2N.js";import"./isEqual-B8sfvD_4.js";import"./withOsdkMetrics-C-Pgn628.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
