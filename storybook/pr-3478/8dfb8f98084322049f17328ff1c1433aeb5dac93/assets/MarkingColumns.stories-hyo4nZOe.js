import{f as n,j as t}from"./iframe-BP6vUIsp.js";import{O as p}from"./object-table-DJFU88_T.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ds39F25G.js";import"./Table-DJe6lR9Q.js";import"./index-CyEv1VgJ.js";import"./Dialog-DwXvAC76.js";import"./cross-CTqlXGZu.js";import"./svgIconContainer-pax7RBzC.js";import"./useBaseUiId-BGcjHVjN.js";import"./InternalBackdrop-DtfqsV9w.js";import"./composite-DRK6A9u1.js";import"./index-nImviUFz.js";import"./index-CTUFQp3a.js";import"./index-OUISUPqH.js";import"./useEventCallback-DAayvDbt.js";import"./SkeletonBar-DqWWFQIY.js";import"./LoadingCell-Cl8wFqbg.js";import"./ColumnConfigDialog-DneRaiqS.js";import"./DraggableList-CfByhgpJ.js";import"./Input-O_50yTyE.js";import"./useControlled-BVgGU0bK.js";import"./Button-DIFfUXew.js";import"./small-cross-CWSRVVdn.js";import"./ActionButton-CNg42Go6.js";import"./Checkbox-B8624eHt.js";import"./minus-knoOzcuu.js";import"./useValueChanged-DrL4DFLq.js";import"./caret-down-B9EZM8PR.js";import"./CollapsiblePanel-BDBXQwZD.js";import"./MultiColumnSortDialog-BySJr6_3.js";import"./MenuTrigger-BF2g9jpb.js";import"./CompositeItem-D42LL1a_.js";import"./ToolbarRootContext-DYdkLjjn.js";import"./getDisabledMountTransitionStyles-Bpms45RE.js";import"./getPseudoElementBounds-CU5Z1xrA.js";import"./chevron-down-r0oY4y8c.js";import"./index-I-JwPUzk.js";import"./error-_x9HyvQC.js";import"./BaseCbacBanner-BGh5cYTJ.js";import"./makeExternalStore-DbWMO-qB.js";import"./Tooltip-CQyAnaC5.js";import"./PopoverPopup-BxrLbBlJ.js";import"./toNumber-BKFcvF7v.js";import"./useOsdkClient-DPA8WlBG.js";import"./DropdownField-D1VoObaQ.js";import"./withOsdkMetrics-lOV4IFNM.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
