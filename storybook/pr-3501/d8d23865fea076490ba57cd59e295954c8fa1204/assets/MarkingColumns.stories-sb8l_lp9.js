import{f as n,j as t}from"./iframe-Nh0aerxW.js";import{O as p}from"./object-table-BEc8s0RR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YP4vgwcw.js";import"./Table-C5Xm5HQL.js";import"./index-DRutxzog.js";import"./Dialog-CWAAhgqP.js";import"./cross-DoRCRCae.js";import"./svgIconContainer-Cq5Vv4-8.js";import"./useBaseUiId-THJcA4gc.js";import"./InternalBackdrop-B1L0SK-d.js";import"./composite-DlRDzuGh.js";import"./index-32EFWuL-.js";import"./index-By6RMe6s.js";import"./index-DsqgQvLV.js";import"./useEventCallback-DeR51_h0.js";import"./SkeletonBar-cQSum6Bl.js";import"./LoadingCell-BR1mEvUy.js";import"./ColumnConfigDialog-Z2sbo01v.js";import"./DraggableList-C3OqANcR.js";import"./Input-pUjZoQO1.js";import"./useControlled-DagUJ5Qi.js";import"./Button-CH40khuz.js";import"./small-cross-Dd3x1h4Q.js";import"./ActionButton-Vy65wuML.js";import"./Checkbox-Bk9pW44k.js";import"./minus-DjpsqPqr.js";import"./useValueChanged-CKJnlBEn.js";import"./caret-down-Be_0V0_4.js";import"./CollapsiblePanel-1qPjlq0K.js";import"./MultiColumnSortDialog-CojHVQoM.js";import"./MenuTrigger-ZoZQWZdt.js";import"./CompositeItem-CwrwrlTN.js";import"./ToolbarRootContext-BECd8-y4.js";import"./getDisabledMountTransitionStyles-BYjDDo8j.js";import"./getPseudoElementBounds-BP_O18Te.js";import"./chevron-down-BL624FME.js";import"./index-2MVHZTil.js";import"./error-loM05YdI.js";import"./BaseCbacBanner-CdJzjNEB.js";import"./makeExternalStore-BSxtiBG-.js";import"./Tooltip-DiIcBWne.js";import"./PopoverPopup-DTmNO73x.js";import"./toNumber-yobwRJdY.js";import"./useOsdkClient-b8fajUSJ.js";import"./DropdownField-Dh-ZwPUh.js";import"./useStableShapeDefinition-DxS0arKw.js";import"./withOsdkMetrics-D7uQ6iMK.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
