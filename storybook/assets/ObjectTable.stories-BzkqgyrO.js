import{j as i}from"./iframe-u83eKIrq.js";import{O as p}from"./object-table-CstgSJbN.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Da2h5yUE.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CAb23y7Q.js";import"./index-DAH5uwdU.js";import"./Dialog-WPnBM2ww.js";import"./cross-BQtpAbkF.js";import"./svgIconContainer-bWBjq6xN.js";import"./useBaseUiId-PA8l4EIZ.js";import"./InternalBackdrop-HlmO7rQ4.js";import"./composite-3XcAHwyh.js";import"./index-Byvi8c4H.js";import"./index-uZ0DL954.js";import"./index-BYUqOIx_.js";import"./useEventCallback-D5UKlND-.js";import"./SkeletonBar-CsMybwHV.js";import"./LoadingCell-BQ2WwuWY.js";import"./ColumnConfigDialog-MqAiddcO.js";import"./DraggableList-DoAWVMP-.js";import"./search-D9liKBNY.js";import"./Input-BSdYhVma.js";import"./useControlled-6FyMHK6P.js";import"./isEqual-COXKDF_-.js";import"./isObject-DSSIav4-.js";import"./Button-CdLpTr9e.js";import"./ActionButton-DYLdPsdu.js";import"./Checkbox-CbSXeNsV.js";import"./useValueChanged-DLxmyEKa.js";import"./CollapsiblePanel-ChYEXrik.js";import"./MultiColumnSortDialog-DUiRfpw5.js";import"./MenuTrigger-MfwaUfhz.js";import"./CompositeItem-C9wVVHjV.js";import"./ToolbarRootContext-0AKJJTto.js";import"./getDisabledMountTransitionStyles-B25FvRYf.js";import"./getPseudoElementBounds-CwdM8KDF.js";import"./chevron-down-iwF-GvDx.js";import"./index-jMor5Orb.js";import"./error-ASL9njaz.js";import"./BaseCbacBanner-BDO9PVXw.js";import"./makeExternalStore-C_DSvJXm.js";import"./Tooltip-BLxhet1u.js";import"./PopoverPopup-Cx5w2fOt.js";import"./toNumber-eKXy_LYW.js";import"./useOsdkClient-Bfml6VSk.js";import"./tick-BmvgPI_g.js";import"./DropdownField-DWkbu1wg.js";import"./withOsdkMetrics-v2D5VOnL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
