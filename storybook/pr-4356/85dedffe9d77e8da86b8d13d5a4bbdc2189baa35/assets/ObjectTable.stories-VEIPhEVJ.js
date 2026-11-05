import{j as i}from"./iframe-BGZow3KJ.js";import{O as p}from"./object-table-Dy50goam.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDqm2KXd.js";import"./preload-helper-CV0-5wxc.js";import"./Table-DA1FfOaK.js";import"./index-BDJbf4mz.js";import"./Dialog-B1qY-5Ke.js";import"./cross-Dn--TE22.js";import"./svgIconContainer-GlJoQzna.js";import"./useBaseUiId-BlZeP_kj.js";import"./InternalBackdrop-B_sB-beZ.js";import"./composite-CN_PLOWp.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./index-DEaxfkN8.js";import"./useEventCallback-mWSDmhwd.js";import"./SkeletonBar-DU-7laho.js";import"./LoadingCell-BY7lFPHu.js";import"./ColumnConfigDialog-BzmNhDRK.js";import"./DraggableList-BWanF9g_.js";import"./search-xttomfsG.js";import"./Input-BSDEuHVc.js";import"./useControlled-C-Ujr0_X.js";import"./Button-B8_EYdXY.js";import"./small-cross-DO6-UyiL.js";import"./ActionButton-BWeIxwPs.js";import"./Checkbox-D68JXFmj.js";import"./useValueChanged-Bau6PUUH.js";import"./CollapsiblePanel-CwHNwtms.js";import"./MultiColumnSortDialog-CN1uErBY.js";import"./MenuTrigger--QqhK-w2.js";import"./CompositeItem-BUIK-kSM.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./getDisabledMountTransitionStyles-BTYArxOj.js";import"./getPseudoElementBounds-D5IsxrGd.js";import"./chevron-down-4eRxImwL.js";import"./index-D9ncN4SR.js";import"./error-C57Ogh7g.js";import"./BaseCbacBanner-COW4ued-.js";import"./makeExternalStore-C3raoZ1p.js";import"./Tooltip-BRxp8-5A.js";import"./PopoverPopup-CUF3E2YZ.js";import"./debounce-B9ghShVf.js";import"./useOsdkClient-hMBV3ED4.js";import"./tick-Du4Lzmue.js";import"./DropdownField-CnC7UHHW.js";import"./isEqual-CLKX9Iv1.js";import"./withOsdkMetrics-D6t-dwVR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
