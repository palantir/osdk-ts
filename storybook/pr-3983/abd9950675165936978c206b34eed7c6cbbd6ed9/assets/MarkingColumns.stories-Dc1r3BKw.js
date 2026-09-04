import{f as p,j as e}from"./iframe-DvFhas0q.js";import{O as i}from"./object-table-BrWh7pSz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-QHjuDrJd.js";import"./Table-xJp2Wsgi.js";import"./index-CmLQwMDk.js";import"./Dialog-Bh2Cfnay.js";import"./cross-CM36P0tx.js";import"./svgIconContainer-BHO7oNHP.js";import"./useBaseUiId-BFo_-NKJ.js";import"./InternalBackdrop-BEZpm-Rm.js";import"./composite-C99jNiLY.js";import"./index-Apg0qjyu.js";import"./index-BoSI0BFD.js";import"./index-lBWfPJIN.js";import"./useEventCallback-CaLmf3WD.js";import"./SkeletonBar-DYRVMcyT.js";import"./LoadingCell-BL2dIJAr.js";import"./ColumnConfigDialog-BxhWPuH-.js";import"./DraggableList-B1ucVK1_.js";import"./search-C6DWKwgW.js";import"./Input-Co66Vae_.js";import"./useControlled-CxHMv-Gu.js";import"./Button-CK4f3ZCw.js";import"./small-cross-BLY3irjp.js";import"./ActionButton-DMraA7nF.js";import"./Checkbox-2_35H22f.js";import"./useValueChanged-D5EnR-8c.js";import"./CollapsiblePanel-Ky7kH8D6.js";import"./MultiColumnSortDialog-CRzHQD8N.js";import"./MenuTrigger-CIWjpa9Z.js";import"./CompositeItem-Dn55C0Ya.js";import"./ToolbarRootContext-Dzf-NS_o.js";import"./getDisabledMountTransitionStyles-BsD7puFJ.js";import"./getPseudoElementBounds-WfWTcseT.js";import"./chevron-down-EuTJEAw_.js";import"./index-YzetP2f8.js";import"./error-ASo9jiXR.js";import"./BaseCbacBanner-BDyjVkT0.js";import"./makeExternalStore-wKI12oPU.js";import"./Tooltip-C1NiSt4U.js";import"./PopoverPopup-BENmx3Et.js";import"./debounce-CV3_uBLw.js";import"./useOsdkClient-DDHO7ERi.js";import"./tick-C-HkFW0L.js";import"./DropdownField-BAPz2zMI.js";import"./isEqual-RMEuw8IO.js";import"./withOsdkMetrics-UKaUAaA5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
