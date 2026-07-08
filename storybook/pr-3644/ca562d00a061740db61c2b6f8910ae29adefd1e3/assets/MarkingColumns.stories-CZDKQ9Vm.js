import{f as n,j as t}from"./iframe-CuiKkwwG.js";import{O as p}from"./object-table-BRZUqBcw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UfN2IsO2.js";import"./Table-B1Owjzw2.js";import"./index-Dlf_uAgv.js";import"./Dialog-B-MT5ACH.js";import"./cross-ClsL6Oym.js";import"./svgIconContainer-CGaU8KkA.js";import"./useBaseUiId-Nay19rjG.js";import"./InternalBackdrop-BxnVPcA5.js";import"./composite-Dpj2Ofmh.js";import"./index-miFttS1J.js";import"./index-DZQ9ChWc.js";import"./index-DLWZHi5B.js";import"./useEventCallback-CVRZrMGE.js";import"./SkeletonBar-85Doz1Pz.js";import"./LoadingCell-DjxvqExH.js";import"./ColumnConfigDialog-BbrDTF8Z.js";import"./DraggableList-DAIO4tbP.js";import"./search-DqFyHzjH.js";import"./Input-a6gyL33e.js";import"./useControlled-BtnNsy4-.js";import"./Button-BVUZT5h4.js";import"./small-cross-D99Uepqj.js";import"./ActionButton-DgZhFU-u.js";import"./Checkbox-DoU43Kvk.js";import"./useValueChanged-DczdzjOF.js";import"./CollapsiblePanel-DgS_3Fe1.js";import"./MultiColumnSortDialog-CL3gHRKc.js";import"./MenuTrigger-y-gNeWn1.js";import"./CompositeItem-DI9sV6CD.js";import"./ToolbarRootContext-BXvqC9VJ.js";import"./getDisabledMountTransitionStyles-Dni2U9Ja.js";import"./getPseudoElementBounds-B1WNuy2m.js";import"./chevron-down-D5GGsG5z.js";import"./index-BlYDKu52.js";import"./error-BGfTejWa.js";import"./BaseCbacBanner-DiFvW4Zx.js";import"./makeExternalStore-64FZptrL.js";import"./Tooltip-DOxaH5-k.js";import"./PopoverPopup-C6cvMRi9.js";import"./toNumber-CMILpALh.js";import"./useOsdkClient-DF-zalJ0.js";import"./tick-cJp3Hkfx.js";import"./DropdownField-C5n_1_Wy.js";import"./withOsdkMetrics-B-SDfUMz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
