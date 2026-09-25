import{j as i}from"./iframe-CRRi8SgO.js";import{O as p}from"./object-table-DdWWXjnt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjAdXHP7.js";import"./preload-helper-BwQis52u.js";import"./Table-gWpIhT1N.js";import"./index-2tg5-UQV.js";import"./Dialog-CIutlh9B.js";import"./cross-C1gwy4VO.js";import"./svgIconContainer-DTz_qMc2.js";import"./useBaseUiId-iEjqlsrm.js";import"./InternalBackdrop-D30RxIiy.js";import"./composite-AZXA_87F.js";import"./index-uVzecxAq.js";import"./index-BcwD145P.js";import"./index-DxRnE0pO.js";import"./useEventCallback-BIZVp9Yo.js";import"./SkeletonBar-CgBZhydk.js";import"./LoadingCell-h47xUmM7.js";import"./ColumnConfigDialog-DuWWlKqr.js";import"./DraggableList-CLZzdOnX.js";import"./search-BNshWxL3.js";import"./Input-DG2OkDHs.js";import"./useControlled-CowgUxzg.js";import"./Button-nDYaCN2P.js";import"./small-cross-5jUutM_4.js";import"./ActionButton-D6GTAbLZ.js";import"./Checkbox-CvFrAsxy.js";import"./useValueChanged-CjTliyXW.js";import"./CollapsiblePanel-BLx3NSxa.js";import"./MultiColumnSortDialog-BNasdP-v.js";import"./MenuTrigger-O7MVt_aS.js";import"./CompositeItem-Bioh8Trj.js";import"./ToolbarRootContext-D3Qkj0-s.js";import"./getDisabledMountTransitionStyles-CQJ8ore_.js";import"./getPseudoElementBounds-CWEIz1jB.js";import"./chevron-down-D4f-osYR.js";import"./index-B8kfer_a.js";import"./error-DJ0QJQKA.js";import"./BaseCbacBanner-Bu8cxWyQ.js";import"./makeExternalStore-7XhwS57f.js";import"./Tooltip-TYF1TzI8.js";import"./PopoverPopup-JUUuLGr6.js";import"./debounce-CUx7FQzR.js";import"./useOsdkClient-E5LrSb6S.js";import"./tick-DKaiCuS5.js";import"./DropdownField-K2ZSDodB.js";import"./isEqual-r311FMGD.js";import"./withOsdkMetrics-gAZiEnbR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
