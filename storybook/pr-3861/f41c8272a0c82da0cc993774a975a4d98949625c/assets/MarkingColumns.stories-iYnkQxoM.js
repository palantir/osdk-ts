import{f as p,j as e}from"./iframe-CbVdry27.js";import{O as i}from"./object-table-BHKLVqxj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tfmV0fps.js";import"./Table-BDNwiQrh.js";import"./index-To_tBHh-.js";import"./Dialog-DeQIruMM.js";import"./cross-DITFSMmT.js";import"./svgIconContainer-BE-Q5NLe.js";import"./useBaseUiId-COEKHJ4V.js";import"./InternalBackdrop-DzVUNVwc.js";import"./composite-D1RCmFrB.js";import"./index-CxQzO9vT.js";import"./index-CWuwxy99.js";import"./index-DI-JxeEE.js";import"./useEventCallback-CB-snxQm.js";import"./SkeletonBar-VQk2FTMC.js";import"./LoadingCell-B9Hm7MHR.js";import"./ColumnConfigDialog-sHevPC2C.js";import"./DraggableList-oyI6be4x.js";import"./search-CAyyPjGK.js";import"./Input-9Z_p8AjW.js";import"./useControlled-O5_ibcww.js";import"./Button-CXv2Sbo7.js";import"./small-cross-DsN_jioI.js";import"./ActionButton-CEgoaKzv.js";import"./Checkbox-BWqnsoev.js";import"./useValueChanged-DxXNbX15.js";import"./CollapsiblePanel-DXtTBiZC.js";import"./MultiColumnSortDialog-C87bRuLF.js";import"./MenuTrigger-CzVk5AZS.js";import"./CompositeItem-C6kwzUcw.js";import"./ToolbarRootContext-CkFGLvLN.js";import"./getDisabledMountTransitionStyles-CivHSC6Y.js";import"./getPseudoElementBounds-DEFhov4L.js";import"./chevron-down-DXTT43su.js";import"./index-DD2XUJOf.js";import"./error-DofjuNB7.js";import"./BaseCbacBanner-YASPMYkx.js";import"./makeExternalStore-BnMLaNWe.js";import"./Tooltip-DpkIEOMr.js";import"./PopoverPopup-BEEkZmVP.js";import"./toNumber-CDHVRjp-.js";import"./useOsdkClient-DpGyv36v.js";import"./tick-C6DVbt_F.js";import"./DropdownField-BZb13ucB.js";import"./withOsdkMetrics-CBasv5wc.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
