import{j as i}from"./iframe-3FtDhECv.js";import{O as p}from"./object-table-B4QWEKR6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dm4rthHX.js";import"./preload-helper-70ekmL9Z.js";import"./Table-DnGLekSf.js";import"./index-DDuj02wW.js";import"./Dialog-LyQi3Gjk.js";import"./cross-3payUlda.js";import"./svgIconContainer-8d5y5XmV.js";import"./useBaseUiId-ba-AZLlh.js";import"./InternalBackdrop-C2qcUA_S.js";import"./composite-l2Xk1Iwz.js";import"./index-Di_GBi9u.js";import"./index-CdOyTJBF.js";import"./index-Bb5nNbut.js";import"./useEventCallback-BV-K2SB8.js";import"./SkeletonBar-BaDwHjIr.js";import"./LoadingCell-BjgaM6VY.js";import"./ColumnConfigDialog-DUOgEN2V.js";import"./DraggableList-G2GxQFyw.js";import"./search-DQyEiXG4.js";import"./Input-eNpsdHBj.js";import"./useControlled-DAFRtrE7.js";import"./Button-CtxTGJJ5.js";import"./small-cross-CzrrmRc2.js";import"./ActionButton-D3HdF3S7.js";import"./Checkbox-6zXLtXx_.js";import"./useValueChanged-JT8yV3AQ.js";import"./CollapsiblePanel-Bju8gm12.js";import"./MultiColumnSortDialog-DXsifQAh.js";import"./MenuTrigger-CTl5ZYh1.js";import"./CompositeItem-X94Emfw4.js";import"./ToolbarRootContext-DWWF2uk2.js";import"./getDisabledMountTransitionStyles-Sp-qRZJf.js";import"./getPseudoElementBounds-Bb3UwPzL.js";import"./chevron-down-eXeXyWJp.js";import"./index-BmkwvzsK.js";import"./error-Co_bSTMk.js";import"./BaseCbacBanner-DeVRrDcz.js";import"./makeExternalStore-Bttk8K2M.js";import"./Tooltip-DBBzsEJq.js";import"./PopoverPopup-Cbhnh0d6.js";import"./debounce-D5jfSGyg.js";import"./useOsdkClient-B3tCYy8u.js";import"./tick-DP_oPzGl.js";import"./DropdownField-DGhWjt6v.js";import"./isEqual-DbUoSpPl.js";import"./withOsdkMetrics-CkiSk4kW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
