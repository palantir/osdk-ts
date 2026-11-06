import{f as p,j as e}from"./iframe-BTbJEw_E.js";import{O as i}from"./object-table-dQhHxSap.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-aCGplSKY.js";import"./Table-D8IIQ0uD.js";import"./index-DWkrnykr.js";import"./Dialog-CCqAz4sd.js";import"./cross-AwvJd_Ud.js";import"./svgIconContainer-DggOleom.js";import"./useBaseUiId-lBVa_0WJ.js";import"./InternalBackdrop-Ckm1dtBk.js";import"./composite-B7RMGscZ.js";import"./index-DdrvFQuO.js";import"./index-18NAXc1Y.js";import"./index-AGrLxoIE.js";import"./useEventCallback-C5SBM2zO.js";import"./SkeletonBar-CvQ0kAkc.js";import"./LoadingCell-BeHh6Q1T.js";import"./ColumnConfigDialog-t8KafiPd.js";import"./DraggableList-CtRf-2Cd.js";import"./search-DBgBL-mB.js";import"./Input-C3RqpoyV.js";import"./useControlled-B9izrDgZ.js";import"./Button-vTo8rp-4.js";import"./small-cross-DGcKzG3K.js";import"./ActionButton-BWBnELV1.js";import"./Checkbox-BGoGAkIi.js";import"./useValueChanged-BSAVVzsI.js";import"./CollapsiblePanel-Cweq_HxM.js";import"./MultiColumnSortDialog-CsM2lET6.js";import"./MenuTrigger-D-L8fP0j.js";import"./CompositeItem-BnF_A8n_.js";import"./ToolbarRootContext-BJqUIRif.js";import"./getDisabledMountTransitionStyles-xzPhtnb4.js";import"./getPseudoElementBounds-BFGsCRAr.js";import"./chevron-down-CXkrXU2j.js";import"./index-YcO7uA7L.js";import"./error-wWqS_WOM.js";import"./BaseCbacBanner-DiwiC2U6.js";import"./makeExternalStore-Cj_xL18b.js";import"./Tooltip-CZNUyLi_.js";import"./isObject-1bmMeuQz.js";import"./debounce-B6qaA1VO.js";import"./useOsdkClient-CpDEON-O.js";import"./tick-iJfDowrv.js";import"./DropdownField-BGUtXP7T.js";import"./isEqual-Dg8F-44E.js";import"./_baseIsEqual-C5YFc0w8.js";import"./withOsdkMetrics-eBRijj-i.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
