import{f as n,j as t}from"./iframe-CkYkhnUO.js";import{O as p}from"./object-table-BSdVNHfY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5bVl3pR5.js";import"./Table-DWRQ6ExA.js";import"./index-DBMthAic.js";import"./Dialog--VFGwdiJ.js";import"./cross-_AQ0EykC.js";import"./svgIconContainer-DcgYw830.js";import"./useBaseUiId-D7Fmfn3S.js";import"./InternalBackdrop-CeWoB8sd.js";import"./composite-C_MwASkq.js";import"./index-B28k0r7n.js";import"./index--kthvSpz.js";import"./index-D4lpnIIG.js";import"./useEventCallback-Xa_UTItV.js";import"./SkeletonBar-C9zXGMXT.js";import"./LoadingCell-hdJBGuy0.js";import"./ColumnConfigDialog-BoXqRYcP.js";import"./DraggableList-MY4aI91U.js";import"./search-g7eaTWrQ.js";import"./Input-D00RBv5_.js";import"./useControlled-CbXaJr7B.js";import"./Button-Dx3FpDnS.js";import"./small-cross-CHW25LXq.js";import"./ActionButton-Z0EfrB5b.js";import"./Checkbox-CAWIXuR2.js";import"./minus-CfbDzYng.js";import"./tick-BT6Y8LEg.js";import"./useValueChanged-CqPMNcio.js";import"./caret-down-DtfFh680.js";import"./CollapsiblePanel-BXZEn2w8.js";import"./MultiColumnSortDialog-DuLLnBIX.js";import"./MenuTrigger-Dfg_SvnI.js";import"./CompositeItem-BfoIkqzQ.js";import"./ToolbarRootContext-msZgpn0v.js";import"./getDisabledMountTransitionStyles-C1FICNhy.js";import"./getPseudoElementBounds-CaR5Ho7-.js";import"./chevron-down-CiZvCI1x.js";import"./index-Bi8vhfCA.js";import"./error-DIvhNdA5.js";import"./BaseCbacBanner-DePlpgO_.js";import"./makeExternalStore-D4dfw71_.js";import"./Tooltip-CreqE3lj.js";import"./PopoverPopup-DJ2fHEgA.js";import"./toNumber-DFpbyy5U.js";import"./useOsdkClient-B49LCL8p.js";import"./DropdownField-QijyChjV.js";import"./withOsdkMetrics-xePCT_7C.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
