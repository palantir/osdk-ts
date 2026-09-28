import{j as i}from"./iframe-C0Xv1P5p.js";import{O as p}from"./object-table-B4FUOYcx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2VU4NQk.js";import"./preload-helper-DK2j5cbT.js";import"./Table-CU1Qyt0T.js";import"./index-D6d1RC22.js";import"./Dialog-ChKuLAfw.js";import"./cross-C73iH-uw.js";import"./svgIconContainer-D6QpYyks.js";import"./useBaseUiId-DyrVnx3i.js";import"./InternalBackdrop-a7BFb5yp.js";import"./composite-DpnK5-9R.js";import"./index-CDpNmz1t.js";import"./index-D0yTA5vb.js";import"./index-DIBkcKPQ.js";import"./useEventCallback-BBtLdhG6.js";import"./SkeletonBar-CsuhaBVh.js";import"./LoadingCell-CG3DXpJr.js";import"./ColumnConfigDialog-C0j_b73w.js";import"./DraggableList-CetpfoCD.js";import"./search-BS7q0In0.js";import"./Input-C9L75zsf.js";import"./useControlled-qTk4_Vdn.js";import"./Button-CQxPIDLb.js";import"./small-cross-Bj0EFv1l.js";import"./ActionButton-DGf5lIp9.js";import"./Checkbox-HVh17jbi.js";import"./useValueChanged-CfD_n30e.js";import"./CollapsiblePanel-CIp9LNN3.js";import"./MultiColumnSortDialog-DhjXyduh.js";import"./MenuTrigger-ihJMW9zG.js";import"./CompositeItem-BRH5qaMr.js";import"./ToolbarRootContext-B2RHT2LC.js";import"./getDisabledMountTransitionStyles-DTtgGuxo.js";import"./getPseudoElementBounds-CnBSmlCQ.js";import"./chevron-down-Buq4H8ml.js";import"./index-DuGDHKhx.js";import"./error-DoPz0IgF.js";import"./BaseCbacBanner-BIlKvGdQ.js";import"./makeExternalStore-qN6iSkao.js";import"./Tooltip-ClUPMWTl.js";import"./PopoverPopup-C3x1U_f_.js";import"./debounce-Bf-s2Lqp.js";import"./useOsdkClient-DanPI2Ge.js";import"./tick-Bve5oyKY.js";import"./DropdownField-BY3LIDfC.js";import"./isEqual-BHWxWtGu.js";import"./withOsdkMetrics-BlIQDFpZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
