import{f as p,j as e}from"./iframe-7DO_hgMQ.js";import{O as i}from"./object-table-DzRSMbhZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B5hnoC7R.js";import"./Table-Cs3qJJzJ.js";import"./index-C29pOm1T.js";import"./Dialog-33AZHfcx.js";import"./cross-D_9OLgop.js";import"./svgIconContainer-DzpdNPkA.js";import"./useBaseUiId-Oq1MgnVD.js";import"./InternalBackdrop-Dl6a1-jN.js";import"./composite-BIyzFJw4.js";import"./index-CpBs9sRH.js";import"./index-kxscKf13.js";import"./index-B0-vcEDH.js";import"./useEventCallback-DxKGXWo7.js";import"./SkeletonBar-Dtl4JXfg.js";import"./LoadingCell-CSOm7JED.js";import"./ColumnConfigDialog-GUNvAyiE.js";import"./DraggableList-BCoI0rXg.js";import"./search-BiYpAlM6.js";import"./Input-BSSTxlm0.js";import"./useControlled-C5lH_kP3.js";import"./Button-CG_O6ptK.js";import"./small-cross-CU3PqcXv.js";import"./ActionButton-mzmJtNoX.js";import"./Checkbox-EtAi-RKo.js";import"./useValueChanged-DqawIZVU.js";import"./CollapsiblePanel-Bp7Wi5LO.js";import"./MultiColumnSortDialog-t6Q-Jcrf.js";import"./MenuTrigger-D9AV9YJR.js";import"./CompositeItem-CRzuvZSB.js";import"./ToolbarRootContext-D-ECRYtl.js";import"./getDisabledMountTransitionStyles-DSUse_yu.js";import"./getPseudoElementBounds-CjuU1qh7.js";import"./chevron-down-Cv_rBr5Q.js";import"./index-DAoZpWAc.js";import"./error-CYThlbbP.js";import"./BaseCbacBanner-D0oQx4Si.js";import"./makeExternalStore-C0_o8WAL.js";import"./Tooltip-DvjdNXO5.js";import"./PopoverPopup-OXRN3eBM.js";import"./debounce-fWQ1Uyi8.js";import"./useOsdkClient-CzqB3KxT.js";import"./tick-CX03s7uJ.js";import"./DropdownField-DfRF7x4Q.js";import"./isEqual-C20Mk7vo.js";import"./withOsdkMetrics-BBFkx9l4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
