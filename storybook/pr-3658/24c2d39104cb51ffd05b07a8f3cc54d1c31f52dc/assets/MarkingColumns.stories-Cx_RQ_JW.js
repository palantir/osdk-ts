import{f as n,j as t}from"./iframe-ZsXNUFF6.js";import{O as p}from"./object-table-CG9qr6Wq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7akXiok.js";import"./Table-BAwZcill.js";import"./index-B5zzfAZe.js";import"./Dialog-BM74OqWw.js";import"./cross-BYK_51r0.js";import"./svgIconContainer-DW3JlD9F.js";import"./useBaseUiId-DYGOKp_u.js";import"./InternalBackdrop-DzsZenb0.js";import"./composite-DdmqKmDs.js";import"./index-DKJpgcXb.js";import"./index-CxFS4__M.js";import"./index-CvVIQIPX.js";import"./useEventCallback-BjePuS9n.js";import"./SkeletonBar-CT2FoX5u.js";import"./LoadingCell-BpvwdEMG.js";import"./ColumnConfigDialog-xYj1eaXv.js";import"./DraggableList-C8AVBT0S.js";import"./search-EhyZku2j.js";import"./Input-04CIfLJP.js";import"./useControlled-DM56nnwz.js";import"./Button-BT5XCJpm.js";import"./small-cross-4PZueEy6.js";import"./ActionButton-KioB0Q-I.js";import"./Checkbox-CG-_Mu_t.js";import"./useValueChanged-B_OiiEmq.js";import"./CollapsiblePanel-h4QVZR4G.js";import"./MultiColumnSortDialog-Cq6FET5y.js";import"./MenuTrigger-BHw0TS1C.js";import"./CompositeItem-64C7TVkf.js";import"./ToolbarRootContext-BDcT9N5A.js";import"./getDisabledMountTransitionStyles-BLUEKsOJ.js";import"./getPseudoElementBounds-BxX-liaN.js";import"./chevron-down-D5zhsdmR.js";import"./index-DX6qVoIG.js";import"./error-hVPnrc5f.js";import"./BaseCbacBanner-CLFkLO8t.js";import"./makeExternalStore-Cflc95vd.js";import"./Tooltip-CFXYlL-Q.js";import"./PopoverPopup-B9Uxmn8K.js";import"./toNumber-DYrXBDjG.js";import"./useOsdkClient-BBMRDoAl.js";import"./tick-CquP75rC.js";import"./DropdownField-D3Wx78Jn.js";import"./withOsdkMetrics-B8vZeoii.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
