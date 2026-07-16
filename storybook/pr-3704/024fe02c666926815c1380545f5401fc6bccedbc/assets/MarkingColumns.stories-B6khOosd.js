import{f as p,j as e}from"./iframe-B-bI26qs.js";import{O as i}from"./object-table-CNHG8LuG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CyAMPy-I.js";import"./Table-Dcsr6pIQ.js";import"./index-BO1Z2F8c.js";import"./Dialog-H9tD7XDb.js";import"./cross-ZObj4Zbg.js";import"./svgIconContainer-VHKYNUGL.js";import"./useBaseUiId-DFxa8KHY.js";import"./InternalBackdrop-BIj-JJ9Q.js";import"./composite-nT2iGLyC.js";import"./index-DAGzsosQ.js";import"./index-QKKc5Ld_.js";import"./index-BYI1FAfC.js";import"./useEventCallback-BCkkdBp8.js";import"./SkeletonBar-sJmn9bTX.js";import"./LoadingCell-BoHKFlMk.js";import"./ColumnConfigDialog-DwmDKm0Q.js";import"./DraggableList-C5ZfWEjN.js";import"./search-DCiLGM6V.js";import"./Input-15l147x7.js";import"./useControlled-B9jXB5z3.js";import"./isEqual-Bx1s22Z6.js";import"./isObject-BBhmxkoG.js";import"./Button-D-VXe3Fn.js";import"./ActionButton-Bmyf3rc7.js";import"./Checkbox-D09dYZsD.js";import"./useValueChanged-DBwCBbTU.js";import"./CollapsiblePanel-zetCIaZK.js";import"./MultiColumnSortDialog-BYOZg9O5.js";import"./MenuTrigger-j_WWc1Sg.js";import"./CompositeItem-CozhSruV.js";import"./ToolbarRootContext-HXa5oleO.js";import"./getDisabledMountTransitionStyles-dTfyqDTr.js";import"./getPseudoElementBounds-YyzRwYGd.js";import"./chevron-down-B6UilXJO.js";import"./index-C-NVZsDo.js";import"./error-D0Jho4K1.js";import"./BaseCbacBanner-BWorwYRz.js";import"./makeExternalStore-nnOIXDXF.js";import"./Tooltip-CsEtDtBy.js";import"./PopoverPopup-DkXP7c66.js";import"./toNumber-D_BFdVOo.js";import"./useOsdkClient-DDIDYkJR.js";import"./tick-BgDClArX.js";import"./DropdownField-DnkuZ7W9.js";import"./withOsdkMetrics-coC_lN8X.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
