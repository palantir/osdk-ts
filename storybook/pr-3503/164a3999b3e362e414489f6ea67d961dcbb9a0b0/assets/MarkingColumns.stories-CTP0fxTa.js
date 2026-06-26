import{f as n,j as t}from"./iframe-xm-duFe0.js";import{O as p}from"./object-table-EsiZuIEw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-NFYB5vXP.js";import"./Table-Cm53zN6X.js";import"./index-WEiqDgp8.js";import"./Dialog-1-JNose2.js";import"./cross-YK87Ar5f.js";import"./svgIconContainer-8_mKIt7h.js";import"./useBaseUiId-Coj7h1Ed.js";import"./InternalBackdrop-DRht5ZUT.js";import"./composite-CnmhQz7L.js";import"./index-Zh0rcv83.js";import"./index-DAvbniGs.js";import"./index-L6xRvyxc.js";import"./useEventCallback-CHqLVHue.js";import"./SkeletonBar-BIXSZF68.js";import"./LoadingCell-BbIiRMoI.js";import"./ColumnConfigDialog-BD_qYPm1.js";import"./DraggableList-Dqup3WzA.js";import"./Input-B63a4PRY.js";import"./useControlled-ChvEkrV8.js";import"./Button-D2nZ-be_.js";import"./small-cross-BITI5gVo.js";import"./ActionButton-B5m5ebAE.js";import"./Checkbox-n_qKTM9C.js";import"./minus-CSaYt0QR.js";import"./useValueChanged-COwsMEs_.js";import"./caret-down-CaRQHhm9.js";import"./CollapsiblePanel--V7ACpOO.js";import"./MultiColumnSortDialog-Ww35I83a.js";import"./MenuTrigger-BIGzIvZe.js";import"./CompositeItem-SOIJpvAO.js";import"./ToolbarRootContext-Ch9NH9nw.js";import"./getDisabledMountTransitionStyles-BIKB896X.js";import"./getPseudoElementBounds-D7MyKW6A.js";import"./chevron-down-BPEwPS--.js";import"./index-B2HpKLbv.js";import"./error-DoEWmbD3.js";import"./BaseCbacBanner-CLYdKoBD.js";import"./makeExternalStore-DFofs-Wb.js";import"./Tooltip-CQ3YlkNh.js";import"./PopoverPopup-MoxnIVLu.js";import"./toNumber-B5xN_3HM.js";import"./useOsdkClient-BIfcktTK.js";import"./DropdownField-CiARGGK6.js";import"./withOsdkMetrics-BP9Fn21E.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
