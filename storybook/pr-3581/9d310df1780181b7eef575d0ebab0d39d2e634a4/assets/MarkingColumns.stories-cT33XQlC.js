import{f as n,j as t}from"./iframe-rYhliD8g.js";import{O as p}from"./object-table-3xb17fRt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-X9sQiBTg.js";import"./Table-kZmlPSqF.js";import"./index-q1mgknhf.js";import"./Dialog-CjL3HKmK.js";import"./cross-CPr3MUaQ.js";import"./svgIconContainer-DJ8j44Ny.js";import"./useBaseUiId-CdgQVAaj.js";import"./InternalBackdrop-v-ylaNKC.js";import"./composite-BNI9ZcnX.js";import"./index-CzE9pYvT.js";import"./index-Bphild-4.js";import"./index-C9KouQEd.js";import"./useEventCallback-DVibYURh.js";import"./SkeletonBar-Ddd66Waw.js";import"./LoadingCell-CFpnbL2B.js";import"./ColumnConfigDialog-CzUG3O2r.js";import"./DraggableList-BdZMUqX4.js";import"./search-BzqQNgVY.js";import"./Input-WMLBvEyZ.js";import"./useControlled-Ogvj-xts.js";import"./Button-BN8r-qWP.js";import"./small-cross-DcEEND5Z.js";import"./ActionButton-BM81A1Gr.js";import"./Checkbox-fmGdxuLY.js";import"./minus-hJL7npDc.js";import"./tick-BZ_BapFN.js";import"./useValueChanged-BJKPb2oe.js";import"./caret-down-CvsEdzAQ.js";import"./CollapsiblePanel-BhyFek-j.js";import"./MultiColumnSortDialog-TTC4HpYB.js";import"./MenuTrigger-BCxaZTjX.js";import"./CompositeItem-BvHeJvz6.js";import"./ToolbarRootContext-C7pt0CP2.js";import"./getDisabledMountTransitionStyles-C48kiChS.js";import"./getPseudoElementBounds-BSWOq2tT.js";import"./chevron-down-CX05pV8G.js";import"./index-D3VtxeUF.js";import"./error-D4oWJjMt.js";import"./BaseCbacBanner-CNb8cRre.js";import"./makeExternalStore-Dntyn6J4.js";import"./Tooltip-D6UOhF4f.js";import"./PopoverPopup-B34GAHpX.js";import"./toNumber-DxeddJjJ.js";import"./useOsdkClient-CQ4POGj2.js";import"./DropdownField-Dq-9Xfi8.js";import"./withOsdkMetrics-B7rARLuJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
