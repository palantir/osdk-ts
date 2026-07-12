import{f as n,j as t}from"./iframe-BI4oyWQy.js";import{O as p}from"./object-table-BDjp6Z7Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Uu2Ie1vE.js";import"./Table-BRUD6cWp.js";import"./index-B4cN3ENE.js";import"./Dialog-DvgMMgQ5.js";import"./cross-BXWnhKHP.js";import"./svgIconContainer-DhVnukk2.js";import"./useBaseUiId-8x_XEMPm.js";import"./InternalBackdrop-DERlKQLK.js";import"./composite-D-66BLrp.js";import"./index-B5ybX1ZP.js";import"./index-RxrdGkU6.js";import"./index-BUCmpNYa.js";import"./useEventCallback-BKi7jVE5.js";import"./SkeletonBar-DofieG95.js";import"./LoadingCell-DB03gGXQ.js";import"./ColumnConfigDialog-BseI_96q.js";import"./DraggableList-C5_1Kk6K.js";import"./Input-r7-566OJ.js";import"./useControlled-ek7CZzpd.js";import"./Button-yfi4hM-9.js";import"./small-cross-BOOvjWrV.js";import"./ActionButton-CX99eco7.js";import"./Checkbox-GlFlU9HG.js";import"./minus-DcgrcxlX.js";import"./useValueChanged-BnlYbVgb.js";import"./caret-down-1suyiflx.js";import"./CollapsiblePanel-Dvk26ovj.js";import"./MultiColumnSortDialog-DI5JHibd.js";import"./MenuTrigger-BX5fEuld.js";import"./CompositeItem-BGIjPEv_.js";import"./ToolbarRootContext-D0geINdH.js";import"./getDisabledMountTransitionStyles-DqPHr7hO.js";import"./getPseudoElementBounds-vSdZc8Da.js";import"./chevron-down-v-E9IP1D.js";import"./index-mswfmxaX.js";import"./error-BtUWaEg7.js";import"./BaseCbacBanner-CcVXxa8O.js";import"./makeExternalStore-Czfove7z.js";import"./Tooltip-DdzTSyLa.js";import"./PopoverPopup-D0_dmbbH.js";import"./toNumber-DBkxUK0r.js";import"./useOsdkClient--A2eY1s5.js";import"./DropdownField-CbZpN5cU.js";import"./withOsdkMetrics-C-T3cVLi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
