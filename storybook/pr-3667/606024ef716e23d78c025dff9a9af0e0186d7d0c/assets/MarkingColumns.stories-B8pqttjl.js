import{f as n,j as t}from"./iframe-BnaIrsiB.js";import{O as p}from"./object-table-DreZNg5t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFuQGFvG.js";import"./Table-y-F8dHcx.js";import"./index-SaxY5iXK.js";import"./Dialog-BR2JkufI.js";import"./cross-3K3hoR6J.js";import"./svgIconContainer-B5mIis-2.js";import"./useBaseUiId-Bbm5u-TV.js";import"./InternalBackdrop-BMnK4I5t.js";import"./composite-BLeP4MfM.js";import"./index-BpYjefXK.js";import"./index-CsFrCkCE.js";import"./index-CbTFW52b.js";import"./useEventCallback-CWlnnuQp.js";import"./SkeletonBar-CvPZEiXx.js";import"./LoadingCell-BcnsQJQJ.js";import"./ColumnConfigDialog-CHJW60-s.js";import"./DraggableList-diZeRGaZ.js";import"./Input-D7XPD2sU.js";import"./useControlled-DmxvkasP.js";import"./Button-Cl3tnJKX.js";import"./small-cross-DUIPSHe1.js";import"./ActionButton-CrU4NFRV.js";import"./Checkbox-C_9VeVEr.js";import"./minus-CcbIqMZ-.js";import"./useValueChanged-B7jkEckv.js";import"./caret-down-jZD1R44l.js";import"./CollapsiblePanel-BS6hAALn.js";import"./MultiColumnSortDialog-C9O0U5on.js";import"./MenuTrigger-Bl3tZ2m5.js";import"./CompositeItem-B7MB-xVD.js";import"./ToolbarRootContext-CWdfpnuE.js";import"./getDisabledMountTransitionStyles-B10pwTC3.js";import"./getPseudoElementBounds-CFWdOqEG.js";import"./chevron-down-BBvuYneU.js";import"./index-CzY9LSdG.js";import"./error-BB8oM1hx.js";import"./BaseCbacBanner-CcWb1u0-.js";import"./makeExternalStore-_k-SPU-s.js";import"./Tooltip-DIByPopO.js";import"./PopoverPopup-DJC1ij4V.js";import"./toNumber-eJme5rF7.js";import"./useOsdkClient-BJue9KvG.js";import"./DropdownField-BMwDuF_k.js";import"./withOsdkMetrics-DOfbIsqW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
