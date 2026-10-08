import{j as i}from"./iframe-Dh2xvDPL.js";import{O as p}from"./object-table-CyttWP_N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3LfqpDjt.js";import"./preload-helper-SAHcs0zZ.js";import"./Table-BBHaU1bC.js";import"./index-Dr7bSUf-.js";import"./Dialog-CCieSDld.js";import"./cross-ZJLJ2cFd.js";import"./svgIconContainer-BHSUSAvD.js";import"./useBaseUiId-X9Y2KA52.js";import"./InternalBackdrop-C2q5bYna.js";import"./composite-KqTwPrS-.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./index-BM8dCjb_.js";import"./useEventCallback-C1LEHjlu.js";import"./SkeletonBar-DlK6Lvgg.js";import"./LoadingCell--qTTcwGL.js";import"./ColumnConfigDialog-DzRcgXCF.js";import"./DraggableList-D2Nvn9BZ.js";import"./search-DmyvADcW.js";import"./Input-D6WeFSc3.js";import"./useControlled-Cuxd_f5K.js";import"./Button-YpbDPlK1.js";import"./small-cross-DJlalsgy.js";import"./ActionButton-CGAhjyey.js";import"./Checkbox-BNxawU7W.js";import"./useValueChanged-DhcPVJzs.js";import"./CollapsiblePanel-Bx6XMZE8.js";import"./MultiColumnSortDialog-BY6eWIGX.js";import"./MenuTrigger-ChH9TEBU.js";import"./CompositeItem-DLX8hiU0.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./getDisabledMountTransitionStyles-DxtpCxOq.js";import"./getPseudoElementBounds-BI_64AOy.js";import"./chevron-down-Bnx_kJUl.js";import"./index-DSLCj2ev.js";import"./error-DKTxybZv.js";import"./BaseCbacBanner-BXlg9iiI.js";import"./makeExternalStore-DYD0iaqF.js";import"./Tooltip-C-gFw6R-.js";import"./PopoverPopup-BCrdCA5S.js";import"./debounce-DG8yYAXE.js";import"./useOsdkClient-BDIRf078.js";import"./tick-1mKZAjPR.js";import"./DropdownField-CXn8MxM3.js";import"./isEqual-ChBky0gE.js";import"./withOsdkMetrics-DzUlIuBm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
