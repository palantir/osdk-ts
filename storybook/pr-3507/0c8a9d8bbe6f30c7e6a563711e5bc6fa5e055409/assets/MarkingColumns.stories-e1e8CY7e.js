import{f as n,j as t}from"./iframe-DeHTg1tG.js";import{O as p}from"./object-table-DP8rY_QH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EJwzNQLU.js";import"./Table-Da1JcJfx.js";import"./index-ro7AvuIc.js";import"./Dialog-a_3j4i1j.js";import"./cross-9ntTTgbT.js";import"./svgIconContainer-Lk64Tlsf.js";import"./useBaseUiId-C0NRjzKl.js";import"./InternalBackdrop-DogLhwLv.js";import"./composite-CB8XXB9I.js";import"./index-BlwfbVod.js";import"./index-tnRCpKuy.js";import"./index-OcEguPI3.js";import"./useEventCallback-BUD6r9IK.js";import"./SkeletonBar-COBQEB9G.js";import"./LoadingCell-KJTlvCyr.js";import"./ColumnConfigDialog-B7rKhi8M.js";import"./DraggableList-CHUdrHOr.js";import"./Input-BiN32nY5.js";import"./useControlled-ClFeeM_W.js";import"./Button-cxzLacU6.js";import"./small-cross-Ci3X4BoS.js";import"./ActionButton-DZx2s7oN.js";import"./Checkbox-CnVRBN9f.js";import"./minus-g5jyZnLm.js";import"./useValueChanged-Ba2RV4iY.js";import"./caret-down-DmBfFsdX.js";import"./CollapsiblePanel-DtAgkHcT.js";import"./MultiColumnSortDialog-BxS8AAEH.js";import"./MenuTrigger-BpR3KwRB.js";import"./CompositeItem-Cimn9Ixc.js";import"./ToolbarRootContext-DnXuKCx7.js";import"./getDisabledMountTransitionStyles-C6sEo0bF.js";import"./getPseudoElementBounds-CG-UnFcJ.js";import"./chevron-down-zU7hHmOr.js";import"./index-GBEKjqFw.js";import"./error-CoPAJ4qi.js";import"./BaseCbacBanner-DLGYzFCR.js";import"./makeExternalStore-rlAonaJe.js";import"./Tooltip-C6evSRPA.js";import"./PopoverPopup-DUH6ZOtv.js";import"./toNumber-DPVZoAeu.js";import"./useOsdkClient-B1wkU1Z5.js";import"./DropdownField-CbTJYx49.js";import"./useShape-CDq4-oOI.js";import"./withOsdkMetrics-BhvCNdhA.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
