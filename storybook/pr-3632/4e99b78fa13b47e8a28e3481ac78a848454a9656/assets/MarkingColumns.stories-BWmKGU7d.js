import{f as n,j as t}from"./iframe-BrKtZUsT.js";import{O as p}from"./object-table-BZx5jB-u.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbjT-_Ls.js";import"./Table-DcQmOren.js";import"./index-vtvn72me.js";import"./Dialog-D_8S5xDH.js";import"./cross-DzCC5MlF.js";import"./svgIconContainer-w8hpQ2Rb.js";import"./useBaseUiId-DgDyrgEz.js";import"./InternalBackdrop-BPuRVwyG.js";import"./composite-B9u5gOL2.js";import"./index-CPbXjYZC.js";import"./index-CpuYkPV_.js";import"./index-UVF-RwZy.js";import"./useEventCallback-1jOx9VEi.js";import"./SkeletonBar-B9dgSAF7.js";import"./LoadingCell-C7askJMt.js";import"./ColumnConfigDialog-B9K9tqqy.js";import"./DraggableList-WGQ6sYXS.js";import"./search-BSeWp_3r.js";import"./Input-BIkfquP3.js";import"./useControlled-DeDJ_4v3.js";import"./Button-BNY1_NM5.js";import"./small-cross-Df4xtbD9.js";import"./ActionButton--GWaVzlB.js";import"./Checkbox-tLt7fCs1.js";import"./useValueChanged-qc-FRp_W.js";import"./CollapsiblePanel-C4xWkMp5.js";import"./MultiColumnSortDialog-Or9S8aU6.js";import"./MenuTrigger-CEqCf9lH.js";import"./CompositeItem-BOcbjoko.js";import"./ToolbarRootContext-yF-LHglg.js";import"./getDisabledMountTransitionStyles-DhmaSngM.js";import"./getPseudoElementBounds-CriST9he.js";import"./chevron-down-BRRQ9R96.js";import"./index-BUUG3WKx.js";import"./error-DL5n4kY8.js";import"./BaseCbacBanner-B72sVQVl.js";import"./makeExternalStore-BZpd9OjK.js";import"./Tooltip-sSGLIte3.js";import"./PopoverPopup-itL32sNj.js";import"./toNumber-eIo9wKio.js";import"./useOsdkClient-BubB4di-.js";import"./tick-icANp2au.js";import"./DropdownField-Db_8tINa.js";import"./withOsdkMetrics-BaPoTDrh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
