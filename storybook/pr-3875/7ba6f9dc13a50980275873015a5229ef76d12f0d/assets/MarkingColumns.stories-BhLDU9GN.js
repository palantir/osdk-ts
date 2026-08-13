import{f as p,j as e}from"./iframe-pVpd-5Fd.js";import{O as i}from"./object-table-DBuGlqDB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWKX588j.js";import"./Table-DeiMW-lF.js";import"./index-BqhgvWoK.js";import"./Dialog-8YRFr7OJ.js";import"./cross-DkYiF8wc.js";import"./svgIconContainer-CaaU9NHC.js";import"./useBaseUiId-E_3kyUVy.js";import"./InternalBackdrop-CuB13asz.js";import"./composite-CwUrmrWF.js";import"./index-CylWHs1O.js";import"./index-DjcUw-9V.js";import"./index-_sEyGhur.js";import"./useEventCallback-I-tUTcsl.js";import"./SkeletonBar-fqFf26LV.js";import"./LoadingCell-QsH4Xk2V.js";import"./ColumnConfigDialog-DeF6XPZf.js";import"./DraggableList-BarxrkZJ.js";import"./search-Jf5xJ1D9.js";import"./Input-B4fGMfLL.js";import"./useControlled-8FvqARU6.js";import"./Button-DFmHXmt2.js";import"./small-cross-BWXxQMU0.js";import"./ActionButton-BSN0F72E.js";import"./Checkbox-C2RkinkT.js";import"./useValueChanged-DRe_GwRO.js";import"./CollapsiblePanel-DfsulYic.js";import"./MultiColumnSortDialog-DV_z7XN8.js";import"./MenuTrigger-OHtQAx24.js";import"./CompositeItem-BQXuUE1x.js";import"./ToolbarRootContext-CZHUcEVu.js";import"./getDisabledMountTransitionStyles-BWUw-zGn.js";import"./getPseudoElementBounds-_nxJt77q.js";import"./chevron-down-DYz5-Z2v.js";import"./index-BCDVMhSh.js";import"./error-CBBs5I85.js";import"./BaseCbacBanner-C22pQH-A.js";import"./makeExternalStore-v2dcTeAE.js";import"./Tooltip-Dq1rO_gI.js";import"./PopoverPopup-Bg6-zD8h.js";import"./debounce-f-iGekXc.js";import"./useOsdkClient-jlR6Pe0H.js";import"./tick-Cc5XUbJN.js";import"./DropdownField-Bb6YSXO8.js";import"./isEqual-C07f0oe6.js";import"./withOsdkMetrics-DrmtF7vj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
