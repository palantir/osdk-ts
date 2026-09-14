import{j as i}from"./iframe-CHEKlg6X.js";import{O as p}from"./object-table-BP_zntdA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DKL17oQX.js";import"./preload-helper-Bk_EBvkM.js";import"./Table-BuyJuU36.js";import"./index-BlVg7-ny.js";import"./Dialog-vP86KpqH.js";import"./cross-CLXDm_xy.js";import"./svgIconContainer-CkU_wGfW.js";import"./useBaseUiId-Dm5MMLjS.js";import"./InternalBackdrop-C-VD7cf_.js";import"./composite-CfCX0gh6.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./index-D-2F9sJ3.js";import"./useEventCallback-OPC9ZPah.js";import"./SkeletonBar-BRlkv3E0.js";import"./LoadingCell-CJCiWLh3.js";import"./ColumnConfigDialog-CriuUgSm.js";import"./DraggableList-C_pi7nFv.js";import"./search-C2zDUTqA.js";import"./Input-BQ285Nrh.js";import"./useControlled-YILXX2lb.js";import"./Button-BeqL8QWK.js";import"./small-cross-D0U4JMZD.js";import"./ActionButton-BEr53hKB.js";import"./Checkbox-CLYIDo-5.js";import"./useValueChanged-DpZywDla.js";import"./CollapsiblePanel-BhAp95bX.js";import"./MultiColumnSortDialog-Cu7uDp8D.js";import"./MenuTrigger-Bs3ieiYQ.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./getDisabledMountTransitionStyles-HaZ0LwJT.js";import"./getPseudoElementBounds-eH10EFit.js";import"./chevron-down-2mN8R6m0.js";import"./index-CaLR8Vgq.js";import"./error-DR3tFMqe.js";import"./BaseCbacBanner-BZvPs1fF.js";import"./makeExternalStore--de5UDab.js";import"./Tooltip-B-MZurAO.js";import"./PopoverPopup-lRNkVQdy.js";import"./debounce-L-eLPBO3.js";import"./useOsdkClient-D_1rD8l7.js";import"./tick-BxZLRw17.js";import"./DropdownField-DMVGeKqk.js";import"./isEqual-CfJ7iHOo.js";import"./withOsdkMetrics-CBYIB_jK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
