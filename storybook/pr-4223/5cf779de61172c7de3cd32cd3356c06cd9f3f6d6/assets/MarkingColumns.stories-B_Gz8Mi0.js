import{f as p,j as e}from"./iframe-oUWpW2hj.js";import{O as i}from"./object-table-CLbmZn-l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Yv6afaVL.js";import"./Table-CiWH93CS.js";import"./index-CgvqzYiy.js";import"./Dialog-v0v8UvAL.js";import"./cross-DH6uOwyM.js";import"./svgIconContainer-CfDlmTSN.js";import"./useBaseUiId-CNXzk4iF.js";import"./InternalBackdrop-DCSUOs2p.js";import"./composite-DXJqaJaP.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./index-DK-jKqOF.js";import"./useEventCallback-DZOwbbJq.js";import"./SkeletonBar-ClsJkh65.js";import"./LoadingCell-DIzFAauO.js";import"./ColumnConfigDialog-CSerDPBA.js";import"./DraggableList-h5SWgWuf.js";import"./search-OfzKiz9h.js";import"./Input-BW0wlw1T.js";import"./useControlled-C-y7Ct0C.js";import"./Button-D0GlSb4-.js";import"./small-cross-Dg6oYX1r.js";import"./ActionButton-vLUx2x9T.js";import"./Checkbox-D_wcUVzM.js";import"./useValueChanged-Dkm3d1mT.js";import"./CollapsiblePanel-BfXlQFaO.js";import"./MultiColumnSortDialog-C_wapD0-.js";import"./MenuTrigger-XqvrfEp0.js";import"./CompositeItem-mpma5yoQ.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./getDisabledMountTransitionStyles-kmT_SUYl.js";import"./getPseudoElementBounds-BFXXGwBb.js";import"./chevron-down-B1zztQ-L.js";import"./index-Dr1tBJwO.js";import"./error-DWxhuhX7.js";import"./BaseCbacBanner-ChJpqQ0G.js";import"./makeExternalStore-DCxwJsFe.js";import"./Tooltip-u5Tt69vN.js";import"./PopoverPopup-BaCxp5C7.js";import"./debounce-iJ8ACcNG.js";import"./useOsdkClient-TI1xoQcl.js";import"./tick-CTaqXIni.js";import"./DropdownField-BXlACZnb.js";import"./isEqual-BB0Cq2Xm.js";import"./withOsdkMetrics-JDMrgbFb.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
