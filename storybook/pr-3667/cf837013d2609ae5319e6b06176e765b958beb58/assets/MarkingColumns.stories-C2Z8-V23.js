import{f as n,j as t}from"./iframe-CkC73oIR.js";import{O as p}from"./object-table-DOdBLMw0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVjKSGYt.js";import"./Table-CD_9eZva.js";import"./index-BghU74SN.js";import"./Dialog-BbMiu5ak.js";import"./cross-27S7W3cE.js";import"./svgIconContainer-BkDeVAIM.js";import"./useBaseUiId-02kN-EDk.js";import"./InternalBackdrop-B0ifuEkd.js";import"./composite-DajyJhKa.js";import"./index-VTwQ5OSX.js";import"./index-9LrsfvlK.js";import"./index-CKy4xNcO.js";import"./useEventCallback-DfUvQbuL.js";import"./SkeletonBar-AXz6BxCb.js";import"./LoadingCell-Bn1-DOgb.js";import"./ColumnConfigDialog-Dfn6tXuh.js";import"./DraggableList-BoLbBPxj.js";import"./Input-1OIpS76K.js";import"./useControlled-3g7bUW7r.js";import"./Button-CnuKdRi7.js";import"./small-cross-C6HKpmxl.js";import"./ActionButton-X6J1mQ0p.js";import"./Checkbox-CAcmyAwD.js";import"./minus-DrUSrULE.js";import"./useValueChanged-CdAu9vXU.js";import"./caret-down-QbIlIa0Y.js";import"./CollapsiblePanel-CCa5Mj50.js";import"./MultiColumnSortDialog-BHCQBKPp.js";import"./MenuTrigger-szz2ENDu.js";import"./CompositeItem-fASMlinO.js";import"./ToolbarRootContext-DXse_dN2.js";import"./getDisabledMountTransitionStyles-BNlaEA8N.js";import"./getPseudoElementBounds-zl1KUEJN.js";import"./chevron-down-BgArLbJV.js";import"./index-Bpx0L6ET.js";import"./error-tDghXuy2.js";import"./BaseCbacBanner-CD5UzE1p.js";import"./makeExternalStore-DfVix1bx.js";import"./Tooltip-BXW7DHrn.js";import"./PopoverPopup-Cquv02kU.js";import"./toNumber-D4xBX094.js";import"./useOsdkClient-w-h07b3N.js";import"./DropdownField-iROKC4nl.js";import"./withOsdkMetrics-a59_Ocho.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
