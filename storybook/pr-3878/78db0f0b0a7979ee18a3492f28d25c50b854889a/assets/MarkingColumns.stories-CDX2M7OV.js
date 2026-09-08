import{f as p,j as e}from"./iframe-DGAYn9ah.js";import{O as i}from"./object-table-DTUrmLz6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChgL7y96.js";import"./Table-CiTkYzU2.js";import"./index-DTqlvJGy.js";import"./Dialog-BR3MuwWf.js";import"./cross-DupLKvqJ.js";import"./svgIconContainer-CgzcDTkc.js";import"./useBaseUiId-gHWBFpJw.js";import"./InternalBackdrop-8fzF_Cdw.js";import"./composite-B3z1s4Xv.js";import"./index-dFa0PhkU.js";import"./index-Bk-RkwxC.js";import"./index-CapGV1gT.js";import"./useEventCallback-C6GT1c1Y.js";import"./SkeletonBar-CsMuW56O.js";import"./LoadingCell-D7dlBHe2.js";import"./ColumnConfigDialog-Kr94ft5n.js";import"./DraggableList-BaQ59nTC.js";import"./search-CbK0B2vo.js";import"./Input-CmwSiSQg.js";import"./useControlled-DxF1qebn.js";import"./Button-C1GOspFh.js";import"./small-cross-Bjxpstym.js";import"./ActionButton-m1ZenSyP.js";import"./Checkbox-D1fsw7z_.js";import"./useValueChanged-B0j61wn1.js";import"./CollapsiblePanel-CAIby94r.js";import"./MultiColumnSortDialog-CjVn09J2.js";import"./MenuTrigger-BMttNTtu.js";import"./CompositeItem-BcZSNonj.js";import"./ToolbarRootContext-YWaMXSM6.js";import"./getDisabledMountTransitionStyles-D_EkCujd.js";import"./getPseudoElementBounds-DyXfIW7_.js";import"./chevron-down-CyN2TB6T.js";import"./index-NqnPNXJw.js";import"./error-BI4ZLamB.js";import"./BaseCbacBanner-Do_pGqh7.js";import"./makeExternalStore-BpmHT-XO.js";import"./Tooltip-CAfs-bUF.js";import"./PopoverPopup-RjV8v81n.js";import"./debounce-DwT09eQG.js";import"./useOsdkClient-CSSWGxvW.js";import"./tick-B-M2pQzS.js";import"./DropdownField-DgkNnSiH.js";import"./isEqual-BnHcjJHs.js";import"./withOsdkMetrics-DFTpKrdr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
