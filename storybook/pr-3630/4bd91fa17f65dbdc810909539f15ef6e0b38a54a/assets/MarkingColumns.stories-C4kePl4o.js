import{f as n,j as t}from"./iframe-VuQ6RwPt.js";import{O as p}from"./object-table-B7TmgClB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKk4SWoC.js";import"./Table-BsxDJXcr.js";import"./index-DoQA3n1t.js";import"./Dialog-Cake-xZC.js";import"./cross-Ca9m439o.js";import"./svgIconContainer-D23zCiti.js";import"./useBaseUiId-CUrW8lhI.js";import"./InternalBackdrop-6wWkHXVE.js";import"./composite-BV-FC-Kn.js";import"./index-CCcuDDdO.js";import"./index-tfKKNQzN.js";import"./index-vThhIkN8.js";import"./useEventCallback-DaQgfhqI.js";import"./SkeletonBar-B1tadL4Z.js";import"./LoadingCell-Cwk9RSzS.js";import"./ColumnConfigDialog-oX9dXief.js";import"./DraggableList-DXcR1b4e.js";import"./search-Def4Uy4S.js";import"./Input-K3IP_uN7.js";import"./useControlled-B6bXDO-c.js";import"./Button-Cn_l3szX.js";import"./small-cross-BmRlFHTK.js";import"./ActionButton-voGckEf1.js";import"./Checkbox-SnkTh5PD.js";import"./useValueChanged-BZr4nkoh.js";import"./CollapsiblePanel-Dl_o-evA.js";import"./MultiColumnSortDialog-Baf2MKXf.js";import"./MenuTrigger-BEsBcgTV.js";import"./CompositeItem-4quomPQq.js";import"./ToolbarRootContext-D4igm7OB.js";import"./getDisabledMountTransitionStyles-BytydUdC.js";import"./getPseudoElementBounds-BfVYW7Le.js";import"./chevron-down-AuVDMi2f.js";import"./index-CCszNCm4.js";import"./error-Ci9Amk-Q.js";import"./BaseCbacBanner-2WROBYxY.js";import"./makeExternalStore-DaowcOFP.js";import"./Tooltip-BlZPmnXD.js";import"./PopoverPopup-DbetgQSB.js";import"./toNumber-HWWYcu4p.js";import"./useOsdkClient-1YqungXz.js";import"./tick-C5RDw_Um.js";import"./DropdownField-CH3X9mB0.js";import"./withOsdkMetrics-DMhqF5dw.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
