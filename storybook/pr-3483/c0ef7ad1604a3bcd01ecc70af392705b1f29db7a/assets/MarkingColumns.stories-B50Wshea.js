import{f as n,j as t}from"./iframe-Bd4e_c4C.js";import{O as p}from"./object-table-sly2e-tG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5bsUCg0y.js";import"./Table-CNH_eGsv.js";import"./index-8zwV4JUV.js";import"./Dialog-DEQVfX7H.js";import"./cross-B6r_yiO_.js";import"./svgIconContainer-BwBQeW3J.js";import"./useBaseUiId-D-nOoqcA.js";import"./InternalBackdrop-D11e-4ud.js";import"./composite-TNcbR0Nf.js";import"./index-BATG7eU0.js";import"./index-B9pqn0Jn.js";import"./index-B4Au2E_k.js";import"./useEventCallback-Dv1ISW2D.js";import"./SkeletonBar-CGRRWBoy.js";import"./LoadingCell-_fu5dlf1.js";import"./ColumnConfigDialog-DV-15hD4.js";import"./DraggableList-Dy5FEl4U.js";import"./Input-Bilv7Eok.js";import"./useControlled-DIwphUIH.js";import"./Button-DE7Oat1u.js";import"./small-cross-SaE41ys6.js";import"./ActionButton-B6pqGZXy.js";import"./Checkbox-BlyeG0Ha.js";import"./minus-BkvQoQv2.js";import"./useValueChanged-BiGPMkku.js";import"./caret-down-BNY2yMZ0.js";import"./CollapsiblePanel-CKyoqKgB.js";import"./MultiColumnSortDialog-C1OXbBcl.js";import"./MenuTrigger-DTuvcBTt.js";import"./CompositeItem-DUtJM4r4.js";import"./ToolbarRootContext-BYX2mIW9.js";import"./getDisabledMountTransitionStyles-TpgpatO9.js";import"./getPseudoElementBounds-DmO1g42_.js";import"./chevron-down-BKImZJXc.js";import"./index--xQC6urW.js";import"./error-BToHOsa4.js";import"./Tooltip-CmetGJSG.js";import"./PopoverPopup-D6KrByqC.js";import"./toNumber-CSGohdG4.js";import"./useOsdkClient-DDPUNe_A.js";import"./DropdownField-BrMhbPiO.js";import"./makeExternalStore-_jwnLTC5.js";import"./withOsdkMetrics-DdhctzSj.js";const tr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
