import{f as n,j as t}from"./iframe-DWIh2My5.js";import{O as p}from"./object-table-BjRYs2jX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DY34mEM_.js";import"./Table-BaBZlUMO.js";import"./index-Dr0wFz6U.js";import"./Dialog-74oicJGg.js";import"./cross-C4nn9kt7.js";import"./svgIconContainer-BnRb4RdE.js";import"./useBaseUiId-BeqqY0Lp.js";import"./InternalBackdrop-wpO0j6ZL.js";import"./composite-B1E5hU3f.js";import"./index-C4ak3yd0.js";import"./index-RnszV6TD.js";import"./index-DSDz9GEB.js";import"./useEventCallback-DwIePs6j.js";import"./SkeletonBar-DlqS-1vY.js";import"./LoadingCell-Cz2CsOPZ.js";import"./ColumnConfigDialog-CtZvCV8h.js";import"./DraggableList-qK4a9iQ1.js";import"./search-BEMkdj45.js";import"./Input-CSwHlBdV.js";import"./useControlled-DoDxpg9c.js";import"./Button-na3Ft-Tz.js";import"./small-cross-CE4fDAR5.js";import"./ActionButton-C38Mxy5Z.js";import"./Checkbox-HWHi6p0m.js";import"./minus-DGZBEA7T.js";import"./tick-B-dIsewA.js";import"./useValueChanged-DnqCl0lW.js";import"./caret-down-DgJ1UFvO.js";import"./CollapsiblePanel-qUltwGfV.js";import"./MultiColumnSortDialog-tZXVnnRH.js";import"./MenuTrigger-CWWAu0qI.js";import"./CompositeItem-CR-9HIgj.js";import"./ToolbarRootContext-CvGk5N7v.js";import"./getDisabledMountTransitionStyles-B04wnOdp.js";import"./getPseudoElementBounds-CYjqwHHV.js";import"./chevron-down-DBmfy22Q.js";import"./index-ClQc1lw2.js";import"./error-DZJ58IBW.js";import"./BaseCbacBanner-6JODx7Er.js";import"./makeExternalStore-DMJmdL5l.js";import"./Tooltip-DlhLXTRo.js";import"./PopoverPopup-BkbEgiHB.js";import"./toNumber-BIO-lm5p.js";import"./useOsdkClient-zKxrJyOE.js";import"./DropdownField-BAO5CXTg.js";import"./withOsdkMetrics-BNsdErj_.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
