import{f as p,j as e}from"./iframe-7zkNpsTb.js";import{O as i}from"./object-table-C0NNCCeN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BcwadNu2.js";import"./Table-CdEtTQGj.js";import"./index-D2Ps7yda.js";import"./Dialog-BA7Fb4VQ.js";import"./cross-CuqDFG72.js";import"./svgIconContainer-WZg9oowH.js";import"./useBaseUiId-KSlThZEb.js";import"./InternalBackdrop-BHCJp7SO.js";import"./composite-BrxcTD8Y.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./index-B8Wuwd1p.js";import"./useEventCallback-CNj_iPP2.js";import"./SkeletonBar-DOAgUDTQ.js";import"./LoadingCell-D38BbQrv.js";import"./ColumnConfigDialog-BbhmYQ2I.js";import"./DraggableList-CdsZ4puP.js";import"./search-LTMAICSm.js";import"./Input-Qt7qv0fd.js";import"./useControlled-CgLNclS7.js";import"./Button-CF1rIE6I.js";import"./small-cross-Cqucs5l-.js";import"./ActionButton-DOn_4WcG.js";import"./Checkbox-gZaZw0kJ.js";import"./useValueChanged-CcWIuI5C.js";import"./CollapsiblePanel-BJ-_vjCN.js";import"./MultiColumnSortDialog-Dd-zb_XL.js";import"./MenuTrigger-B5MKEVCA.js";import"./CompositeItem-B9MRs6kj.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./getDisabledMountTransitionStyles-DWBf3DRe.js";import"./getPseudoElementBounds-CRqDORYM.js";import"./chevron-down-R1agRcMd.js";import"./index-Bav8Bbwa.js";import"./error-CKvp5L_L.js";import"./BaseCbacBanner-BQtHX_ci.js";import"./makeExternalStore-DZpAF_p8.js";import"./Tooltip-ClphVmvg.js";import"./PopoverPopup-D-_EHFJQ.js";import"./debounce-CddDKvV0.js";import"./useOsdkClient-Vip7aKrf.js";import"./tick-BYcH1X9T.js";import"./DropdownField-C8ry4gZT.js";import"./isEqual-DIMXO8ep.js";import"./withOsdkMetrics-BuwNXHNi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
