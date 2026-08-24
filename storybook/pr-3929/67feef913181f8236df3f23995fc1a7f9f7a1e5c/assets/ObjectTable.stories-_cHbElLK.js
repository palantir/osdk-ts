import{j as i}from"./iframe-BaZrwhZx.js";import{O as p}from"./object-table-D3_OLLkg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BybLktsY.js";import"./preload-helper-DnruKc6a.js";import"./Table-29S7j1SD.js";import"./index-D-0PlAzK.js";import"./Dialog-CgLu58Ng.js";import"./cross-DyGYbG0h.js";import"./svgIconContainer-CPS4uDwC.js";import"./useBaseUiId-DP1A1DzF.js";import"./InternalBackdrop-BlVFF9Uk.js";import"./composite-TWu21kAm.js";import"./index-DqDEI7FH.js";import"./index-DPaJCD1i.js";import"./index-1hjhibA2.js";import"./useEventCallback-DleBT0Tw.js";import"./SkeletonBar-cgjN-Dqz.js";import"./LoadingCell-BGDV83Xi.js";import"./ColumnConfigDialog-BAlHt39x.js";import"./DraggableList-BS0v4LuN.js";import"./search-71bjR_1r.js";import"./Input-DobSEfMB.js";import"./useControlled-Dlt0xr8S.js";import"./Button-dH1tlH1-.js";import"./small-cross-Co1EYnRL.js";import"./ActionButton-R0r9xrNl.js";import"./Checkbox-Df3SYGBx.js";import"./useValueChanged-DASMciQb.js";import"./CollapsiblePanel-8fm_d55s.js";import"./MultiColumnSortDialog-DEShEitN.js";import"./MenuTrigger-CqaGYtW4.js";import"./CompositeItem-DSkIv2C1.js";import"./ToolbarRootContext-2JwHwx0i.js";import"./getDisabledMountTransitionStyles-NVGqMnQf.js";import"./getPseudoElementBounds-DgPoZQqw.js";import"./chevron-down-DT4qGbGn.js";import"./index-DF9-_rao.js";import"./error-BGPDkYrO.js";import"./BaseCbacBanner-DMtcNorV.js";import"./makeExternalStore-CILR1JwG.js";import"./Tooltip-DdG1nlz8.js";import"./PopoverPopup-ZXp_dq-B.js";import"./debounce-DnilrV4i.js";import"./useOsdkClient-BjmYpX5h.js";import"./tick-BvP19Wyv.js";import"./DropdownField-B9z89_X7.js";import"./isEqual-BKhwX9Wf.js";import"./withOsdkMetrics-Bcc9SY-J.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
