import{f as p,j as e}from"./iframe-CX9YXgSA.js";import{O as i}from"./object-table-Dfe_mZa3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DtqkPlr3.js";import"./Table-DbkXRP8Q.js";import"./index-CHu8oj4z.js";import"./Dialog-AtSf_t3F.js";import"./cross-RF9BS1x-.js";import"./svgIconContainer-B6cy_VMV.js";import"./useBaseUiId-CCOn5SM4.js";import"./InternalBackdrop-BepV41uE.js";import"./composite-Buss17U8.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./index-DqtGTCxT.js";import"./useEventCallback-foM6gK6J.js";import"./SkeletonBar-O2sp2JAt.js";import"./LoadingCell-BuGHfb6w.js";import"./ColumnConfigDialog-zhw3nOoj.js";import"./DraggableList-DjqACkCb.js";import"./search-N9rV3LuD.js";import"./Input-Cz4ERfsw.js";import"./useControlled-DmxCQxaW.js";import"./Button-CXKnl_XI.js";import"./small-cross-B9xThdJa.js";import"./ActionButton-DE-sYlp6.js";import"./Checkbox-CElMUeCU.js";import"./useValueChanged-BlgjX7r-.js";import"./CollapsiblePanel-BNaRB7Gp.js";import"./MultiColumnSortDialog-Bn1UaEGz.js";import"./MenuTrigger-C3Fnwbf1.js";import"./CompositeItem-4eZutR_U.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./getDisabledMountTransitionStyles-CaxJBU-f.js";import"./getPseudoElementBounds-tIu6DOku.js";import"./chevron-down-Dc86wWzz.js";import"./index-DLNO2YQ4.js";import"./error-D_HPKerG.js";import"./BaseCbacBanner-j0epf_D2.js";import"./makeExternalStore-BTzOXgaO.js";import"./Tooltip-BxJhAj2y.js";import"./PopoverPopup-CV-lyuv2.js";import"./debounce-jRrecCNv.js";import"./useOsdkClient-DpMK-LnF.js";import"./tick-DKFgC3oF.js";import"./DropdownField-94zOpfvL.js";import"./isEqual-CEsABR2S.js";import"./withOsdkMetrics-DLY6T-R6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
