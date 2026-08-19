import{f as p,j as e}from"./iframe-BYL7doMn.js";import{O as i}from"./object-table-V267myMJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-WjgK3yby.js";import"./Table-BA_92qvg.js";import"./index-DGp8JCsS.js";import"./Dialog-CMqzmjeu.js";import"./cross-As5FKXY-.js";import"./svgIconContainer-_aqU2ceG.js";import"./useBaseUiId-BDHrOOKV.js";import"./InternalBackdrop-Dj_rHuJA.js";import"./composite-DVT3Eov_.js";import"./index-BNCWFBwe.js";import"./index-B9iEbSri.js";import"./index-DPYDxTi4.js";import"./useEventCallback-Di1Qg9EE.js";import"./SkeletonBar-5t32e3g1.js";import"./LoadingCell-DcOdnC0j.js";import"./ColumnConfigDialog-CMj_U7ZP.js";import"./DraggableList-Du7vhXR6.js";import"./search-D5xrbzeg.js";import"./Input-CdbOxxHJ.js";import"./useControlled-v5GLNOSM.js";import"./Button-D8YUSgO5.js";import"./small-cross-BTIlfNGz.js";import"./ActionButton-qrKLXhxR.js";import"./Checkbox-PCLWJ8pS.js";import"./useValueChanged-CPcnC0pw.js";import"./CollapsiblePanel-C3ibyufi.js";import"./MultiColumnSortDialog-DRNlFUoI.js";import"./MenuTrigger-5G_f-uSX.js";import"./CompositeItem--33NfDsU.js";import"./ToolbarRootContext-BRf2421Z.js";import"./getDisabledMountTransitionStyles-CeI4j3Nx.js";import"./getPseudoElementBounds-DNSU3P07.js";import"./chevron-down-CE9oTrOB.js";import"./index-C_YsYgd4.js";import"./error-CTTbPhSu.js";import"./BaseCbacBanner-ZpT21Jaa.js";import"./makeExternalStore-DN7NmVRj.js";import"./Tooltip-BCtrBqwm.js";import"./PopoverPopup-CNV_9kc0.js";import"./debounce-RtjII4tG.js";import"./useOsdkClient-D6ajiaFe.js";import"./tick-DO5AFC-5.js";import"./DropdownField-eU4OOCad.js";import"./isEqual-BZ_ll_pL.js";import"./withOsdkMetrics-Cw_wIhS5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
