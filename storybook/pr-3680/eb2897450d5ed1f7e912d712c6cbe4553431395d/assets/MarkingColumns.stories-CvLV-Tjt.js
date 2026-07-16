import{f as n,j as t}from"./iframe-CaGrV6Xd.js";import{O as p}from"./object-table-DhW4dd0r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DqCnNMeF.js";import"./Table-hE84jpGk.js";import"./index-B-aXTXlp.js";import"./Dialog-C86q6AEF.js";import"./cross-DfvWr9nk.js";import"./svgIconContainer-BZhxiDrs.js";import"./useBaseUiId--GLX5y2o.js";import"./InternalBackdrop-BWxWz5uP.js";import"./composite-CYL0hfWS.js";import"./index-CrTn2rRx.js";import"./index-VCFFI3LD.js";import"./index-DbwFfXR1.js";import"./useEventCallback-Bl-fLD7c.js";import"./SkeletonBar-BcayRxPn.js";import"./LoadingCell-CseoMGkM.js";import"./ColumnConfigDialog-IY5BGA-_.js";import"./DraggableList-DTV7h4KE.js";import"./search-uAufuLh8.js";import"./Input-Gqvvia-z.js";import"./useControlled-DAOr6g1Y.js";import"./Button-BDtRlS-p.js";import"./small-cross-DKB2NuZd.js";import"./ActionButton-DsWU_Iia.js";import"./Checkbox-pFVI4RsT.js";import"./useValueChanged-DadbX9de.js";import"./CollapsiblePanel-DwQOkIVS.js";import"./MultiColumnSortDialog-Ccovknw4.js";import"./MenuTrigger-BKp-28zj.js";import"./CompositeItem-Dw6tm4Ht.js";import"./ToolbarRootContext-BOGK67MF.js";import"./getDisabledMountTransitionStyles-B7aTItff.js";import"./getPseudoElementBounds-DZF2CoYG.js";import"./chevron-down-BXQZftYu.js";import"./index-C6vZ_CqL.js";import"./error-CJalUTnk.js";import"./BaseCbacBanner-DzMC0W1p.js";import"./makeExternalStore-D3Dv41e5.js";import"./Tooltip-BBFzLAbn.js";import"./PopoverPopup-BUOzU6FV.js";import"./toNumber-C6aWC98D.js";import"./useOsdkClient-DL92QisK.js";import"./tick-DcIbKH2h.js";import"./DropdownField-B_z4Hfg9.js";import"./withOsdkMetrics--_Hp5D_u.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
