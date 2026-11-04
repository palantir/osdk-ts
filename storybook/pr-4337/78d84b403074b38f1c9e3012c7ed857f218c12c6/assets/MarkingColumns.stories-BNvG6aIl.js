import{f as p,j as e}from"./iframe-kWD-jdIM.js";import{O as i}from"./object-table-RGNDvId0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BYIpTBn0.js";import"./Table-BiUBNS3W.js";import"./index-DHpWRKQv.js";import"./Dialog-DxgQ0zFS.js";import"./cross-BSGzHacU.js";import"./svgIconContainer-B8XSgAJk.js";import"./useBaseUiId-C60jF_o-.js";import"./InternalBackdrop-DyR0_bnS.js";import"./composite-BmOV-aCZ.js";import"./index-DMVcTELQ.js";import"./index-D6dW0J7N.js";import"./index-GH3PvjFS.js";import"./useEventCallback-DlpvfO9F.js";import"./SkeletonBar-COIOzOry.js";import"./LoadingCell-AJKkJPU_.js";import"./ColumnConfigDialog-BHErHlOV.js";import"./DraggableList-SCDQOoOU.js";import"./search-Xv8sEjS-.js";import"./Input-DOuHVujQ.js";import"./useControlled-u0KjilF0.js";import"./Button-B37N9Ve_.js";import"./small-cross-B64fsBIe.js";import"./ActionButton-Ci0HXhBZ.js";import"./Checkbox-DVS3v9FZ.js";import"./useValueChanged-BFrDnBzs.js";import"./CollapsiblePanel-evQDlZSo.js";import"./MultiColumnSortDialog-BY4l5wpI.js";import"./MenuTrigger-rcHYECwR.js";import"./CompositeItem-BYdOgjmY.js";import"./ToolbarRootContext-QHke1z2n.js";import"./getDisabledMountTransitionStyles-Cfp--kIY.js";import"./getPseudoElementBounds-ARNy8nkD.js";import"./chevron-down-B5rYpa0g.js";import"./index-B2Y0AFjL.js";import"./error-DarRpeI1.js";import"./BaseCbacBanner-CAxX5Ilo.js";import"./makeExternalStore-V_raLWeu.js";import"./Tooltip-JdfuuPqa.js";import"./PopoverPopup-BL8XjTGc.js";import"./debounce-BUu0DgJ5.js";import"./useOsdkClient-DgtXvuGE.js";import"./tick-Bkqq1dN2.js";import"./DropdownField-B2rD9Nef.js";import"./isEqual-Dama8GfR.js";import"./withOsdkMetrics-CKT8uRvg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
