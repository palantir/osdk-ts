import{f as p,j as e}from"./iframe-BOPH40aM.js";import{O as i}from"./object-table-CwbcJ0co.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dk7sOnp6.js";import"./Table-DDg19h3D.js";import"./index-C6HCGinX.js";import"./Dialog-D5Vta0XL.js";import"./cross-Dyy1QuxQ.js";import"./svgIconContainer-C74jhUFY.js";import"./useBaseUiId-FmUF_HCn.js";import"./InternalBackdrop-DXhiZMhg.js";import"./composite-D2Y_yGja.js";import"./index-BdcQoi5s.js";import"./index-Dn6uDsye.js";import"./index-5cDTy_56.js";import"./useEventCallback-DFtwstmX.js";import"./SkeletonBar-BFZg22dk.js";import"./LoadingCell-DktVzcvW.js";import"./ColumnConfigDialog--5UMrtN6.js";import"./DraggableList-D--051Oi.js";import"./search-CzcjumOg.js";import"./Input-IJOIjizp.js";import"./useControlled-D0weT_xr.js";import"./Button-BEu920XA.js";import"./small-cross-G4HnNcP3.js";import"./ActionButton-Av230VXe.js";import"./Checkbox-Dp3MELm6.js";import"./useValueChanged--LsWGCe4.js";import"./CollapsiblePanel-CKq8a2Q7.js";import"./MultiColumnSortDialog-puJirV83.js";import"./MenuTrigger-DJNmOI8Y.js";import"./CompositeItem-BrrSAdxA.js";import"./ToolbarRootContext-BQh3Vmwb.js";import"./getDisabledMountTransitionStyles-ZNI7YJ6O.js";import"./getPseudoElementBounds-CX_DMQ51.js";import"./chevron-down-BwPY74Fq.js";import"./index-DIdLImiR.js";import"./error-CQh9rOC1.js";import"./BaseCbacBanner-BMq0Yx7G.js";import"./makeExternalStore-CDJtVkjz.js";import"./Tooltip-Bi19yJDJ.js";import"./PopoverPopup-D_yfhwEP.js";import"./debounce-DNlMjLPc.js";import"./useOsdkClient-B8kqEZV4.js";import"./tick-dQV5Bvko.js";import"./DropdownField-BTKnt1ZR.js";import"./isEqual-Bhet0e8P.js";import"./withOsdkMetrics-CxsZe37o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
