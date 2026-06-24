import{f as n,j as t}from"./iframe--43Ewrlk.js";import{O as p}from"./object-table-BUbqdy1Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dm0X-Bes.js";import"./Table-CF_zvB9F.js";import"./index-DtgflmJh.js";import"./Dialog-BFOg4cXx.js";import"./cross-Da6IZVwY.js";import"./svgIconContainer-BL2szQ7R.js";import"./useBaseUiId-i7N0UXVx.js";import"./InternalBackdrop-BDQpViiI.js";import"./composite-CDGHFm-c.js";import"./index-BvDiEyjq.js";import"./index-TpYgAHel.js";import"./index-DfM_1bhK.js";import"./useEventCallback-FgUDTjse.js";import"./SkeletonBar-e_vaC7Sp.js";import"./LoadingCell-CVimZQbS.js";import"./ColumnConfigDialog-tjRMqzqc.js";import"./DraggableList-DNXDbBVh.js";import"./Input-n0J61hIJ.js";import"./useControlled-cH02znyj.js";import"./Button-CdLh-0QB.js";import"./small-cross-BeT5LxaV.js";import"./ActionButton-Ck1QF0qr.js";import"./Checkbox-D6c_laZx.js";import"./minus-COW11Ldg.js";import"./useValueChanged-DJDPKica.js";import"./caret-down-CuNBkyHj.js";import"./CollapsiblePanel-AcxG_elj.js";import"./MultiColumnSortDialog-C6z3RT1W.js";import"./MenuTrigger-BoCc0eVD.js";import"./CompositeItem-BDagXcv5.js";import"./ToolbarRootContext-CKngyZC_.js";import"./getDisabledMountTransitionStyles-Cl-k3tv6.js";import"./getPseudoElementBounds-Cj-EbY18.js";import"./chevron-down-CNRcjPbH.js";import"./index-TweFDx49.js";import"./error-BbTzoBZ7.js";import"./BaseCbacBanner-Btd1ZM7M.js";import"./makeExternalStore-CRunL5x4.js";import"./Tooltip-CLLttedP.js";import"./PopoverPopup-D9DxXRAK.js";import"./toNumber-DomLKLvK.js";import"./useOsdkClient-B3AaxSeU.js";import"./DropdownField-BXWM_7xE.js";import"./withOsdkMetrics-CbalMJsh.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
