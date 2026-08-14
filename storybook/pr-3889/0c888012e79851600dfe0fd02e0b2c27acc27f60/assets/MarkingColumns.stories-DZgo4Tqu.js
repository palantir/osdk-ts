import{f as p,j as e}from"./iframe-CMZM34Nm.js";import{O as i}from"./object-table-CQijRIaS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-T_55Ld-4.js";import"./Table-Bf19vEdW.js";import"./index-CPwwZizP.js";import"./Dialog-X0LnPdOw.js";import"./cross-EHESnZVq.js";import"./svgIconContainer-MNS-5CB_.js";import"./useBaseUiId-3LVIhb8Q.js";import"./InternalBackdrop-Dm4BJAYO.js";import"./composite-BLgd2D-S.js";import"./index-DseLBzy9.js";import"./index-DIXzfJRB.js";import"./index-Bzf0HlHB.js";import"./useEventCallback-INnShxMl.js";import"./SkeletonBar-BRFNRxpj.js";import"./LoadingCell-D4PFNC00.js";import"./ColumnConfigDialog-Xy5lhY4M.js";import"./DraggableList-DD2Z18xa.js";import"./search-oY9nbA70.js";import"./Input-CXcmcuOy.js";import"./useControlled-DrBMs-2h.js";import"./Button-ClIIGhQ-.js";import"./small-cross-DEmdrdiv.js";import"./ActionButton-B0HXO6GZ.js";import"./Checkbox-DrBze1bx.js";import"./useValueChanged-BYWxwfrd.js";import"./CollapsiblePanel-CRTElWuv.js";import"./MultiColumnSortDialog-C1j5u-CD.js";import"./MenuTrigger-CShjHQEP.js";import"./CompositeItem-CAkD41ki.js";import"./ToolbarRootContext-Q3-albnw.js";import"./getDisabledMountTransitionStyles-Bs5e3cwu.js";import"./getPseudoElementBounds-C6pmrRxY.js";import"./chevron-down-DGTOO9UD.js";import"./index-EiUiPvzp.js";import"./error-CWU2GFiR.js";import"./BaseCbacBanner-DoCqQT-M.js";import"./makeExternalStore-C8qTazFT.js";import"./Tooltip-Dx6503jt.js";import"./PopoverPopup-BNCKNnCL.js";import"./debounce-BX-4RUA6.js";import"./useOsdkClient-CXoHROa3.js";import"./tick-LLUOl_kc.js";import"./DropdownField-BnX8rzbA.js";import"./isEqual-B7m0Iy2G.js";import"./withOsdkMetrics-DRVxGjiO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
