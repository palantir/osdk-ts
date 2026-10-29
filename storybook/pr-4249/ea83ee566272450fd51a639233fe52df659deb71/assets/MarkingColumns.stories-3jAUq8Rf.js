import{f as p,j as e}from"./iframe-BbjXXJe8.js";import{O as i}from"./object-table-qIIe7KC5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dey0rnvM.js";import"./Table-CqQFObec.js";import"./index-T8M7MoCf.js";import"./Dialog-BKYZxddZ.js";import"./cross-Dp3ZYAZC.js";import"./svgIconContainer-CXj_KM32.js";import"./useBaseUiId-mbBdJtd6.js";import"./InternalBackdrop-_rPH4zEA.js";import"./composite-CkO02i_E.js";import"./index-GEyymHQJ.js";import"./index-CUAZugwU.js";import"./useEventCallback-X7nCdW-s.js";import"./SkeletonBar-u6tF3ULb.js";import"./LoadingCell-BQEmBLZY.js";import"./ColumnConfigDialog-CEktYxha.js";import"./DraggableList-B2uXj8r5.js";import"./search-DjptGMSz.js";import"./Input-DcHjunbi.js";import"./useControlled-bFhbJ_tP.js";import"./Button-BYNpk4v8.js";import"./small-cross-DBHZv8Q4.js";import"./ActionButton-Bl1GvY0Q.js";import"./Checkbox-Ce0Hl-Gw.js";import"./useValueChanged-BKhoHR0i.js";import"./CollapsiblePanel-BmSgtCoP.js";import"./MultiColumnSortDialog-CQS4VGRh.js";import"./MenuTrigger-DLhgGUEr.js";import"./CompositeItem-BvxDZQma.js";import"./ToolbarRootContext-DvWxWMIg.js";import"./getDisabledMountTransitionStyles-GlMe9-WZ.js";import"./getPseudoElementBounds-BMRxbPLa.js";import"./chevron-down-5PwEHI-v.js";import"./index-D95i56Mo.js";import"./error-B5EEo1NC.js";import"./BaseCbacBanner-BA_GTGz9.js";import"./makeExternalStore-BCfu_aRm.js";import"./Tooltip-D3vptghS.js";import"./PopoverPopup-DHqupTDU.js";import"./debounce-CmbjsLVd.js";import"./useOsdkClient-DsMfreJs.js";import"./tick-C8S8ITqk.js";import"./DropdownField-DrlUCotf.js";import"./isEqual-DzrTxp38.js";import"./withOsdkMetrics-Cy91uTto.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
