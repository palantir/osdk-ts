import{f as n,j as t}from"./iframe-BGXM3ec5.js";import{O as p}from"./object-table-D6nlPHGb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cvs2uxJ4.js";import"./Table-DB73k77V.js";import"./index-CEIMM9cQ.js";import"./Dialog-bsnw1QwA.js";import"./cross-5DqgMi5G.js";import"./svgIconContainer-DQTxxMrf.js";import"./useBaseUiId-D3KZmE2c.js";import"./InternalBackdrop-CbCq9dvx.js";import"./composite-BP7Wvx2k.js";import"./index-CJzgfjnD.js";import"./index-C0afkOMh.js";import"./index-BU9yTjB3.js";import"./useEventCallback-DxKKXMLb.js";import"./SkeletonBar-CVLFVP-R.js";import"./LoadingCell-BIjGdJ7h.js";import"./ColumnConfigDialog-DKxf14H9.js";import"./DraggableList-BOGUV0mu.js";import"./search-CjmIhzs5.js";import"./Input-K6JDLxyk.js";import"./useControlled-CcKUPAWF.js";import"./Button-CiYkqIVE.js";import"./small-cross-BmZdNbTz.js";import"./ActionButton-BmnBmVYU.js";import"./Checkbox-OoBGwg5k.js";import"./useValueChanged-DC_BsOTs.js";import"./CollapsiblePanel-Xl9rIjoS.js";import"./MultiColumnSortDialog-OJM14rnr.js";import"./MenuTrigger-p_GldIBk.js";import"./CompositeItem-C6te6ymF.js";import"./ToolbarRootContext-FL3tibwn.js";import"./getDisabledMountTransitionStyles-DcJ-P9Ro.js";import"./getPseudoElementBounds-CAf6t3nn.js";import"./chevron-down-D8rSgEkt.js";import"./index-B53fxGUQ.js";import"./error-CVx_3M8V.js";import"./BaseCbacBanner-BYeCREnv.js";import"./makeExternalStore-BE8qXbVH.js";import"./Tooltip-UNgCe8W6.js";import"./PopoverPopup-DETWP91n.js";import"./toNumber-DhRhJG0v.js";import"./useOsdkClient-BXu68koD.js";import"./tick-B3g_Ug9v.js";import"./DropdownField-Cx3ml8-s.js";import"./withOsdkMetrics-B5eolS3E.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
