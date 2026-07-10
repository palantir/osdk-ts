import{f as n,j as t}from"./iframe-CyxSYkSk.js";import{O as p}from"./object-table-BQrTTO1U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBpszJXl.js";import"./Table-CUuD_yed.js";import"./index-0yOzlcUJ.js";import"./Dialog-DsyD-ahv.js";import"./cross-j4qUAPs7.js";import"./svgIconContainer-C7MqzwhO.js";import"./useBaseUiId-bn-y7br3.js";import"./InternalBackdrop-Da_mVGm3.js";import"./composite-enLB4Ka2.js";import"./index-DII4TUgV.js";import"./index-C2GlS_zI.js";import"./index-Dn9h67Xb.js";import"./useEventCallback-DYWUDJ99.js";import"./SkeletonBar-CbZvZgx8.js";import"./LoadingCell-B_zHn35b.js";import"./ColumnConfigDialog-D8oL8Mww.js";import"./DraggableList-DH2v3uy2.js";import"./search-BE1YWkMj.js";import"./Input-DUGKsc-x.js";import"./useControlled-C88ZdskF.js";import"./Button-w8fSFCzy.js";import"./small-cross-DHlkM0cj.js";import"./ActionButton-Ch2ZGJYT.js";import"./Checkbox-DKFzBN7E.js";import"./useValueChanged-BlWuoYhy.js";import"./CollapsiblePanel-CsQAfhDg.js";import"./MultiColumnSortDialog-Jm4NyyHY.js";import"./MenuTrigger-As1SY0EJ.js";import"./CompositeItem-v_3aPTjT.js";import"./ToolbarRootContext-C6YIsUhu.js";import"./getDisabledMountTransitionStyles-Cc9hoZpx.js";import"./getPseudoElementBounds-b8SphpHN.js";import"./chevron-down-ljdNq6bJ.js";import"./index-BuQG7SNg.js";import"./error-BlqOe69A.js";import"./BaseCbacBanner-B8Heyh1J.js";import"./makeExternalStore-BcXeLiDJ.js";import"./Tooltip-DeAh8h8k.js";import"./PopoverPopup-CvzhjT3o.js";import"./toNumber-B0ouGizM.js";import"./useOsdkClient-B6CSG8p7.js";import"./tick-DA5H2mKQ.js";import"./DropdownField-F8LzgPd3.js";import"./withOsdkMetrics-Duy0EoDC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
