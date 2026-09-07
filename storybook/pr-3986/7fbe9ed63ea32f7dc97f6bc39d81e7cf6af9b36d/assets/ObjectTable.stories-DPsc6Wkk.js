import{j as i}from"./iframe-NrfGywpz.js";import{O as p}from"./object-table-CSBOnXso.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-4Jj_4ndM.js";import"./preload-helper-B_PzSpqk.js";import"./Table-yN6i7lAP.js";import"./index-B4J3JGGr.js";import"./Dialog-C2AOq1lk.js";import"./cross-Caw6Pz43.js";import"./svgIconContainer-Cgk6hNay.js";import"./useBaseUiId-DgnEpncS.js";import"./InternalBackdrop-DwTNI5Cd.js";import"./composite-DA8gx3Og.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./index-D3KOsz6o.js";import"./useEventCallback-DGcpXBNW.js";import"./SkeletonBar-DEllJNlP.js";import"./LoadingCell-B5rJAwI5.js";import"./ColumnConfigDialog-5mgHcV2b.js";import"./DraggableList-mQAKFBz7.js";import"./search-DU1IM6NB.js";import"./Input-CCWHU-92.js";import"./useControlled-DTlMTcYw.js";import"./Button-DIZaR5tq.js";import"./small-cross-CqGyxp_N.js";import"./ActionButton-CKkZcYry.js";import"./Checkbox-CIZsMWNA.js";import"./useValueChanged-DybLxmI0.js";import"./CollapsiblePanel-CdmC8pOd.js";import"./MultiColumnSortDialog-NTJeK39Q.js";import"./MenuTrigger-D7_F68sm.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./getDisabledMountTransitionStyles-z6rzoWNn.js";import"./getPseudoElementBounds-ButHWGJx.js";import"./chevron-down-Cswe4CW9.js";import"./index-hEzcpiCN.js";import"./error-DaUrBpBS.js";import"./BaseCbacBanner-CN69LqS-.js";import"./makeExternalStore-D2ri9UvN.js";import"./Tooltip-DpVDM5M6.js";import"./PopoverPopup-hYgPs6_l.js";import"./debounce-CsnCNeb8.js";import"./useOsdkClient-DsjVhBsW.js";import"./tick-ZKA2ZAhf.js";import"./DropdownField-CuIAd7EW.js";import"./isEqual-BuonFklC.js";import"./withOsdkMetrics-5_2pgCwu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
