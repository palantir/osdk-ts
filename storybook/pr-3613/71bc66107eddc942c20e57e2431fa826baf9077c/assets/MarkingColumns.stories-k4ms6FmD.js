import{f as n,j as t}from"./iframe-YXA8sZf2.js";import{O as p}from"./object-table-Da4pnK_q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BbZxoWgu.js";import"./Table-BeCqc3eo.js";import"./index-Dvhc_Ual.js";import"./Dialog--MGAqlRd.js";import"./cross-eT7KFiF7.js";import"./svgIconContainer-mXWoL_ON.js";import"./useBaseUiId-DzvBIhKt.js";import"./InternalBackdrop-CTjGBE5C.js";import"./composite--po3qHs9.js";import"./index-D7dVf2bs.js";import"./index-BOyaXysV.js";import"./index-DLIJxSt4.js";import"./useEventCallback-DI6hx6I6.js";import"./SkeletonBar-BLL0FvSp.js";import"./LoadingCell-DmkGGiwn.js";import"./ColumnConfigDialog-A8-CFuQX.js";import"./DraggableList-DWOhPhpH.js";import"./search-BQODvkCZ.js";import"./Input-BtqwlxVC.js";import"./useControlled-2qyM_vP7.js";import"./Button-D4SV1QwU.js";import"./small-cross-B74IhWgO.js";import"./ActionButton-DKo7T2o6.js";import"./Checkbox-B__58Qvq.js";import"./minus-CMkvhA4f.js";import"./tick-Czdt0WzH.js";import"./useValueChanged-D5K3sjZT.js";import"./caret-down-BifQrtDv.js";import"./CollapsiblePanel-CX0zR31N.js";import"./MultiColumnSortDialog-BD1X-5gl.js";import"./MenuTrigger-BoCXIDKt.js";import"./CompositeItem-9rkDuYhF.js";import"./ToolbarRootContext-BDdl37FF.js";import"./getDisabledMountTransitionStyles-CHX--7aQ.js";import"./getPseudoElementBounds-m9tec1d_.js";import"./chevron-down-DjrBjvP3.js";import"./index-mIv9kygz.js";import"./error-DxL-Zrkb.js";import"./BaseCbacBanner-CO2emBWl.js";import"./makeExternalStore-nLOTqvq6.js";import"./Tooltip-BheJqc3m.js";import"./PopoverPopup-CyQevCXl.js";import"./toNumber-BIzmEfXe.js";import"./useOsdkClient-DN3DIVmp.js";import"./DropdownField-BXCHBgLt.js";import"./withOsdkMetrics-CDbdP1ws.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
