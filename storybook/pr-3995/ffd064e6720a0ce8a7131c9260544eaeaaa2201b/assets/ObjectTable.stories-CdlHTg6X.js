import{j as i}from"./iframe-CI9rENOr.js";import{O as p}from"./object-table-CAxgCc-0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOP2gmjg.js";import"./preload-helper-C65H2kRp.js";import"./Table-EHNGcZrz.js";import"./index-BaGMdRan.js";import"./Dialog-Ce3Y_ozd.js";import"./cross-DbBPFO7V.js";import"./svgIconContainer-BcUTFG9y.js";import"./useBaseUiId-sOlDVMc5.js";import"./InternalBackdrop-BeCVxxfg.js";import"./composite-DmfEV9z-.js";import"./index-DgVrz3v8.js";import"./index-2mtmcLVe.js";import"./index-B9k7nzsO.js";import"./useEventCallback-DONfxHkp.js";import"./SkeletonBar-DyVv9MEu.js";import"./LoadingCell-Dq1hVZcx.js";import"./ColumnConfigDialog-C7Ca5yIB.js";import"./DraggableList-BMHfoMK5.js";import"./search-C3IyHFqm.js";import"./Input-DVQjs6N1.js";import"./useControlled-Cem_rLXf.js";import"./Button-DhFEEkGk.js";import"./small-cross-CAdXuenP.js";import"./ActionButton-sBlmA4ya.js";import"./Checkbox-BiUdICo7.js";import"./useValueChanged-B6kyVGgr.js";import"./CollapsiblePanel-C5gNOdt3.js";import"./MultiColumnSortDialog-CrNi1rXh.js";import"./MenuTrigger-BvjuuXCg.js";import"./CompositeItem-C1H6xqvv.js";import"./ToolbarRootContext-ZE_LxgeM.js";import"./getDisabledMountTransitionStyles-DLh69aYy.js";import"./getPseudoElementBounds-Coe-9CHL.js";import"./chevron-down-CcfRnQgG.js";import"./index-C7fkS1TJ.js";import"./error-DGU8szJe.js";import"./BaseCbacBanner-CAd-xBRe.js";import"./makeExternalStore-BWkGDDsC.js";import"./Tooltip-BRvvJEEZ.js";import"./PopoverPopup-CdXPv9sE.js";import"./debounce-r7EOKfq-.js";import"./useOsdkClient-D_P69Zxs.js";import"./tick-DYP7mVbi.js";import"./DropdownField-BtgmtoFd.js";import"./isEqual-Cy550gAP.js";import"./withOsdkMetrics-DCX_NY4O.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
