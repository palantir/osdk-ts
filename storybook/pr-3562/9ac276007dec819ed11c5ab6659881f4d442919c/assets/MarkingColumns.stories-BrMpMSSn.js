import{f as n,j as t}from"./iframe-_XHTM6UU.js";import{O as p}from"./object-table-BIvWumw-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBnybJj7.js";import"./Table-B3yVQlgY.js";import"./index-8B2mYGEh.js";import"./Dialog-9uV6TchP.js";import"./cross-Xn6sJPFx.js";import"./svgIconContainer-BVjbwhxm.js";import"./useBaseUiId-BHoGvOPs.js";import"./InternalBackdrop-BtJLV2fa.js";import"./composite-BfdPMGLv.js";import"./index-CHZhX3ae.js";import"./index-CRTtwqpm.js";import"./index-GGmmY_5L.js";import"./useEventCallback-C2DWYbp8.js";import"./SkeletonBar-Dmyw-nOt.js";import"./LoadingCell-7ce3hIUq.js";import"./ColumnConfigDialog-TGkeP8Xd.js";import"./DraggableList-B0P-pTGW.js";import"./Input-BiJpVzL0.js";import"./useControlled-BuiwuU3v.js";import"./Button-CcxaiM9H.js";import"./small-cross-DT2qmwCG.js";import"./ActionButton-JMe7tNws.js";import"./Checkbox-D85mbSuD.js";import"./minus-BEzCkezO.js";import"./useValueChanged-DkOwWm98.js";import"./caret-down-9XR4wDci.js";import"./CollapsiblePanel-BR7wkqTp.js";import"./MultiColumnSortDialog-Db2_dO6S.js";import"./MenuTrigger-B8Doibeb.js";import"./CompositeItem-D4WQ74it.js";import"./ToolbarRootContext-8gUVkmA7.js";import"./getDisabledMountTransitionStyles-Dsbe5-9Z.js";import"./getPseudoElementBounds-B8UyNdNI.js";import"./chevron-down-BpfZLG0p.js";import"./index-BiI1FMP5.js";import"./error-BlpXzCus.js";import"./BaseCbacBanner-XwjKCcMb.js";import"./makeExternalStore-CR5wu_X6.js";import"./Tooltip-BFrvOk1h.js";import"./PopoverPopup-Cgp9qNDt.js";import"./toNumber-CG2vCgS1.js";import"./useOsdkClient-57-bBD8h.js";import"./DropdownField-B4d4Tk5w.js";import"./withOsdkMetrics-BEk-1wnA.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
