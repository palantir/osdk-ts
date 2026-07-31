import{j as i}from"./iframe-CVSzcR9w.js";import{O as p}from"./object-table-BL1OrLFB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CDRGVLxJ.js";import"./preload-helper-BmmGuI8h.js";import"./Table-CWnSfT3m.js";import"./index-CoAdBXlo.js";import"./Dialog-BzNiLNgs.js";import"./cross-V8sJpGew.js";import"./svgIconContainer-KW-Ldlhm.js";import"./useBaseUiId-pwNrWxdW.js";import"./InternalBackdrop-DNoxDdhd.js";import"./composite-C1Itxjsp.js";import"./index-7SZNtxet.js";import"./index-qmxryskj.js";import"./index-C9y3lIUT.js";import"./useEventCallback-DpMXC2Hy.js";import"./SkeletonBar-B9Ea506E.js";import"./LoadingCell-DDjnYE73.js";import"./ColumnConfigDialog-C4dV68Pi.js";import"./DraggableList-WoTEeIb9.js";import"./search-BnG6tzYG.js";import"./Input-BoTWr8hd.js";import"./useControlled-D5f5j6Pp.js";import"./isEqual-ClJk3lFA.js";import"./isObject-Vb025kqi.js";import"./Button-DeOcB25O.js";import"./ActionButton-BcK8fNN1.js";import"./Checkbox-BSkLo_n2.js";import"./useValueChanged-CJNDKAIt.js";import"./CollapsiblePanel-XxbiJK0o.js";import"./MultiColumnSortDialog-DJCm2HJK.js";import"./MenuTrigger-B4kKkHBw.js";import"./CompositeItem-Bp7fB8eh.js";import"./ToolbarRootContext-DvS1wowG.js";import"./getDisabledMountTransitionStyles-JXZ7CF5Q.js";import"./getPseudoElementBounds-1PgxGw36.js";import"./chevron-down-DgBBMt89.js";import"./index-__u3if6D.js";import"./error-CyOfkgHN.js";import"./BaseCbacBanner-G11Duftm.js";import"./makeExternalStore-B7Vg_OOg.js";import"./Tooltip-BGpjdADX.js";import"./PopoverPopup-BeNdVAq4.js";import"./toNumber-cJlww_NR.js";import"./useOsdkClient-zxzV_-Ks.js";import"./tick-DGpYKPfs.js";import"./DropdownField-DD8sp4es.js";import"./withOsdkMetrics-yQOKEog8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
