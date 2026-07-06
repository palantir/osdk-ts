import{f as n,j as t}from"./iframe-pvq-vF4J.js";import{O as p}from"./object-table-Brq--jD2.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFsU4bK8.js";import"./Table-BVJvdYkt.js";import"./index-eCbMZ3Ul.js";import"./Dialog-BSFba0YN.js";import"./cross-CUOCPzVL.js";import"./svgIconContainer-DoKzqDPY.js";import"./useBaseUiId-D_Zi5uO4.js";import"./InternalBackdrop-B_0pgqUq.js";import"./composite-CPbkNe6Q.js";import"./index-DN-yE6uB.js";import"./index-C8dY89Xh.js";import"./index-Dy2Ho76o.js";import"./useEventCallback-Cqx9rlsB.js";import"./SkeletonBar-CrbLy9PE.js";import"./LoadingCell-DJGfupPq.js";import"./ColumnConfigDialog-CUk8Uguw.js";import"./DraggableList-kd00cC6l.js";import"./search-DQbqmV51.js";import"./Input-CuEV0MJp.js";import"./useControlled-irIHLVOH.js";import"./Button-Bo-ewfGH.js";import"./small-cross-Bz6jWoQP.js";import"./ActionButton-pt3H2IG5.js";import"./Checkbox-DTXqnlME.js";import"./minus-DLEzAQaW.js";import"./tick-B473lrCj.js";import"./useValueChanged-BLrE6u1r.js";import"./caret-down-BpsXYsiX.js";import"./CollapsiblePanel-lEcxjMDy.js";import"./MultiColumnSortDialog-B-jBrX5l.js";import"./MenuTrigger-4cl__Hjc.js";import"./CompositeItem-Gaw4LcDL.js";import"./ToolbarRootContext-BmnO0RL7.js";import"./getDisabledMountTransitionStyles-CFR6EmQi.js";import"./getPseudoElementBounds-BijCPbtt.js";import"./chevron-down-CvdKNIIA.js";import"./index-CRdVZ8y8.js";import"./error-DTZtkkYh.js";import"./BaseCbacBanner-BdjJecqR.js";import"./makeExternalStore-BNt_0vQH.js";import"./Tooltip-CGOLAcPU.js";import"./PopoverPopup-CtC7rqxF.js";import"./toNumber-D3VmAVyp.js";import"./useOsdkClient-BcXlXoCP.js";import"./DropdownField-CxK3IQvj.js";import"./withOsdkMetrics-CJfzwdaO.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
