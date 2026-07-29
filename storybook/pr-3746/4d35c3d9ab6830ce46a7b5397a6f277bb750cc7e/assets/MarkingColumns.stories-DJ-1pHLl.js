import{f as p,j as e}from"./iframe-Da42tfo0.js";import{O as i}from"./object-table-btuI5mIo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAikJXZa.js";import"./Table-BVmL8K-n.js";import"./index-Bomen_f9.js";import"./Dialog-n-frkQpt.js";import"./cross-DG6Fu1MX.js";import"./svgIconContainer-C1uFDFQ-.js";import"./useBaseUiId-BeAjw0Pz.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./index-Dneb3Ic8.js";import"./useEventCallback-DQIdBA5X.js";import"./SkeletonBar-BqNP19Zt.js";import"./LoadingCell-CTpBTWdO.js";import"./ColumnConfigDialog-CnzK0MCb.js";import"./DraggableList-DW5qQcgn.js";import"./search-CMGFB0Gl.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./isEqual-CldZjGbQ.js";import"./isObject-GrzurbJg.js";import"./Button-DNGlddJW.js";import"./ActionButton-BvqT7-oi.js";import"./Checkbox-DBtl7JMw.js";import"./useValueChanged-Cr9sCKBo.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./MultiColumnSortDialog-Dyqnc-DK.js";import"./MenuTrigger-DELKHcn5.js";import"./CompositeItem-BgwdEem5.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./chevron-down-B9ztHwbJ.js";import"./index-CUDqNzSs.js";import"./error-C20szSnY.js";import"./BaseCbacBanner-C-QMNaaF.js";import"./makeExternalStore-DY6l4t0Z.js";import"./Tooltip-s5Zvo8l1.js";import"./PopoverPopup-B2KF4r0_.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./tick-Djt3HCnR.js";import"./DropdownField-lD6ZutwA.js";import"./withOsdkMetrics-DcVf3U6k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
