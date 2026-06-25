import{f as n,j as t}from"./iframe-B08I_oIU.js";import{O as p}from"./object-table-CRIT3Szf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CYp3n9Wf.js";import"./Table-Bh-Icq-G.js";import"./index-DjD_i9Y1.js";import"./Dialog-BYCfre_v.js";import"./cross-A2crZg46.js";import"./svgIconContainer-Dfj-gwIK.js";import"./useBaseUiId-BfLV8qHe.js";import"./InternalBackdrop-CAckHjfs.js";import"./composite-1avW952g.js";import"./index-rVaYuNMF.js";import"./index-ilDnKNJf.js";import"./index-C-favTSN.js";import"./useEventCallback-BojH2JCQ.js";import"./SkeletonBar-Cz8UkOpa.js";import"./LoadingCell-42RkFO-E.js";import"./ColumnConfigDialog-BdKDH1OR.js";import"./DraggableList-Mccr0RsZ.js";import"./Input-C3sKRwNk.js";import"./useControlled-Dz-navvE.js";import"./Button-fFxUUkk-.js";import"./small-cross-sYDi-uyf.js";import"./ActionButton-CiYImLCH.js";import"./Checkbox-Dcj24Bgm.js";import"./minus-BvKWxqk4.js";import"./useValueChanged-ClGik_y2.js";import"./caret-down-RXzismjb.js";import"./CollapsiblePanel-Cj_0dGAF.js";import"./MultiColumnSortDialog-DwtQer9K.js";import"./MenuTrigger-CXcT7k9j.js";import"./CompositeItem-48nkjj0-.js";import"./ToolbarRootContext-0C4sNIoP.js";import"./getDisabledMountTransitionStyles-AgPSLeYe.js";import"./getPseudoElementBounds-DLd9d7kc.js";import"./chevron-down-DEoSn_IE.js";import"./index-Vm8Lh2K4.js";import"./error-CAjAjaMp.js";import"./BaseCbacBanner-C0LWCaCh.js";import"./makeExternalStore-B_ETMbJ0.js";import"./Tooltip-Bj8Tozlk.js";import"./PopoverPopup-BQy2EwB_.js";import"./toNumber-DapdDvYr.js";import"./useOsdkClient-CbGbYvwF.js";import"./DropdownField-Cn_zkzyp.js";import"./withOsdkMetrics-BbBc8s8p.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
