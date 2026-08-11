import{f as p,j as e}from"./iframe-Dz5rdWKc.js";import{O as i}from"./object-table-B2t2lye9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XATaYvna.js";import"./Table-DGG580oZ.js";import"./index-CytlZwKK.js";import"./Dialog-0FDBmYfS.js";import"./cross-CWOW4qd9.js";import"./svgIconContainer-CUN1j48t.js";import"./useBaseUiId-CcJgBD_T.js";import"./InternalBackdrop-CIvTRqRL.js";import"./composite-uePQiAd3.js";import"./index-DbprldD0.js";import"./index-DwniMKUL.js";import"./index-BOSAzp12.js";import"./useEventCallback-w50J352W.js";import"./SkeletonBar-B734M0LM.js";import"./LoadingCell-Bv2ftvWI.js";import"./ColumnConfigDialog-C1tfFTej.js";import"./DraggableList-5iwPRV7s.js";import"./search-BFHO--qI.js";import"./Input-obGi4R-h.js";import"./useControlled-4Ksb8v8S.js";import"./isEqual-BZe_8M-T.js";import"./isObject-DVMtZYDp.js";import"./Button-Byc2y57h.js";import"./ActionButton-BHFskhzg.js";import"./Checkbox-Dh99OxeL.js";import"./useValueChanged-B4dQw5iP.js";import"./CollapsiblePanel-CvKAvnYp.js";import"./MultiColumnSortDialog-DNlQYhdv.js";import"./MenuTrigger-BpWiiVhn.js";import"./CompositeItem-C7V_Skuq.js";import"./ToolbarRootContext-MoW5PjEQ.js";import"./getDisabledMountTransitionStyles-xbZaHee-.js";import"./getPseudoElementBounds-BbNVJ4Mj.js";import"./chevron-down-DwfjrTJ-.js";import"./index-CEPBw93X.js";import"./error-CrVFNvEo.js";import"./BaseCbacBanner-Dm7GUcA8.js";import"./makeExternalStore-CHpDPlpc.js";import"./Tooltip-BvNkppRD.js";import"./PopoverPopup-BX_QYCS1.js";import"./toNumber-BG3B4_6W.js";import"./useOsdkClient-BeXjkR9z.js";import"./tick-CuiOgS51.js";import"./DropdownField-BaMjHWk4.js";import"./withOsdkMetrics-zHx2V0mr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
