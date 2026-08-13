import{j as i}from"./iframe-KgHs4zat.js";import{O as p}from"./object-table-DV5y26_M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BR3jvd8x.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-74UoGiwT.js";import"./index-4vqX9qxC.js";import"./Dialog-BpGjciNF.js";import"./cross-DhFqeu01.js";import"./svgIconContainer-DQnAfD0o.js";import"./useBaseUiId-DalgrHe6.js";import"./InternalBackdrop-DViNfjhE.js";import"./composite-IhPVrKNo.js";import"./index-sG7sensQ.js";import"./index-C8wkzaSL.js";import"./index-Cvi9YUqR.js";import"./useEventCallback-k4xeUSxb.js";import"./SkeletonBar-Bf7e_vZS.js";import"./LoadingCell-DKEWteEU.js";import"./ColumnConfigDialog-CbKTIPgu.js";import"./DraggableList-89OxstIM.js";import"./search-EITjVgXy.js";import"./Input-a2sXSpjj.js";import"./useControlled-CxaIzWVI.js";import"./Button-Dpxg_r7U.js";import"./small-cross-D0RxxQjs.js";import"./ActionButton-C50xJeW0.js";import"./Checkbox-DrjqhFVh.js";import"./useValueChanged-BFs6pXAE.js";import"./CollapsiblePanel-Z924RNew.js";import"./MultiColumnSortDialog-mu_PjvZK.js";import"./MenuTrigger-BpEoVlQn.js";import"./CompositeItem-7z4K7NB3.js";import"./ToolbarRootContext-D2FvLITL.js";import"./getDisabledMountTransitionStyles-NJe8la4r.js";import"./getPseudoElementBounds-BZaAPVEY.js";import"./chevron-down-CkShUoKE.js";import"./index-Dtd5pHFd.js";import"./error-DM5-tWgF.js";import"./BaseCbacBanner-D7M6Q2cB.js";import"./makeExternalStore-CgubNTuf.js";import"./Tooltip-DgoYnTNF.js";import"./PopoverPopup-DrtPa-a0.js";import"./debounce-CDJ8NUNV.js";import"./useOsdkClient-DCQJMlbA.js";import"./tick-9dKwtDHQ.js";import"./DropdownField-TNE9D_Wl.js";import"./isEqual-DtaZ63Yd.js";import"./withOsdkMetrics-fRmXbymy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
