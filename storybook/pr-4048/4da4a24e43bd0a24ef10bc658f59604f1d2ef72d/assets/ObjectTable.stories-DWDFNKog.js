import{j as i}from"./iframe-DjbWNQ0f.js";import{O as p}from"./object-table-BLFRI_j0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DY1Co822.js";import"./preload-helper-DZqHfMjf.js";import"./Table-D-DNjlJ6.js";import"./index-DRSVy1id.js";import"./Dialog-C__zk8w2.js";import"./cross-Cqp-lwuB.js";import"./svgIconContainer-DpceGvSJ.js";import"./useBaseUiId-CQ0aFnKR.js";import"./InternalBackdrop-CooNNSHH.js";import"./composite-ChJITrYk.js";import"./index-B_S3CqUO.js";import"./index-CT8ZI4c8.js";import"./index-DfXwDEaE.js";import"./useEventCallback-BSzqPBzd.js";import"./SkeletonBar-Biacx3N_.js";import"./LoadingCell-MOiVHXCy.js";import"./ColumnConfigDialog-CDHUXiAV.js";import"./DraggableList-BJMM2TUa.js";import"./search-Cp6KPEc7.js";import"./Input-qPpH6qdj.js";import"./useControlled-CdWNY0zK.js";import"./Button-DMt4PyPT.js";import"./small-cross-Drrz11Vc.js";import"./ActionButton-DNL1JaTx.js";import"./Checkbox-gSuuoLi1.js";import"./useValueChanged-_VLUSyOj.js";import"./CollapsiblePanel-1MDyh-8L.js";import"./MultiColumnSortDialog-DDlQXzaN.js";import"./MenuTrigger-pODNQNtv.js";import"./CompositeItem-BSe1aJMv.js";import"./ToolbarRootContext-DHwz-r64.js";import"./getDisabledMountTransitionStyles-S-y8QJJa.js";import"./getPseudoElementBounds-B8z3ndYd.js";import"./chevron-down-Dn4fSYZt.js";import"./index-C8Z34pPC.js";import"./error-DBRIaq9T.js";import"./BaseCbacBanner-BLRwhIfO.js";import"./makeExternalStore-BTX3xjPy.js";import"./Tooltip-Bg_Tux9e.js";import"./PopoverPopup-HGqWpJmj.js";import"./debounce-CbTVWiuR.js";import"./useOsdkClient-Bc0GWDgg.js";import"./tick-gtzlN82s.js";import"./DropdownField-DPS-yQWq.js";import"./isEqual-DNABgG-o.js";import"./withOsdkMetrics-DMIQgg40.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
