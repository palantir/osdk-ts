import{f as n,j as t}from"./iframe-Dp1CRu6c.js";import{O as p}from"./object-table-BQbRUBVy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWkOsMkG.js";import"./Table-kXiAzrVw.js";import"./index-DDVLxBOy.js";import"./Dialog-Ct47gwOa.js";import"./cross-CG-DeC47.js";import"./svgIconContainer-BC_0vX_e.js";import"./useBaseUiId-CWccYlZs.js";import"./InternalBackdrop-BKqn0-3A.js";import"./composite-BycuXxpQ.js";import"./index-vVu9ASLZ.js";import"./index-DQ0ad4Rd.js";import"./index-uDlakMiO.js";import"./useRole-D754jaaZ.js";import"./useEventCallback-mhA_0l5h.js";import"./SkeletonBar-CWLc9YwP.js";import"./LoadingCell-Cw9DXaSk.js";import"./ColumnConfigDialog-uO8-npG2.js";import"./DraggableList-yXZoFYuZ.js";import"./Input-DTQu9GLN.js";import"./useControlled-CKURD5_M.js";import"./Button-Izn2a-Gf.js";import"./small-cross-Capthggd.js";import"./ActionButton-D4OZ4fs0.js";import"./Checkbox-Cod3lSpW.js";import"./minus-DAstrPpS.js";import"./useValueChanged-b9NOXpdt.js";import"./FieldItemContext-ZxrciBuj.js";import"./caret-down-DRUruF7z.js";import"./CollapsiblePanel-B9J4Se8X.js";import"./MultiColumnSortDialog-DQXMez7K.js";import"./MenuTrigger-C2n9VC45.js";import"./useCompositeListItem-CF6DL62K.js";import"./ToolbarRootContext-BrIGoR_-.js";import"./getDisabledMountTransitionStyles-BGWbjSuz.js";import"./safePolygon-OCeT35xw.js";import"./getPseudoElementBounds-CfE7TmeC.js";import"./CompositeItem-NxCGTSTJ.js";import"./chevron-down-B9cqEQ-9.js";import"./index-CP_-7Y5q.js";import"./error-CWPx4DGJ.js";import"./BaseCbacBanner-C6buC9fu.js";import"./makeExternalStore-CJ4XjwYU.js";import"./Tooltip-BCkIs-vs.js";import"./PopoverPopup-DyQd4niR.js";import"./toNumber-OIxVTfR-.js";import"./useOsdkClient-CUe5WpHW.js";import"./Combobox--GdejMfV.js";import"./DropdownField-BarpcyK5.js";import"./useOsdkObjects-DK1g3PEn.js";import"./withOsdkMetrics-XOhFJDlT.js";const mr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const sr=["MarkingColumns"];export{r as MarkingColumns,sr as __namedExportsOrder,mr as default};
