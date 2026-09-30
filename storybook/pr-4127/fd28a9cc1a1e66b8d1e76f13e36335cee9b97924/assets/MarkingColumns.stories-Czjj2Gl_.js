import{f as p,j as e}from"./iframe-BqOAaVYX.js";import{O as i}from"./object-table-CdmLVnB8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DfAqa6Ns.js";import"./Table-Bq7Setty.js";import"./index-hhMnxhy8.js";import"./Dialog-6ojF_tnN.js";import"./cross-VDw2oJTP.js";import"./svgIconContainer-fHQR-WGO.js";import"./useBaseUiId-D8PXSJwD.js";import"./InternalBackdrop-BGIegr0x.js";import"./composite-FQnt6Ug_.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./index-BV9JiV1x.js";import"./useEventCallback-B27Rxp7L.js";import"./SkeletonBar-CCrdDLAf.js";import"./LoadingCell-Blv0eHPn.js";import"./ColumnConfigDialog-Dl6KswGg.js";import"./DraggableList-CpcAfN-E.js";import"./search-BrbOR0sP.js";import"./Input-DGoYfUS_.js";import"./useControlled-Cw0rstUZ.js";import"./Button-DLn-Tp2Y.js";import"./small-cross-Ce9UNZ-K.js";import"./ActionButton-yXrzzXD9.js";import"./Checkbox-Bh-5Xf3l.js";import"./useValueChanged-DoWuflaR.js";import"./CollapsiblePanel-BoQbvN_j.js";import"./MultiColumnSortDialog-BxyxFa4e.js";import"./MenuTrigger-Db7tR9a4.js";import"./CompositeItem-lsMfNC7P.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./getDisabledMountTransitionStyles-BkrhF4eN.js";import"./getPseudoElementBounds-vNNMy6F8.js";import"./chevron-down-CWxaKaem.js";import"./index-l3AZM9tW.js";import"./error-BmfSiLn5.js";import"./BaseCbacBanner-dHAnJqLD.js";import"./makeExternalStore-BiBaRYea.js";import"./Tooltip-Dg7ObhIp.js";import"./PopoverPopup-CpsJz6b_.js";import"./debounce-ZhhJhx1c.js";import"./useOsdkClient-tsebv1JW.js";import"./tick-CuisNnxV.js";import"./DropdownField-p3inN5wv.js";import"./isEqual-NGjzWzhK.js";import"./withOsdkMetrics-DCrwrvzV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
