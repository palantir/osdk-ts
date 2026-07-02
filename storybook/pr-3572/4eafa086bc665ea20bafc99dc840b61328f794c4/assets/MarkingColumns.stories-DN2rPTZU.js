import{f as n,j as t}from"./iframe-zqPmFplz.js";import{O as p}from"./object-table-By7QcYxt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cm-i8LsQ.js";import"./Table-BvUT6fHb.js";import"./index-CDabZ30i.js";import"./Dialog-wsD7FqZD.js";import"./cross-CnxfX7uP.js";import"./svgIconContainer-CojLGXmi.js";import"./useBaseUiId-Ctr8tfPF.js";import"./InternalBackdrop-C2aFar2o.js";import"./composite-NMQNEue1.js";import"./index-Bd0utzsO.js";import"./index-ChjI14_0.js";import"./index-BNmuzGLC.js";import"./useEventCallback-BzQeKkNO.js";import"./SkeletonBar-DOwk0yCn.js";import"./LoadingCell-grFfccDo.js";import"./ColumnConfigDialog-KAKxNUr1.js";import"./DraggableList-D4Y3D0b0.js";import"./search-D72tZ2FA.js";import"./Input-B3YqLlUw.js";import"./useControlled-CMoNYK3-.js";import"./Button-CONCwakB.js";import"./small-cross-DhlZjaeW.js";import"./ActionButton-BLJvzZTE.js";import"./Checkbox-QE26ALaN.js";import"./minus-DO21-9Eu.js";import"./tick-DibqkPG9.js";import"./useValueChanged-Ccxa-mo9.js";import"./caret-down-BLutYZiY.js";import"./CollapsiblePanel-C30cvjnS.js";import"./MultiColumnSortDialog-B1bc7o51.js";import"./MenuTrigger-C8_xjZaI.js";import"./CompositeItem-CSkQicbg.js";import"./ToolbarRootContext-C47y4zj9.js";import"./getDisabledMountTransitionStyles-w9gx4U6_.js";import"./getPseudoElementBounds-BsnJIO3y.js";import"./chevron-down-BguXyqtq.js";import"./index-BTd-wCt1.js";import"./error-DvE3gtxW.js";import"./BaseCbacBanner-B4RUlgSy.js";import"./makeExternalStore-BndIEMaq.js";import"./Tooltip-vTaZxYdF.js";import"./PopoverPopup-_-gqeJN5.js";import"./toNumber-BVrluHKY.js";import"./useOsdkClient-BBU-tgFy.js";import"./DropdownField-g8vYkZjM.js";import"./withOsdkMetrics-z75ah0j8.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
