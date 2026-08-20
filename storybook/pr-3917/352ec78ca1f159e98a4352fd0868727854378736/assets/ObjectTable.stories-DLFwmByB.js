import{j as i}from"./iframe-lVIo6mCc.js";import{O as p}from"./object-table-DXxQNff2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bhl4WVXQ.js";import"./preload-helper-BPCknu7S.js";import"./Table-nSjaGULp.js";import"./index-sQKHJ0R4.js";import"./Dialog-BFgYJDCN.js";import"./cross-DDW7y3Rx.js";import"./svgIconContainer-KAJria2X.js";import"./useBaseUiId-Bb_Owoni.js";import"./InternalBackdrop-hjJtUdco.js";import"./composite-Dyu8jPHN.js";import"./index-BPLBY7PN.js";import"./index-KnI2DQbj.js";import"./index-Dxls_Rr8.js";import"./useEventCallback-B3tJ4PYp.js";import"./SkeletonBar-DSmQVQye.js";import"./LoadingCell-CQ4ITvhW.js";import"./ColumnConfigDialog-CHgO6Ibs.js";import"./DraggableList-jP9CGfbS.js";import"./search-5GVEDD9j.js";import"./Input-BC_GUukM.js";import"./useControlled-D2ATBKpk.js";import"./Button-HHhZVC20.js";import"./small-cross-DJ1ySZs1.js";import"./ActionButton-ClryqIds.js";import"./Checkbox-By8aDHHp.js";import"./useValueChanged-CA7KhCt6.js";import"./CollapsiblePanel-C8RDA-GN.js";import"./MultiColumnSortDialog-LsoG3i1d.js";import"./MenuTrigger-BPqfQFrm.js";import"./CompositeItem-KgTOqVUP.js";import"./ToolbarRootContext-BEDTSOO-.js";import"./getDisabledMountTransitionStyles-BeNJaj2_.js";import"./getPseudoElementBounds-ChYvstEB.js";import"./chevron-down-DQF1xsk8.js";import"./index-amUPlgmX.js";import"./error-CvWvuZvg.js";import"./BaseCbacBanner-8ONf2RQq.js";import"./makeExternalStore-D7Usbb1F.js";import"./Tooltip-9AFmCZ_D.js";import"./PopoverPopup-3MhqAYn3.js";import"./debounce-COYGEiqP.js";import"./useOsdkClient-di6Xqfxh.js";import"./tick-DzyNfBq0.js";import"./DropdownField-Bz3GxUH-.js";import"./isEqual-D4ajbd5M.js";import"./withOsdkMetrics-DSn6dU66.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
