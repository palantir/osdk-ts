import{f as n,j as t}from"./iframe-DtJdR8o5.js";import{O as p}from"./object-table-fzT_1vtm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9YuVikf.js";import"./Table-BXGP6lIf.js";import"./index-A9RQxA8v.js";import"./Dialog-Cqi26h8i.js";import"./cross-D-K9S6cu.js";import"./svgIconContainer-DnJJJFvI.js";import"./useBaseUiId-CimT7_Tr.js";import"./InternalBackdrop-WHnz6adD.js";import"./composite-C-gB3eF9.js";import"./index-CpKdfVQZ.js";import"./index-DJnV3HFJ.js";import"./index-6I1Hm2yo.js";import"./useEventCallback-DWIQSToy.js";import"./SkeletonBar-SUSHK0Np.js";import"./LoadingCell-Cec6KsjJ.js";import"./ColumnConfigDialog-DVQZ6MWk.js";import"./DraggableList-FFtKte1I.js";import"./Input-CEEIYH0q.js";import"./useControlled-CC-lI9Iz.js";import"./Button-DZTVI3Xo.js";import"./small-cross-Dk-3H06M.js";import"./ActionButton-sfVk1hNE.js";import"./Checkbox-BMamtVDw.js";import"./minus-C7KY5wgq.js";import"./useValueChanged-CoWuwFmz.js";import"./caret-down-B7eycUSM.js";import"./CollapsiblePanel-TUiCU5Gu.js";import"./MultiColumnSortDialog-CI3uh719.js";import"./MenuTrigger-BB60VMwq.js";import"./CompositeItem-DpyYsuyc.js";import"./ToolbarRootContext-86zdr2aK.js";import"./getDisabledMountTransitionStyles-DUIrI81q.js";import"./getPseudoElementBounds-XXYKcEnN.js";import"./chevron-down-BKRIHA0P.js";import"./index-C7tY_qZy.js";import"./error-3rzf31_v.js";import"./BaseCbacBanner-TiGL5C-I.js";import"./makeExternalStore-Sl9e-4xy.js";import"./Tooltip-bAjy2PyD.js";import"./PopoverPopup-DQiN_ZJv.js";import"./toNumber-CL-ronMY.js";import"./useOsdkClient-Cnj1dNIz.js";import"./DropdownField-DjpQkKKA.js";import"./withOsdkMetrics-DLlVXcS-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
