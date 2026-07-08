import{f as n,j as t}from"./iframe-Ba_yScUR.js";import{O as p}from"./object-table-m7CO7l8m.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-IJpyRu8x.js";import"./Table-rXgA06HB.js";import"./index-DmdWqsF0.js";import"./Dialog-DWrMTV07.js";import"./cross-DzoKopMm.js";import"./svgIconContainer-HHegecv0.js";import"./useBaseUiId-DJn92JIx.js";import"./InternalBackdrop-BFhozGGq.js";import"./composite-C01Tb6yu.js";import"./index-BkiBi9Wg.js";import"./index-D6d4Acn2.js";import"./index-BKGxtgTR.js";import"./useEventCallback-Cbka5zl5.js";import"./SkeletonBar-CScxe9Tu.js";import"./LoadingCell-BPUtKzfC.js";import"./ColumnConfigDialog-DAqKk5vx.js";import"./DraggableList-CUKkfkoc.js";import"./search-BdkdtwH9.js";import"./Input-C6JTtoom.js";import"./useControlled-w8mFcKfd.js";import"./Button-xdPBbPzF.js";import"./small-cross-DA24rxKX.js";import"./ActionButton-Dc0dbFVb.js";import"./Checkbox-BkNIqGT4.js";import"./useValueChanged-ZVQyImij.js";import"./CollapsiblePanel-CW0vtrwO.js";import"./MultiColumnSortDialog-et0KcKtw.js";import"./MenuTrigger-_rA21viM.js";import"./CompositeItem-rllQ73bp.js";import"./ToolbarRootContext-DGb7OxDN.js";import"./getDisabledMountTransitionStyles-7IREnEX9.js";import"./getPseudoElementBounds-BucRyWLd.js";import"./chevron-down-a5MKrIoV.js";import"./index-CtadddT9.js";import"./error-J2vgcaCR.js";import"./BaseCbacBanner-NOHJN8A5.js";import"./makeExternalStore-BPXa91cY.js";import"./Tooltip-a7rV1XnT.js";import"./PopoverPopup-C-Q53KFY.js";import"./toNumber-xpBy5mfe.js";import"./useOsdkClient-B9_lmi5X.js";import"./tick-JbtqNPLy.js";import"./DropdownField-B18fan2m.js";import"./withOsdkMetrics-DO7OhjM7.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
