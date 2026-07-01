import{f as n,j as t}from"./iframe-DhPFL0JU.js";import{O as p}from"./object-table-BUq0Ecek.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nptIcXyM.js";import"./Table-C6b6SzAZ.js";import"./index-ByIvFIR_.js";import"./Dialog-w357TZlv.js";import"./cross-FZYR-_q2.js";import"./svgIconContainer-B-x07hCh.js";import"./useBaseUiId-CFHeOfow.js";import"./InternalBackdrop-Cp-IIEcP.js";import"./composite-D-4wOwiu.js";import"./index-Ci_4QJJm.js";import"./index-wp8834nO.js";import"./index-ERON5_Ak.js";import"./useEventCallback-y5Fi2MiB.js";import"./SkeletonBar-Cpb9xNiE.js";import"./LoadingCell-DhetjqK5.js";import"./ColumnConfigDialog-gMk98iri.js";import"./DraggableList-BgudvrAW.js";import"./Input-BrEDUG_n.js";import"./useControlled-BauxlT-z.js";import"./Button-CMGpoj_1.js";import"./small-cross-Ckgr0lvC.js";import"./ActionButton-DurWbm8m.js";import"./Checkbox-ziGGkRJ6.js";import"./minus-C0dppMv9.js";import"./useValueChanged-C7Q5vtNs.js";import"./caret-down-BcwMjSC0.js";import"./CollapsiblePanel-8z0tOqKa.js";import"./MultiColumnSortDialog-DvCD2eU_.js";import"./MenuTrigger-B6TJVFsa.js";import"./CompositeItem-AQcgO7Ph.js";import"./ToolbarRootContext-CvhFoiYV.js";import"./getDisabledMountTransitionStyles-B2HCAdSZ.js";import"./getPseudoElementBounds-BAW4Dnms.js";import"./chevron-down-Dc8LlSjW.js";import"./index-Dk_m3yIF.js";import"./error-C337XemJ.js";import"./BaseCbacBanner-Blfpdcsk.js";import"./makeExternalStore-DW8kySK5.js";import"./Tooltip-BXZr9F_U.js";import"./PopoverPopup-iv7FEw4f.js";import"./toNumber-BU2gou6s.js";import"./useOsdkClient-BUrpwuWU.js";import"./DropdownField-CHt7URKa.js";import"./withOsdkMetrics-neaDckHy.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
