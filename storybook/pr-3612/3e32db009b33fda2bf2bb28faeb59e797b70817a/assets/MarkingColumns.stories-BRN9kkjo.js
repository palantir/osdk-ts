import{f as n,j as t}from"./iframe-C2B_OACy.js";import{O as p}from"./object-table-Cx3nlwAo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbofT8Vz.js";import"./Table-CZrHSkCf.js";import"./index-CLomzAqh.js";import"./Dialog-Dmt6ew5D.js";import"./cross-C7U7JI-5.js";import"./svgIconContainer-pxYY3QYz.js";import"./useBaseUiId-CHtGEiBM.js";import"./InternalBackdrop-LMgHr4MT.js";import"./composite-B1orMTud.js";import"./index-0Knf2Yug.js";import"./index-DzixO7LR.js";import"./index-D8X_VHxX.js";import"./useEventCallback-iPVoiq6M.js";import"./SkeletonBar-z8uDt0RR.js";import"./LoadingCell-AaPIOpN-.js";import"./ColumnConfigDialog-Dwc68Pcb.js";import"./DraggableList-gVmZDj3A.js";import"./search-CnoXYBH4.js";import"./Input-LbVXtfjK.js";import"./useControlled-BJr6d3f7.js";import"./Button-CM1PoOtK.js";import"./small-cross-Cvdag5aZ.js";import"./ActionButton-BVM0Dn8Q.js";import"./Checkbox-moZZ6GzG.js";import"./useValueChanged-C-SKBV7W.js";import"./CollapsiblePanel-CVCuwU77.js";import"./MultiColumnSortDialog-D0zKf7Lk.js";import"./MenuTrigger-CJASmZsc.js";import"./CompositeItem-BjmA2MYN.js";import"./ToolbarRootContext-C7c9wNRj.js";import"./getDisabledMountTransitionStyles-Cuq4c81u.js";import"./getPseudoElementBounds-D9d43NYs.js";import"./chevron-down-CyJWZjaN.js";import"./index-Bfat0Jii.js";import"./error-CgruEGl7.js";import"./BaseCbacBanner-BdeICk3i.js";import"./makeExternalStore-BoC_jvI8.js";import"./Tooltip-B5cx9x0t.js";import"./PopoverPopup-BFWR4FFo.js";import"./toNumber-CczIyBXm.js";import"./useOsdkClient-YjQY0t3B.js";import"./tick-CyuF4op7.js";import"./DropdownField-CFPduHlp.js";import"./withOsdkMetrics-Bn3M9t1R.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
