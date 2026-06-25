import{f as n,j as t}from"./iframe-BacHJK7c.js";import{O as p}from"./object-table-Cf9S2iIc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BquI1EIT.js";import"./Table-BgfhKpzu.js";import"./index-C0_jfzFs.js";import"./Dialog-D-7pmUwj.js";import"./cross-DvOBfeg1.js";import"./svgIconContainer-CPx9gOaT.js";import"./useBaseUiId-BGiqNj7J.js";import"./InternalBackdrop-DZCgu9NH.js";import"./composite-CDbVnU1f.js";import"./index-DuuwNypF.js";import"./index-BC1cRqw6.js";import"./index-BF5jMmOf.js";import"./useEventCallback-Rp9pLkok.js";import"./SkeletonBar-BcapNBiA.js";import"./LoadingCell-CzQg_ldW.js";import"./ColumnConfigDialog-B_e-Sz3z.js";import"./DraggableList-1JES-2zS.js";import"./Input-D6deVImg.js";import"./useControlled-BzjFaLYf.js";import"./Button-BZvbUTDk.js";import"./small-cross-B-RpvtVX.js";import"./ActionButton-Djqzad5u.js";import"./Checkbox-Bd4D1ZK8.js";import"./minus-_JDtiLzG.js";import"./useValueChanged-66b54Rlw.js";import"./caret-down-B9A9KLxn.js";import"./CollapsiblePanel-CHMh5Ebi.js";import"./MultiColumnSortDialog-3LoYVJGB.js";import"./MenuTrigger-BMmwNEZt.js";import"./CompositeItem-CAnzBS9g.js";import"./ToolbarRootContext-ju4Y21kp.js";import"./getDisabledMountTransitionStyles-CodT7QNi.js";import"./getPseudoElementBounds-DQy-mg_R.js";import"./chevron-down-C9sbSajX.js";import"./index-DNs_SFyZ.js";import"./error-VoyFwDr8.js";import"./BaseCbacBanner-DJkRvok2.js";import"./makeExternalStore-CwOeFco1.js";import"./Tooltip-B--CDO77.js";import"./PopoverPopup-49dnJT-P.js";import"./toNumber-DyzUn3gf.js";import"./useOsdkClient-BQJOF_Qs.js";import"./DropdownField-DCRSphIf.js";import"./withOsdkMetrics-kpzKtDyl.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
