import{f as n,j as t}from"./iframe-D5mq6hoo.js";import{O as p}from"./object-table-Pweg0z2J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLWajGUW.js";import"./Table-HliZE6bh.js";import"./index-TQYcFi_V.js";import"./Dialog-BWkpESMK.js";import"./cross-D1j6czOE.js";import"./svgIconContainer-zobeiVr1.js";import"./useBaseUiId-C1b0TVFW.js";import"./InternalBackdrop-CU5AVR5u.js";import"./composite-D9LgULkf.js";import"./index-BWp-MrHb.js";import"./index-B32LjCvS.js";import"./index-C2Iuz-ap.js";import"./useEventCallback-hggNOJza.js";import"./SkeletonBar-BgpvGhmf.js";import"./LoadingCell-D1ZzKkc3.js";import"./ColumnConfigDialog-BWgnEMGO.js";import"./DraggableList-a6Bq65Yj.js";import"./search-gb8Hgy2x.js";import"./Input-hVP4Pe5o.js";import"./useControlled-CMM8zoo1.js";import"./Button-Bt_SsAOl.js";import"./small-cross-BXPNGtqo.js";import"./ActionButton-BDOyU4eV.js";import"./Checkbox-BsEBEzM-.js";import"./useValueChanged-DdVdRBCd.js";import"./CollapsiblePanel-Dx9_kp84.js";import"./MultiColumnSortDialog-Wzxu0WQi.js";import"./MenuTrigger-D0t_FkZy.js";import"./CompositeItem-oEKQLuWW.js";import"./ToolbarRootContext-DvJHR6kG.js";import"./getDisabledMountTransitionStyles-Bw25-hhQ.js";import"./getPseudoElementBounds-DD_Ksr_r.js";import"./chevron-down-C0SjICXe.js";import"./index-q5evmxfe.js";import"./error-2NNZ1YQy.js";import"./BaseCbacBanner-COtGfJSg.js";import"./makeExternalStore-CMtiVF6j.js";import"./Tooltip-Bv6337dH.js";import"./PopoverPopup-BYM2iwnC.js";import"./toNumber-BEmNqje8.js";import"./useOsdkClient-BY_Y0v3S.js";import"./tick-CgLPSo1r.js";import"./DropdownField-CmoGyEkn.js";import"./withOsdkMetrics-evsmOUuT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
