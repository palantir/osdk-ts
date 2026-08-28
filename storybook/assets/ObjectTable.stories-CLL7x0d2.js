import{j as i}from"./iframe-u9hOX5tX.js";import{O as p}from"./object-table-BJHX7Vyh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCNU7IF2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BzgweOE7.js";import"./index-DxD8FM_1.js";import"./Dialog-DVGdVo-X.js";import"./cross-DrLAndSC.js";import"./svgIconContainer-BhCzJfro.js";import"./useBaseUiId-NreGDPh5.js";import"./InternalBackdrop-P_7OvP9a.js";import"./composite-B0ATBYyt.js";import"./index-CiR2ByAS.js";import"./index-Bn7Z55t6.js";import"./index-CFOUBP5K.js";import"./useEventCallback-CHykcO5e.js";import"./SkeletonBar-DoUbz6Ni.js";import"./LoadingCell-CQ6s98i_.js";import"./ColumnConfigDialog-Bz70j5Ne.js";import"./DraggableList-DVHeZQF9.js";import"./search-D3Zuzx7q.js";import"./Input-DUgdjwsc.js";import"./useControlled-Bfp9z5LY.js";import"./Button-DIQR92sZ.js";import"./small-cross-Dlcf9okf.js";import"./ActionButton-C0VbMkfx.js";import"./Checkbox-tT1GQ2wN.js";import"./useValueChanged-ZtLxRCub.js";import"./CollapsiblePanel-CWP0NHJq.js";import"./MultiColumnSortDialog-USQ-f1i6.js";import"./MenuTrigger-DC5MUKls.js";import"./CompositeItem-mIZsnJNz.js";import"./ToolbarRootContext-C-NXaLDf.js";import"./getDisabledMountTransitionStyles-CtlgkIoY.js";import"./getPseudoElementBounds-C7nlu7dc.js";import"./chevron-down-DJMNDdHU.js";import"./index-DBgJDRZ-.js";import"./error-BYByE55v.js";import"./BaseCbacBanner-COgIJB5W.js";import"./makeExternalStore-j84EUnMN.js";import"./Tooltip-uYEwdezG.js";import"./PopoverPopup-D5EtTsUF.js";import"./debounce-DDOmq6Bw.js";import"./useOsdkClient-hhbELhlD.js";import"./tick-ChqeFAL5.js";import"./DropdownField-C8giUWCR.js";import"./isEqual-QkICyt9V.js";import"./withOsdkMetrics-DZo9ZLyt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
