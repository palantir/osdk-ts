import{f as n,j as t}from"./iframe-DNetijtG.js";import{O as p}from"./object-table-DmfxGr0Z.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sU92iF6A.js";import"./Table-C9nq0QdY.js";import"./index-DI0O4qg-.js";import"./Dialog-DKNeM-cd.js";import"./cross-CGUI5AG7.js";import"./svgIconContainer-SoGYuBp4.js";import"./useBaseUiId-Ak-3DuY6.js";import"./InternalBackdrop-phipS796.js";import"./composite-C2317CzO.js";import"./index-BkBhqNzA.js";import"./index-DHKOddTR.js";import"./index-DlIyqTro.js";import"./useEventCallback-BVtRfMqB.js";import"./SkeletonBar-0YKvp8WV.js";import"./LoadingCell-DiGfLzsP.js";import"./ColumnConfigDialog-uhv3oF1b.js";import"./DraggableList-CxcZezPp.js";import"./search-BXldx6q2.js";import"./Input-F3IXB8Pb.js";import"./useControlled-YxlSFc_i.js";import"./Button-DOSVI_Y5.js";import"./small-cross-CXY-IgLA.js";import"./ActionButton-HOefcL3T.js";import"./Checkbox-DHZEZ9iP.js";import"./useValueChanged-DYKHStGf.js";import"./CollapsiblePanel-DA0duOXq.js";import"./MultiColumnSortDialog-DAxceiLi.js";import"./MenuTrigger-D5Bp7H2I.js";import"./CompositeItem-CLDjlyod.js";import"./ToolbarRootContext-DDPRGDp5.js";import"./getDisabledMountTransitionStyles-D7UmAQb2.js";import"./getPseudoElementBounds-CCDRk9xq.js";import"./chevron-down-CyTZFakG.js";import"./index-DicHFhjm.js";import"./error-C-M3f4ep.js";import"./BaseCbacBanner-CRpMWfba.js";import"./makeExternalStore-CvuNyL00.js";import"./Tooltip-9D-wEzcV.js";import"./PopoverPopup-Q9zRvaLW.js";import"./toNumber-CCfE7xTX.js";import"./useOsdkClient-Cd5GLSaX.js";import"./tick-v2UzosV8.js";import"./DropdownField-B92h1Xsv.js";import"./withOsdkMetrics-N49xkUon.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
