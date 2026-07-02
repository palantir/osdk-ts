import{f as n,j as t}from"./iframe-jOwwVEWr.js";import{O as p}from"./object-table-vhLg2j0z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B9i57n-G.js";import"./Table-C1i75joi.js";import"./index-Bu24czZf.js";import"./Dialog-DRAV4C8J.js";import"./cross-D9Epjovl.js";import"./svgIconContainer-S3HNfdB4.js";import"./useBaseUiId-onvOQAvM.js";import"./InternalBackdrop-C6xsT1pP.js";import"./composite-BPMBoWPm.js";import"./index-DF7eXmQI.js";import"./index-M99VwHgE.js";import"./index-BnCdNu3e.js";import"./useEventCallback-Ctw8Vu4m.js";import"./SkeletonBar-C5WNwp8l.js";import"./LoadingCell-JrNU2jZf.js";import"./ColumnConfigDialog-BkjT9B3P.js";import"./DraggableList-D-YvMYwL.js";import"./search-CmVz_bOS.js";import"./Input-DhshGsOS.js";import"./useControlled-DHRHy43-.js";import"./Button-BOn0G2Sg.js";import"./small-cross-B_tVABY4.js";import"./ActionButton-D9rMwhXw.js";import"./Checkbox-BEgfb0-y.js";import"./minus-BQiZVDrz.js";import"./tick-Bn1NIn8C.js";import"./useValueChanged-C1h2KKL9.js";import"./caret-down-CieRIu5l.js";import"./CollapsiblePanel-D279Xz_Q.js";import"./MultiColumnSortDialog-dtbVIzO1.js";import"./MenuTrigger-hMbXXoj-.js";import"./CompositeItem-CoO4Y5UD.js";import"./ToolbarRootContext-Cvugleb3.js";import"./getDisabledMountTransitionStyles-BEfrApPm.js";import"./getPseudoElementBounds-Cq9iGMjS.js";import"./chevron-down-B6WLsc6y.js";import"./index-D7F5Sg6i.js";import"./error-DE3RZGJL.js";import"./BaseCbacBanner-CO91NQGw.js";import"./makeExternalStore-C6paOGwF.js";import"./Tooltip-B1uuw17I.js";import"./PopoverPopup-eZ_4OHNB.js";import"./toNumber-DKOq_V3S.js";import"./useOsdkClient-DUPJp01m.js";import"./DropdownField-DwltHJep.js";import"./withOsdkMetrics-DBCX48G-.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
