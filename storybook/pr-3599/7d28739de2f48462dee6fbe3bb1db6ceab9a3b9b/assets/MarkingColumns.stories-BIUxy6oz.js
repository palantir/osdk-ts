import{f as n,j as t}from"./iframe-DWsQ1LUa.js";import{O as p}from"./object-table-0J09JQzw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fiqd5K5n.js";import"./Table-Bf8pRJgF.js";import"./index-CWvV8Hb_.js";import"./Dialog-B3mg_Qt3.js";import"./cross-B7a2Hn3X.js";import"./svgIconContainer-lDiEyAag.js";import"./useBaseUiId-CZqpQVxb.js";import"./InternalBackdrop-BaU73lj5.js";import"./composite-B0Mu8PWO.js";import"./index-D0qoHOWD.js";import"./index-B_thgqpa.js";import"./index-DFkZzoNr.js";import"./useEventCallback-9qu1FVD3.js";import"./SkeletonBar-CMApSRFY.js";import"./LoadingCell-CPOg_5Pf.js";import"./ColumnConfigDialog-BUfgtOlf.js";import"./DraggableList-B7UWmE0S.js";import"./search-NrlmniVl.js";import"./Input-VXafaHMn.js";import"./useControlled-CmT34W1I.js";import"./Button-C-T5uRcP.js";import"./small-cross-DJKunNUc.js";import"./ActionButton-BbfClv2_.js";import"./Checkbox-DKctoKQh.js";import"./minus-DNwqRfyN.js";import"./tick-CzB9_uan.js";import"./useValueChanged-sCqwkB8G.js";import"./caret-down-Cj15OnJY.js";import"./CollapsiblePanel-EavfHdrf.js";import"./MultiColumnSortDialog-CMP3CIaK.js";import"./MenuTrigger-DcNa2x0Y.js";import"./CompositeItem-CnAQaBgX.js";import"./ToolbarRootContext-Cp0z_F8h.js";import"./getDisabledMountTransitionStyles-NN3Yn49p.js";import"./getPseudoElementBounds-C6u9GBmN.js";import"./chevron-down-5gvvazAJ.js";import"./index-Dsxa_rz9.js";import"./error-aZs5Xspb.js";import"./BaseCbacBanner-DKuCOBxx.js";import"./makeExternalStore-B6MahPy8.js";import"./Tooltip-B0CF57Jj.js";import"./PopoverPopup-DHN5IGxu.js";import"./toNumber-CCjZRCf_.js";import"./useOsdkClient-CE4ULwfV.js";import"./DropdownField-DVJBvOq1.js";import"./withOsdkMetrics-Ocz7dUJD.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
