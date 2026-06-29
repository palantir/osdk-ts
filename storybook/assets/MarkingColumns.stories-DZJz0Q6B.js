import{f as n,j as t}from"./iframe-BlYZmXs9.js";import{O as p}from"./object-table-C8cUJffS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C3ON6wtF.js";import"./index-BUL-lt5N.js";import"./Dialog-BVtveqs8.js";import"./cross-C982S9ak.js";import"./svgIconContainer-BVUo_9rP.js";import"./useBaseUiId-Blsog-e5.js";import"./InternalBackdrop-Dt8ssAPu.js";import"./composite-DHiHZOru.js";import"./index-cXUFybkK.js";import"./index-Dmn3z_9A.js";import"./index-k-BejRwY.js";import"./useEventCallback-BDSKfyIt.js";import"./SkeletonBar-CRjpB1HU.js";import"./LoadingCell-5i2rZFZG.js";import"./ColumnConfigDialog-DkSHFGV5.js";import"./DraggableList-Bqh7CLnw.js";import"./search-BR33OvS9.js";import"./Input-DuGHEzfn.js";import"./useControlled-DjbwcFu1.js";import"./Button-BWp1RSGI.js";import"./small-cross-Dzy3HIKS.js";import"./ActionButton-eUEB-s-I.js";import"./Checkbox-DHbC2cFQ.js";import"./minus-BEgfNivH.js";import"./tick-BfkXiNmt.js";import"./useValueChanged-DssESrUT.js";import"./caret-down-BxJxGBs-.js";import"./CollapsiblePanel-C0wOnOJV.js";import"./MultiColumnSortDialog-BEWQJuhW.js";import"./MenuTrigger-mb7iiwp6.js";import"./CompositeItem-CICx_1t9.js";import"./ToolbarRootContext-D4buOrM_.js";import"./getDisabledMountTransitionStyles-BxuZRoLx.js";import"./getPseudoElementBounds-BYtUaBm3.js";import"./chevron-down-C2ZRVQYp.js";import"./index-CKXiJa5E.js";import"./error-CVQRILWw.js";import"./BaseCbacBanner-CnNzVX39.js";import"./makeExternalStore-C3CHSKkC.js";import"./Tooltip-aeNjUd6S.js";import"./PopoverPopup-CzDHpy7F.js";import"./toNumber-CGK3woSP.js";import"./useOsdkClient-DRHaKzCI.js";import"./DropdownField-GGX92r1J.js";import"./withOsdkMetrics-DCT1OPEB.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
