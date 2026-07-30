import{j as i}from"./iframe-FyhVxTrk.js";import{O as p}from"./object-table-B-v3OglS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B2OKPAOx.js";import"./preload-helper-Dgs_n9Dy.js";import"./Table-BrVoT8y3.js";import"./index-CXzmbyfT.js";import"./Dialog-ADhD3aFg.js";import"./cross-DPb3Lanf.js";import"./svgIconContainer-mVuSeb5R.js";import"./useBaseUiId-BsG-Zm5E.js";import"./InternalBackdrop-lcLk2Gq9.js";import"./composite-DaCZVCOl.js";import"./index-DRvakaoR.js";import"./index-BcB9qF6v.js";import"./index-DZEBmZlt.js";import"./useEventCallback-CS4xnGaY.js";import"./SkeletonBar-vBALGr9N.js";import"./LoadingCell-D_pAN0sa.js";import"./ColumnConfigDialog-Idwcyfol.js";import"./DraggableList-BP9Ko5QT.js";import"./search-CtSjt_Wn.js";import"./Input-CqlCBTmB.js";import"./useControlled-qW1tEB03.js";import"./isEqual-DKIpiXeA.js";import"./isObject-BX6l97k5.js";import"./Button-DZSjklBP.js";import"./ActionButton-DtPXi7bs.js";import"./Checkbox-CYpeO19Y.js";import"./useValueChanged-IvYOrVB3.js";import"./CollapsiblePanel-BDVhZGI8.js";import"./MultiColumnSortDialog-RxvuixfL.js";import"./MenuTrigger-FabbnfzY.js";import"./CompositeItem-D8I-jjeP.js";import"./ToolbarRootContext-_joG3CJi.js";import"./getDisabledMountTransitionStyles-D_8DEOz8.js";import"./getPseudoElementBounds-CQ3XjkJ4.js";import"./chevron-down-Dm-2k2rq.js";import"./index-CXhL9gtU.js";import"./error-BlFFjo7T.js";import"./BaseCbacBanner-BDIpvw6L.js";import"./makeExternalStore-nNw6ACoo.js";import"./Tooltip-B1BshqRw.js";import"./PopoverPopup-V8zfBt9y.js";import"./toNumber-Cys5SJht.js";import"./useOsdkClient-CrxPmQPb.js";import"./tick-B8Sdc5b8.js";import"./DropdownField-DLlzMdB9.js";import"./withOsdkMetrics-BYmyRLlT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
