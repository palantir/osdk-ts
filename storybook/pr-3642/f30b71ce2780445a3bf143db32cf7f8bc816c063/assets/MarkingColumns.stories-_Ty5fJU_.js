import{f as n,j as t}from"./iframe-PR70Nfar.js";import{O as p}from"./object-table-B3T3Sdu3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-1wD2feua.js";import"./Table-L6nqo5Pe.js";import"./index-Cy9aqFKo.js";import"./Dialog-Dh8Hb9d2.js";import"./cross-DxOZXdcd.js";import"./svgIconContainer-DKlv6AER.js";import"./useBaseUiId-F1N6rQmT.js";import"./InternalBackdrop-Ca-g06qo.js";import"./composite-EvjKCf2c.js";import"./index-Bj2z0IRA.js";import"./index-CWco9Po_.js";import"./index-BL11uJIT.js";import"./useEventCallback-rOJ6xsEp.js";import"./SkeletonBar-DHtbBnWm.js";import"./LoadingCell-B1NT3OCC.js";import"./ColumnConfigDialog-DSAKV-ql.js";import"./DraggableList-D6N_hSK_.js";import"./search-CHBS7e9v.js";import"./Input-C4A_k7Mc.js";import"./useControlled-Bc9n7-zI.js";import"./Button-UA7F1wyp.js";import"./small-cross-DQ4DF0p6.js";import"./ActionButton-CAt4cc_1.js";import"./Checkbox-mt_g5My_.js";import"./useValueChanged-DDM9CaLp.js";import"./CollapsiblePanel-Bwf_W8Dv.js";import"./MultiColumnSortDialog-DSJrwFtv.js";import"./MenuTrigger-DDGzG2zA.js";import"./CompositeItem-DSDXjTJN.js";import"./ToolbarRootContext-B02N7MTi.js";import"./getDisabledMountTransitionStyles-PUhrqsTX.js";import"./getPseudoElementBounds-CIBbcWo-.js";import"./chevron-down-VPL4wmWd.js";import"./index-BBVVzuz8.js";import"./error-3hbxlX1d.js";import"./BaseCbacBanner-B-rnNsIs.js";import"./makeExternalStore-BWwdQGLN.js";import"./Tooltip-DhZ92T4f.js";import"./PopoverPopup-COaVd-Rw.js";import"./toNumber-CBpERjJJ.js";import"./useOsdkClient-Cx1qdJIA.js";import"./tick-svySghO-.js";import"./DropdownField-hNg4CqXB.js";import"./withOsdkMetrics-GqCxNbCK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
