import{f as n,j as t}from"./iframe-CGAAWjUk.js";import{O as p}from"./object-table-BZlLGqvs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7Q85Sz5.js";import"./index-DVNbGEom.js";import"./Dialog-CIPdQzzS.js";import"./cross-BMOnILF9.js";import"./svgIconContainer-C5cq20xn.js";import"./useBaseUiId-q2gn17YU.js";import"./InternalBackdrop-DlCmV2DU.js";import"./composite-TSR6i9AI.js";import"./index-CAq0mONR.js";import"./index-cfs0j-RS.js";import"./index-De_PRb-G.js";import"./useEventCallback-BUwzpQG6.js";import"./SkeletonBar-Cg0rZugM.js";import"./LoadingCell-BhmR5vaV.js";import"./ColumnConfigDialog-e5lVvbA5.js";import"./DraggableList-4KWpoLF-.js";import"./search-B1x9qoKl.js";import"./Input-DcY1pFOE.js";import"./useControlled-BH1kMEtF.js";import"./Button-C3seCtRt.js";import"./small-cross-WaOM7yTh.js";import"./ActionButton-ydkbhU8f.js";import"./Checkbox-Cif29S8E.js";import"./useValueChanged-B6LZJm-I.js";import"./CollapsiblePanel-BDQXixbq.js";import"./MultiColumnSortDialog-B1waxiAF.js";import"./MenuTrigger-rkGpkOUN.js";import"./CompositeItem-C6tKhX8Q.js";import"./ToolbarRootContext-Dg97O1ft.js";import"./getDisabledMountTransitionStyles-BAG4qb7O.js";import"./getPseudoElementBounds-C9AcnV7g.js";import"./chevron-down-BzIR7Dic.js";import"./index-CpMNxW-6.js";import"./error-CYiBScrz.js";import"./BaseCbacBanner-D3-ekCj4.js";import"./makeExternalStore-dSMUltpM.js";import"./Tooltip-CnB77xDQ.js";import"./PopoverPopup-v9CSnE1B.js";import"./toNumber-BJXu2EHJ.js";import"./useOsdkClient-Dv52rRRB.js";import"./tick-CcekCI9q.js";import"./DropdownField-DB3ruQd4.js";import"./withOsdkMetrics-CUrrt16x.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
