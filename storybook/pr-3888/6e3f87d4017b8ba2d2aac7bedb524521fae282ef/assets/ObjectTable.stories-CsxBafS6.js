import{j as i}from"./iframe-3nC60a4v.js";import{O as p}from"./object-table-CV-F6wRx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5da-N8F.js";import"./preload-helper-CtQiSH5M.js";import"./Table-kq55NlgD.js";import"./index--5KTZ4Ep.js";import"./Dialog-BiWAkt-w.js";import"./cross-CMAuZjpn.js";import"./svgIconContainer-Hgjanp0y.js";import"./useBaseUiId-BM6_UXz4.js";import"./InternalBackdrop-BiiOafg8.js";import"./composite-BrRtjrgR.js";import"./index-CLrFIYZg.js";import"./index-DzaKOe1M.js";import"./index-CocS6_I5.js";import"./useEventCallback-ywBwLJd_.js";import"./SkeletonBar-CiKIs5AX.js";import"./LoadingCell-DqkoVxAw.js";import"./ColumnConfigDialog-_767sJGS.js";import"./DraggableList-BQ1mmbNV.js";import"./search-DQ5LXzk6.js";import"./Input-ChkMuz1l.js";import"./useControlled-Ba8inJDj.js";import"./Button-Cnm3S-R_.js";import"./small-cross-KPK1DvK4.js";import"./ActionButton-DJqZpL4G.js";import"./Checkbox-Db399nrU.js";import"./useValueChanged-CGG_8xpf.js";import"./CollapsiblePanel-Cpc-708g.js";import"./MultiColumnSortDialog-lsuxLQhA.js";import"./MenuTrigger-Q6-vCaVA.js";import"./CompositeItem-BEbKblcQ.js";import"./ToolbarRootContext-BdFb43yO.js";import"./getDisabledMountTransitionStyles-kg_yOzXE.js";import"./getPseudoElementBounds-CmEHJYzZ.js";import"./chevron-down-D0HgWRzj.js";import"./index-CsKQS3Xc.js";import"./error-mCE2N3tZ.js";import"./BaseCbacBanner-CqS2gRe5.js";import"./makeExternalStore-0l0defH5.js";import"./Tooltip-DhpiXHiy.js";import"./PopoverPopup-CF0wadjB.js";import"./debounce-CyQSshlk.js";import"./useOsdkClient-yREfglk8.js";import"./tick-DXiaINGh.js";import"./DropdownField-DjbTnSu5.js";import"./isEqual-DBChHJW0.js";import"./withOsdkMetrics-BFnBWSw3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
