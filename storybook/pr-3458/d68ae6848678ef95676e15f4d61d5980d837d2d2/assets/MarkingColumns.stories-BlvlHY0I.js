import{f as n,j as t}from"./iframe-jMWcMx3M.js";import{O as p}from"./object-table-rQJQAseZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CSXSsBVj.js";import"./Table-CYjsXePD.js";import"./index-CNFmk-Ka.js";import"./Dialog-DqlrEXet.js";import"./cross-CGegxKx_.js";import"./svgIconContainer-Cl_c0nbT.js";import"./useBaseUiId-BzPi_F_r.js";import"./InternalBackdrop-DIZ6AHFE.js";import"./composite-CsXyl166.js";import"./index-DXrPGVIO.js";import"./index-ILeGXsSD.js";import"./index-CAuTQroX.js";import"./useEventCallback-Ciy0K5ww.js";import"./SkeletonBar-CxesU5Fs.js";import"./LoadingCell-B1z3DppB.js";import"./ColumnConfigDialog-nRhHRL9V.js";import"./DraggableList-CzZNSBHY.js";import"./search-CErA-aqQ.js";import"./Input-DFBBZ04U.js";import"./useControlled-DfdvD25L.js";import"./Button-DwXiKTO2.js";import"./small-cross-C3vvtMOc.js";import"./ActionButton-CVzqmHRI.js";import"./Checkbox-CiE8Ccsr.js";import"./useValueChanged-Cg-cyLt1.js";import"./CollapsiblePanel-CPqRqFF-.js";import"./MultiColumnSortDialog-BdYeBbcu.js";import"./MenuTrigger-0RZ23arB.js";import"./CompositeItem-24qPgnKd.js";import"./ToolbarRootContext-B_AoYUT0.js";import"./getDisabledMountTransitionStyles-BY_6pXbg.js";import"./getPseudoElementBounds-DFHgxWAt.js";import"./chevron-down-CQNSuwwo.js";import"./index-DLeNEXQ6.js";import"./error-DMe8Y5ev.js";import"./BaseCbacBanner-DWjil8ev.js";import"./makeExternalStore-DnspD3NQ.js";import"./Tooltip-BxL1QfHA.js";import"./PopoverPopup-Cbagboeh.js";import"./toNumber-BDv1GoSe.js";import"./useOsdkClient-BsdLM7L0.js";import"./tick-BKghoLo0.js";import"./DropdownField-DJ8VCAsr.js";import"./withOsdkMetrics-Bd6JOpY_.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
