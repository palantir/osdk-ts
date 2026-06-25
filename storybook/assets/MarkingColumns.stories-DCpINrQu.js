import{f as n,j as t}from"./iframe-DpejOK4c.js";import{O as p}from"./object-table-AR0Pwkk_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C2b2w7Jj.js";import"./index-W51RVY4l.js";import"./Dialog-7LuDM3Pk.js";import"./cross-0ZYG3eXQ.js";import"./svgIconContainer-BmZxXUXk.js";import"./useBaseUiId-CSdXwmil.js";import"./InternalBackdrop-Y68aDz1b.js";import"./composite-C3iA0BqW.js";import"./index-rd2vjabm.js";import"./index-CKT4n31R.js";import"./index-CzwHGXC6.js";import"./useEventCallback-CVHSn8be.js";import"./SkeletonBar-fzoQAq8E.js";import"./LoadingCell-BEpviPzu.js";import"./ColumnConfigDialog-CIC6cctX.js";import"./DraggableList-w-ejxlPI.js";import"./Input-Bc_ZLzpE.js";import"./useControlled-Dz5p3OTy.js";import"./Button-7n9M97Ed.js";import"./small-cross-G5W2zPad.js";import"./ActionButton-DXiuCcR4.js";import"./Checkbox-D6b1xrSi.js";import"./minus-BIokuXOY.js";import"./useValueChanged-DLkdyY6B.js";import"./caret-down-D-gIyXGP.js";import"./CollapsiblePanel-BzPYrrtt.js";import"./MultiColumnSortDialog-CUAz4TQX.js";import"./MenuTrigger-Cm4R9cRq.js";import"./CompositeItem-DS96bcji.js";import"./ToolbarRootContext-Dh9NoIeN.js";import"./getDisabledMountTransitionStyles-HbQrAkcx.js";import"./getPseudoElementBounds-DTuCRgn2.js";import"./chevron-down-t_eWS1Xp.js";import"./index-Bp9OeuKM.js";import"./error-CvcHcglF.js";import"./BaseCbacBanner-Gqm2s2Xm.js";import"./makeExternalStore-D7HNX_Xj.js";import"./Tooltip-CVAxFm3W.js";import"./PopoverPopup-B-rl2aOu.js";import"./toNumber-DtX3hWCb.js";import"./useOsdkClient-C72ASC9w.js";import"./DropdownField-CBeR9Sg0.js";import"./withOsdkMetrics-BRXUWDMJ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
