import{j as i}from"./iframe-B9FGe5wd.js";import{O as p}from"./object-table-D7wbIGVv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BL038Lyu.js";import"./preload-helper-BIve45PS.js";import"./Table-DyFAXF09.js";import"./index-B6Sv1VZS.js";import"./Dialog-DUZOcpTK.js";import"./cross-D3t_et5l.js";import"./svgIconContainer-CaF_wsik.js";import"./useBaseUiId-DfSj_XIi.js";import"./InternalBackdrop--zuPxYtX.js";import"./composite-DHxnLj2Y.js";import"./index-BkBeEw9r.js";import"./index-DrrLP325.js";import"./index-Dxjh7rRf.js";import"./useEventCallback-688mizLg.js";import"./SkeletonBar-D8XdUgSi.js";import"./LoadingCell-DBYmKom2.js";import"./ColumnConfigDialog-B1pRd-4k.js";import"./DraggableList-CZJp3ZhS.js";import"./search-oVgFpE2T.js";import"./Input-Dxr70xfD.js";import"./useControlled-c-18TxdJ.js";import"./Button-D3RbxwJA.js";import"./small-cross-DRTTYj7_.js";import"./ActionButton-CL2cla4Q.js";import"./Checkbox-1J4ATAQU.js";import"./useValueChanged-CBKkH70d.js";import"./CollapsiblePanel-mSdRRs77.js";import"./MultiColumnSortDialog-B9WlQiaA.js";import"./MenuTrigger-DLPyf9Xp.js";import"./CompositeItem-D_joThID.js";import"./ToolbarRootContext-ClYwCpcv.js";import"./getDisabledMountTransitionStyles-CRl0TcRY.js";import"./getPseudoElementBounds-DuNPvi2X.js";import"./chevron-down-BJC3N-Xj.js";import"./index-BT_l51Su.js";import"./error-DJQGwxmj.js";import"./BaseCbacBanner-CG6vFuER.js";import"./makeExternalStore-hUZ9hqeg.js";import"./Tooltip-CpDuLI7V.js";import"./PopoverPopup-C_VmHiZ7.js";import"./debounce-m12bCzvP.js";import"./useOsdkClient-usrWCKIw.js";import"./tick-B7eZKbT-.js";import"./DropdownField-COR0BXwM.js";import"./isEqual-D-W0erT-.js";import"./withOsdkMetrics-Bxy0f18Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
