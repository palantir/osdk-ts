import{f as n,j as t}from"./iframe-DjNcwtyF.js";import{O as p}from"./object-table-BaeKZjZt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BlurYcsu.js";import"./Table-D5G-OBdw.js";import"./index-DlfDEuMy.js";import"./Dialog-CfYZ-g2f.js";import"./cross-CAGDORQd.js";import"./svgIconContainer-BloETKks.js";import"./useBaseUiId-DtQ8itjz.js";import"./InternalBackdrop-Iq764F0E.js";import"./composite-_Zi5hsVn.js";import"./index-Wa1RvSxW.js";import"./index-C10Nkt1X.js";import"./index-a2omIe2r.js";import"./useEventCallback-Cfa1IApQ.js";import"./SkeletonBar-DG-FYrcp.js";import"./LoadingCell-NfUq9pVA.js";import"./ColumnConfigDialog-CYes7v2Y.js";import"./DraggableList-UuL8N_9f.js";import"./search-BkTLS9-p.js";import"./Input-Bab10rEQ.js";import"./useControlled-BCOo9PsH.js";import"./Button-Cq8fAgAs.js";import"./small-cross-Cy_nI018.js";import"./ActionButton-aZBjFxis.js";import"./Checkbox-DZgsMLwP.js";import"./useValueChanged-CaGHpMGt.js";import"./CollapsiblePanel-Cj8bovHV.js";import"./MultiColumnSortDialog-ZI2tYe1c.js";import"./MenuTrigger-DgfieLCd.js";import"./CompositeItem-p5N-XohV.js";import"./ToolbarRootContext-B_JSm_wM.js";import"./getDisabledMountTransitionStyles-6qLgX2Vy.js";import"./getPseudoElementBounds-C808Q2xQ.js";import"./chevron-down-BxaO6vl0.js";import"./index-D7aQe20D.js";import"./error-BlJ5qp7I.js";import"./BaseCbacBanner-BCRTkMbf.js";import"./makeExternalStore-C1qBq1rw.js";import"./Tooltip-CqjPwpVO.js";import"./PopoverPopup-BQ1F2XWc.js";import"./toNumber-WLlXrll9.js";import"./useOsdkClient-CD6rIL0k.js";import"./tick-ChhbHNW5.js";import"./DropdownField-KTYV65tq.js";import"./withOsdkMetrics-BrijnFac.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
